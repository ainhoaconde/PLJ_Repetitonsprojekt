package com.example.RepetitionsProjekt.domain.user;


import com.example.RepetitionsProjekt.domain.role.Role;
import lombok.Data;

import javax.persistence.*;

@Data
    @Entity(name = "users")
    public class User {
        //TODO:extend
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long id;
        private String username;
        private String password;
    @ManyToOne
    @JoinColumn(name = "role_id", referencedColumnName = "id")
    private Role role;
}
