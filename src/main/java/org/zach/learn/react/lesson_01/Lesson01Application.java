package org.zach.learn.react.lesson_01;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class Lesson01Application {

    public static void main(String[] args) {
        SpringApplication.run(Lesson01Application.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        final String frontEndUrl = "http://localhost:8080";
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedMethods("GET", "POST", "PUT")
                        .allowCredentials(true)
                        .allowedOrigins(frontEndUrl)
                        .allowedHeaders("*");

            }
        };
    }
}
