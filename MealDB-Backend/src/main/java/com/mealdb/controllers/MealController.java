package com.mealdb.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mealdb.response.ApiResponse;
import com.mealdb.service.MealService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") 
public class MealController {

	@Autowired 
	private MealService mealService;
	
	@GetMapping("/search")
    public ResponseEntity<ApiResponse> search(@RequestParam(name = "name") String name) {
        String result = mealService.searchMealsByName(name);
        return ResponseEntity.ok(ApiResponse.success(result));
    }

    @GetMapping("/categories")
    public ResponseEntity<ApiResponse> categories() {
        String result = mealService.getCategories();
        return ResponseEntity.ok(ApiResponse.success(result));
    }

    @GetMapping("/meal/{id}")
    public ResponseEntity<ApiResponse> mealById(@PathVariable("id") String id) {
        String result = mealService.getMealById(id);
        return ResponseEntity.ok(ApiResponse.success(result));
    }

    @GetMapping("/random")
    public ResponseEntity<ApiResponse> random() {
        String result = mealService.getRandomMeal();
        return ResponseEntity.ok(ApiResponse.success(result));
    }
	
}
