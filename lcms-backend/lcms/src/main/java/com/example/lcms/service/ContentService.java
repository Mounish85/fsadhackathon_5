package com.example.lcms.service;

import com.example.lcms.entity.Content;
import com.example.lcms.repository.ContentRepository;
import com.example.lcms.exception.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ContentService {

    @Autowired
    private ContentRepository repo;

    // CREATE
    public Content addContent(Content content) {
        return repo.save(content);
    }

    // BULK INSERT
    public List<Content> addMultiple(List<Content> contents) {
        return repo.saveAll(contents);
    }

    // READ (Pagination with default safety)
    public Page<Content> getAllContent(int page, int size) {
        return repo.findAll(PageRequest.of(page, size));
    }

    // OPTIONAL (for search fallback)
    public List<Content> getAllWithoutPagination() {
        return repo.findAll();
    }

    // DELETE (with exception handling)
    public void deleteContent(Long id) {
        if (!repo.existsById(id)) {
            throw new ResourceNotFoundException("Content not found with id: " + id);
        }
        repo.deleteById(id);
    }

    // SEARCH
    public List<Content> search(String title, String course) {

        if (title != null && !title.isEmpty()) {
            return repo.findByTitleContainingIgnoreCase(title);
        }

        if (course != null && !course.isEmpty()) {
            return repo.findByCourseContainingIgnoreCase(course);
        }

        return repo.findAll();
    }

    // ANALYTICS (fixed null issue)
    public Map<String, Long> getAnalytics() {
        List<Content> list = repo.findAll();
        Map<String, Long> map = new HashMap<>();

        for (Content c : list) {
            if (c.getCourse() != null && !c.getCourse().isEmpty()) {
                map.put(c.getCourse(),
                        map.getOrDefault(c.getCourse(), 0L) + 1);
            }
        }

        return map;
    }

    // UPDATE (with exception handling)
    public Content updateContent(Long id, Content updated) {

        Content existing = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Content not found with id: " + id));

        existing.setTitle(updated.getTitle());
        existing.setCourse(updated.getCourse());
        existing.setDescription(updated.getDescription());

        return repo.save(existing);
    }
}