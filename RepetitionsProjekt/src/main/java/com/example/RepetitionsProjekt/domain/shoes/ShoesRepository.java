package com.example.RepetitionsProjekt.domain.shoes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoesRepository extends JpaRepository<Shoes,Integer> {
}
