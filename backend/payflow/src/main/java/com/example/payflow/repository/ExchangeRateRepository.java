package com.example.payflow.repository;

import com.example.payflow.model.ExchangeRate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ExchangeRateRepository extends JpaRepository<ExchangeRate, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM e ORDER BY e.date DESC LIMIT ?1")
    List<ExchangeRate> findAllOrderByDateDesc(int last);
}

