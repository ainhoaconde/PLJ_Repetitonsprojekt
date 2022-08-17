package com.example.RepetitionsProjekt.domain.role;

import com.example.RepetitionsProjekt.domain.authority.Authority;
import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Data
@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String name;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            joinColumns = @JoinColumn(
                    name = "role_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(
                    name = "authority_id", referencedColumnName = "id"))
    private List<Authority> authorities;


    public String toString() {
        return getName();
    }


}