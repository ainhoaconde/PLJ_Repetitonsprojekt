package com.example.RepetitionsProjekt.domain.shoes;


import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;
import java.util.NoSuchElementException;


@Getter
@Setter
@Service
public class ShoesService {
    private ShoesRepository shoesRepository;

    @Autowired
    public ShoesService(ShoesRepository shoesRepository) {
        this.shoesRepository = shoesRepository;
    }

    public List<Shoes> getAllShoes() {
        return shoesRepository.findAll();
    }

    public Shoes getSpecificShoes(int shoesId) throws NoSuchElementException {
        return shoesRepository.findById(shoesId).get();
    }

    public Shoes createShoes(Shoes shoes) {
        return shoesRepository.save(shoes);
    }

    public Shoes updateShoes(Integer shoesId, Shoes newShoes) {
        return shoesRepository.findById(shoesId).map(
                shoes -> {
                    shoes.setName(newShoes.getName());
                    shoes.setBrand(newShoes.getBrand());
                    shoes.setColor(newShoes.getColor());
                    shoes.setPrice(newShoes.getPrice());
                    shoes.setSize(newShoes.getSize());
                    return shoesRepository.save(shoes);
                }).orElseGet(() -> {
            newShoes.setShoesId(shoesId);
            return shoesRepository.save(newShoes);
        });
    }
}

