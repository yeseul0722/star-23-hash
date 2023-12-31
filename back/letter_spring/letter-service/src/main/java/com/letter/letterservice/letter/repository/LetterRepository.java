package com.letter.letterservice.letter.repository;

import com.letter.letterservice.letter.entity.Letter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface LetterRepository extends JpaRepository<Letter, Long> {


    @Query("SELECT l FROM Letter l WHERE l.receiverId = :receiverId AND l.store = true ORDER BY l.isRead DESC, l.createAt DESC")
    List<Letter> findByReceiverId(@Param("receiverId") Long receiverId);

    Optional<Letter> findById(Long id);

   List<Letter> findAllByReceiverIdAndIsReadFalseAndStoreTrueAndCreateAtBetween(Long receiverId, LocalDateTime start, LocalDateTime end);

   List<Letter> findAllByStoreFalse();

   Optional<Letter> findTopByReceiverIdAndStoreTrueAndCreateAtBetween(Long memberId, LocalDateTime start, LocalDateTime end);
}
