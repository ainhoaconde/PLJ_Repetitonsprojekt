package com.example.RepetitionsProjekt.domain.shoes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.NoSuchElementException;

@Data
@AllArgsConstructor
@RestController
@Log4j2
@RequestMapping("/shoes")
public class ShoesController {

    private ShoesService shoesService;
    private ShoesRepository shoesRepository;


    @GetMapping("/{shoesId}")
    public ResponseEntity<Shoes> getShoes(@PathVariable int shoesId) {
        log.info("only the shoes with the corresponding id is listed");
        return ResponseEntity.ok().body(shoesService.getSpecificShoes(shoesId));
    }


    @GetMapping
    public ResponseEntity<List<Shoes>> getAllShoes() {
        log.info("all shoes will be listed");
        return ResponseEntity.ok().body(shoesService.getAllShoes());
    }

    @PostMapping
    public ResponseEntity<Shoes> createShoes(@Valid @RequestBody Shoes shoes) {
        log.info("your shoes has been added");
        return ResponseEntity.ok().body(shoesService.createShoes(shoes));
    }

    @PutMapping("/{shoesId}")
    public ResponseEntity<Shoes> updateShoes(@Valid @RequestBody Shoes newShoes, @PathVariable int shoesId) {
        log.info("your shoes has been changed ");
        return ResponseEntity.ok().body(shoesService.updateShoes(shoesId, newShoes));
    }


    @DeleteMapping("/{shoesId}")
    public void deleteMagazine(@PathVariable int shoesId) {
        log.info("your shoes has been deleted");
        shoesService.deleteShoes(shoesId);

    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<String> NoSuchElementException(NoSuchElementException e) {
        return ResponseEntity.status(404).body(e.getMessage());
    }


}
