package com.example.payflow.security;

import com.example.payflow.model.AccountNumber;
import com.example.payflow.repository.AccountNumberRepository;
import com.example.payflow.model.CurrencyType;
import com.example.payflow.model.AccountNumberType;
import com.example.payflow.model.Address;
import com.example.payflow.repository.AddressRepository;
import com.example.payflow.service.MailService;
import com.example.payflow.model.Role;
import com.example.payflow.model.User;
import com.example.payflow.repository.UserRepository;
import com.example.payflow.model.UserDetails;
import com.example.payflow.repository.UserDetailsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Random;
import java.util.TimeZone;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;

    private final AddressRepository addressRepository;
    private final UserDetailsRepository userDetailsRepository;
    private final AccountNumberRepository accountNumberRepository;

    private final MailService mailService;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager manager;

    private Random random;
    private StringBuilder stringBuilder;

    private final BigDecimal STARTER_BALANCE = new BigDecimal(0);
    private final CurrencyType STARTER_CURRENCYType = CurrencyType.PLN;
    private final String STARTER_ACCOUNT_TYPE = "STANDARD";

    public AuthenticationRespone register(RegisterRequest request) throws ParseException {

        System.out.println(request.toString());
        var residentalAddress = Address.builder()
                .zipCode(request.getZipCode())
                .city(request.getCity())
                .street(request.getStreet())
                .houseNumber(request.getHomeNumber())
                .apartmentNumber(request.getApartmentNumber())
                .country(request.getCountryAddress())
                .build();

        var correspondenceAddress = Address.builder()
                .zipCode(request.getZipCodeCorrespondence())
                .city(request.getCityCorrespondence())
                .street(request.getStreetCorrespondence())
                .houseNumber(request.getHomeNumberCorrespondence())
                .apartmentNumber(request.getApartmentNumberCorrespondence())
                .country(request.getCountryAddressCorrespondence())
                .build();



        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
        formatter.setTimeZone(TimeZone.getTimeZone("Poland/Warsaw"));

        String userLogin = generateLogin();

        var user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .login(userLogin)
                .dateOfBirth(formatter.parse(request.getDateOfBirth()))
                .country(request.getCountry())
                .residentialAddress(residentalAddress)
                .correspondenceAddress(correspondenceAddress)
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();

        addressRepository.save(residentalAddress);
        addressRepository.save(correspondenceAddress);
        userRepository.save(user);
        var userDetails = UserDetails.builder()
                .userId(user)
                .email(request.getEmail())
                .phoneNumber(request.getPhoneNumber())
                .build();
        userDetailsRepository.save(userDetails);

        AccountNumberType accountNumberTypeAccount;
        if (request.getAccountType().equals(STARTER_ACCOUNT_TYPE))
            accountNumberTypeAccount = AccountNumberType.STANDARD;
        else
            accountNumberTypeAccount = AccountNumberType.INTENSIVE;

        var accountNumber = AccountNumber.builder()
                .number(generateAccountNumber())
                .balance(STARTER_BALANCE)
                .accountNumberType(accountNumberTypeAccount)
                .currencyType(STARTER_CURRENCYType)
                .userId(user)
                .build();
        accountNumberRepository.save(accountNumber);

        // Mail sending with login
        mailService.sendRegistrationMail(user.getFirstName(), userDetails.getEmail(), userLogin);

        var jwtToken = jwtService.generateToken(user);
        return AuthenticationRespone.builder()
                .token(jwtToken)
                .build();


    }

    public AuthenticationRespone authenticate(AuthenticationRequest request) {
        manager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getLogin(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByLogin(request.getLogin())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationRespone.builder()
                .token(jwtToken)
                .build();
    }

    private String generateLogin(){
        random = new Random();
        stringBuilder = new StringBuilder();
        for (int i = 0; i < 8; i++) {
            int randomNumber = random.nextInt(10); // 0-9
            stringBuilder.append(randomNumber);
        }
        if (!isLoginValid(stringBuilder.toString())){
            generateLogin();
        }
        return stringBuilder.toString();
    }

    private boolean isLoginValid(String login){
        return !userRepository.isUserExists(login);
    }
    private boolean isAccountNumberValid(String accountNumber){
        return !accountNumberRepository.existsByNumber(accountNumber);
    }

    private String generateAccountNumber(){
        random = new Random();
        stringBuilder = new StringBuilder();

        int firstDigit = random.nextInt(9) + 1;
        stringBuilder.append(firstDigit);

        for (int i = 0; i < 25; i++) {
            int randomNumber = random.nextInt(10);
            stringBuilder.append(randomNumber);
        }
        if (!isAccountNumberValid(stringBuilder.toString())){
            generateAccountNumber();
        }
        return stringBuilder.toString();
    }
}
