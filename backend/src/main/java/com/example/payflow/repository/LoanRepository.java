package com.example.payflow.repository;

import com.example.payflow.model.AccountNumber;
import com.example.payflow.model.Loan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LoanRepository extends JpaRepository<Loan,Long> {

    List<Loan> findAll();

}
