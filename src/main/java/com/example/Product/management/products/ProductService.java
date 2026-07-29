package com.example.Product.management.products;

import com.example.Product.management.categories.Categories;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> findall() {
        return productRepository.findAll();
    }

    public Product created(Product product) {
        return productRepository.save(product);
    }

    public Product findById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product updateproduct(Long id, Product product) {
        Product product1 = productRepository.findById(id).orElse(null);
        if (product1 != null) {

            product1.setName(product.getName());
            product1.setDescription(product.getDescription());
            product1.setPrice(product.getPrice());
            product1.setStock(product.getStock());
            product1.setCategory(product.getCategory());
            return productRepository.save(product1);
        }
        return null;
    }

    public String delete(Long id) {
        if(productRepository.existsById(id)){
            productRepository.deleteById(id);
            return "Product deleted successfully";
        }
        return "Product not found";
    }
}
