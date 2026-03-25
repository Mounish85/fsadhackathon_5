package com.example.lcms.controller;

import com.example.lcms.entity.Content;
import com.example.lcms.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/content")
@CrossOrigin
public class ContentController {

    @Autowired
    private ContentService service;

    // CREATE
    @PostMapping
    public Content add(@RequestBody Content content) {
        return service.addContent(content);
    }
    
    @PostMapping("/bulk")
    public List<Content> addBulk(@RequestBody List<Content> contents) {
        return service.addMultiple(contents);
    }

    // READ
    @GetMapping
    public Page<Content> getAll(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return service.getAllContent(page, size);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.deleteContent(id);
        return "Deleted successfully";
    }

    // SEARCH
    @GetMapping("/search")
    public List<Content> search(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String course) {
        return service.search(title, course);
    }

    // ANALYTICS
    @GetMapping("/analytics")
    public Map<String, Long> analytics() {
        return service.getAnalytics();
    }
    
    //UPDATE
    @PutMapping("/{id}")
    public Content update(@PathVariable Long id, @RequestBody Content content) {
        return service.updateContent(id, content);
    }
}