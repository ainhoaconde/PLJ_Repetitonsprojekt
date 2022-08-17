package com.example.RepetitionsProjekt.domain.shoes;
import lombok.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Shoes {
    @Id
    @GeneratedValue
    private int shoesId;

    private int price ;
    @Min(value=0,message = "    value must be positive")
    private String name;
    @Size(min = 0, max = 70, message = "value can have a maximum of 70 characters")
    private String brand;
    @Size(min = 0, max = 70,message = "value can have a maximum of 70 characters")
    private String color;
    @Size(min = 0, max = 70,message = "value can have a maximum of 70 characters")
    private String size;
}
