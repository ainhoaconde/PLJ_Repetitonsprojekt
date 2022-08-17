package com.example.RepetitionsProjekt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class RepetitionsProjektApplication {

	public static void main(String[] args) {
		SpringApplication.run(RepetitionsProjektApplication.class, args);
	}
	@Bean
	PasswordEncoder passwordEncoder() {return NoOpPasswordEncoder.getInstance();
	}

}
