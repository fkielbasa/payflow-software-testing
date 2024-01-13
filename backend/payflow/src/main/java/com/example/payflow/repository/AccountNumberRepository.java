package com.example.payflow.repository;

import com.example.payflow.model.AccountNumber;
import com.example.payflow.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AccountNumberRepository extends JpaRepository<AccountNumber,Long> {
    boolean existsByNumber(String accountNumber);

    List<AccountNumber> findAllByUserId(User searchedUser);

    @Query("SELECT a FROM AccountNumber a WHERE a.number = ?1")
    AccountNumber findAccountNumberByNumber(String s);
}
