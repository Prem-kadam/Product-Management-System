package com.example.Product.management.products;

import com.example.Product.management.categories.Categories;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping()
    public ResponseEntity<List<Product>>  findAll() {

        return ResponseEntity.ok(productService.findall());
    }

    @PostMapping()
    public ResponseEntity<Product>  created(@RequestBody Product product) {

        Product product1=productService.created(product);

        return new ResponseEntity<>(product1, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Product> findById(@PathVariable Long id) {

        return new ResponseEntity<>(productService.findById(id), HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<Product> update(@PathVariable Long id, @RequestBody Product product) {

        return new ResponseEntity<>(productService.updateproduct(id,product), HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        return ResponseEntity.ok(productService.delete(id));
    }
}
