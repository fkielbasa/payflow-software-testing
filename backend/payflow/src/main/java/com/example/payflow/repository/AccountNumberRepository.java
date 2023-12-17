package com.example.payflow.repository;

import com.example.payflow.model.AccountNumber;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountNumberRepository extends JpaRepository<AccountNumber,Long> {
    boolean existsByNumber(String accountNumber);
}
