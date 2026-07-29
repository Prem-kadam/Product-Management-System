package com.example.Product.management.categories;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    private final CatogoryService catogoryService;
    public CategoryController(CatogoryService catogoryService) {
        this.catogoryService = catogoryService;
    }

    @GetMapping()
    public ResponseEntity<List<Categories>> findAll() {

        return ResponseEntity.ok(catogoryService.findall());
    }

    @PostMapping()
    public ResponseEntity <Categories> created(@RequestBody Categories categories) {

        Categories categories1=catogoryService.created(categories);
        return new ResponseEntity<>(categories1, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Categories> findById(@PathVariable Long id) {

        return ResponseEntity.ok(catogoryService.findById(id));
    }

    @PutMapping("{id}")
    public ResponseEntity <Categories> update(@PathVariable Long id, @RequestBody Categories categories) {

        return ResponseEntity.ok(catogoryService.updateproduct(id,categories));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        return ResponseEntity.ok(catogoryService.delete(id));
    }
}
