package com.example.payflow.repository;

import com.example.payflow.model.CardDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardDetailsRepository extends JpaRepository<CardDetails,Long> {
}
