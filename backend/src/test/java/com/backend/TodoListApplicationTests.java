package com.backend;

import com.backend.model.Card;
import com.backend.repository.TodoListRepository;
import com.backend.service.TodoListService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.verifyNoMoreInteractions;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
class TodoListApplicationTests {

	@Mock
	private TodoListRepository todoListRepository;

	@InjectMocks
	private TodoListService todoListService;

	@Test
	void getAllTodos_ShouldReturnListOfCards() {
		LocalDateTime startDate = LocalDateTime.ofInstant(new Date().toInstant(), ZoneId.systemDefault());
		LocalDateTime endDate = startDate.plusHours(5);
		Card card1 = new Card(1L, "Tarefa 1", "Criar banco de dados", startDate, endDate, "F");
		Card card2 = new Card(2L, "Tarefa 2", "Criar API backend", startDate, null, "P");

		when(todoListRepository.findAll()).thenReturn(Arrays.asList(card1, card2));

		List<Card> cards = todoListService.getAllCards();

		assertThat(cards).hasSize(2);
		assertThat(cards.get(0).getIdcard()).isEqualTo(1L);
		assertThat(cards.get(0).getDstitulo()).isEqualTo("Tarefa 1");
		assertThat(cards.get(0).getDsdescricao()).isEqualTo("Criar banco de dados");
		assertThat(cards.get(0).getDtcriacao()).isEqualTo(startDate);
		assertThat(cards.get(0).getDtconcluido()).isEqualTo(endDate);
		assertThat(cards.get(0).getIestatus()).isEqualTo("F");

		assertThat(cards.get(1).getIdcard()).isEqualTo(2L);
		assertThat(cards.get(1).getDstitulo()).isEqualTo("Tarefa 2");
		assertThat(cards.get(1).getDsdescricao()).isEqualTo("Criar API backend");
		assertThat(cards.get(1).getDtcriacao()).isEqualTo(startDate);
		assertThat(cards.get(1).getDtconcluido()).isNull();
		assertThat(cards.get(1).getIestatus()).isEqualTo("P");

		verify(todoListRepository, times(1)).findAll();
		verifyNoMoreInteractions(todoListRepository);
	}

	@Test
	void createCard_ShouldCreateNewCard() {
		LocalDateTime startDate = LocalDateTime.ofInstant(new Date().toInstant(), ZoneId.systemDefault());
		LocalDateTime endDate = startDate.plusHours(5);
		Card cardMock = new Card();
		cardMock.setIdcard(3L);
		cardMock.setDstitulo("Tarefa 3");
		cardMock.setDsdescricao("Criar frontend");
		cardMock.setDtcriacao(startDate);
		cardMock.setDtconcluido(endDate);
		cardMock.setIestatus("F");

		when(todoListRepository.save(cardMock)).thenReturn(cardMock);

		Card cardTest = todoListService.createCard(cardMock);

		verify(todoListRepository, times(1)).save(cardTest);
		verifyNoMoreInteractions(todoListRepository);
	}


}
