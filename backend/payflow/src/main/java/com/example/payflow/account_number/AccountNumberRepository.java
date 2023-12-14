package com.example.payflow.account_number;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountNumberRepository extends JpaRepository<AccountNumber,Long> {
    boolean existsByNumber(String accountNumber);
}
