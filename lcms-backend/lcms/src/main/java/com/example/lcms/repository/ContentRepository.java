package com.example.lcms.repository;

import com.example.lcms.entity.Content;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContentRepository extends JpaRepository<Content, Long> {

    List<Content> findByTitleContainingIgnoreCase(String title);
    List<Content> findByCourseContainingIgnoreCase(String course);
}