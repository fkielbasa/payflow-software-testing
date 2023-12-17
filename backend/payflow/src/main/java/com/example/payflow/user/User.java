package com.example.payflow.user;

import com.example.payflow.account_number.AccountNumber;
import com.example.payflow.address.Address;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User implements org.springframework.security.core.userdetails.UserDetails {
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user"
    )
    @SequenceGenerator(
            name = "user",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @Column(name="id_user")
    private Long id;
    private String firstName;
    private String lastName;
    private String country;
    @Temporal(TemporalType.DATE)
    private Date dateOfBirth;
    private String login;
    private String password;

    @Enumerated(value = EnumType.STRING)
    private Role role;
    @OneToOne
    @JoinColumn(name = "residential_address_id")
    private Address residentialAddress;

    @OneToOne
    @JoinColumn(name = "correspondence_address_id")
    private Address correspondenceAddress;

    @JsonIgnore
    @OneToMany(mappedBy = "userId"
//            ,
//            cascade = CascadeType.ALL,
//            fetch = FetchType.LAZY
    )
    private List<AccountNumber> accountNumbers = new ArrayList<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return login;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
