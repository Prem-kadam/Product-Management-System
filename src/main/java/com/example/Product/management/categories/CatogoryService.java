package com.example.Product.management.categories;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CatogoryService {

    private final CategoryRepository catogoryRepository;

    public CatogoryService(CategoryRepository catogoryRepository) {
        this.catogoryRepository = catogoryRepository;
    }

    public List<Categories> findall() {

        return catogoryRepository.findAll();
    }


    public Categories created(Categories categories) {

        return catogoryRepository.save(categories);
    }

    public Categories findById(Long id) {
        return catogoryRepository.findById(id).orElse(null);
    }

    public Categories updateproduct(Long id, Categories categories) {

        Categories categories1 = catogoryRepository.findById(id).orElse(null);

        if( categories1 != null) {
            categories1.setName(categories.getName());
            categories1.setDescription(categories.getDescription());

            return catogoryRepository.save(categories1);
        }
        return null;
    }


    public String delete(Long id) {
        if(catogoryRepository.existsById(id)) {
            catogoryRepository.deleteById(id);
            return "Deleted";
        }
        return "Not Found";
    }
}
