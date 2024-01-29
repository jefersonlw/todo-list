package com.backend.repository;

import com.backend.model.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoListRepository extends JpaRepository<Card, Long> {

}
