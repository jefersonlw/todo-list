package com.backend.service;

import com.backend.model.Card;
import com.backend.repository.TodoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cards")
public class TodoListService {

    @Autowired
    private TodoListRepository todoListRepository;

    @GetMapping
    public List<Card> getAllCards() {
        return todoListRepository.findAll();
    }

    @PostMapping
    public Card createCard(@RequestBody Card card) {
        return todoListRepository.save(card);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Card> updateCard(@PathVariable Long id, @RequestBody Card updatedCard) {
        Optional<Card> existingCard = todoListRepository.findById(id);

        if (existingCard.isPresent()) {
            Card card = existingCard.get();
            card.setDstitulo(updatedCard.getDstitulo());
            card.setDsdescricao(updatedCard.getDsdescricao());
            card.setDtcriacao(updatedCard.getDtcriacao());
            card.setDtconcluido(updatedCard.getDtconcluido());
            card.setIestatus(updatedCard.getIestatus());
            todoListRepository.save(card);
            return ResponseEntity.ok(card);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCard(@PathVariable Long id) {
        if (todoListRepository.existsById(id)) {
            todoListRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
