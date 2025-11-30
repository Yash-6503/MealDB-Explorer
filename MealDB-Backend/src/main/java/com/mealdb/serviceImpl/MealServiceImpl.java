package com.mealdb.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.mealdb.service.MealService;

import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

@Service
public class MealServiceImpl implements MealService {

	@Autowired
    private RestTemplate restTemplate;
	
	@Autowired
    private ObjectMapper objectMapper;

    private final String BASE = "https://www.themealdb.com/api/json/v1/1";

    @Override
    @Cacheable(cacheNames = "searchMeals", key="#name")
    public String searchMealsByName(String name) {
        String url = BASE + "/search.php?s=" + name;
        return restTemplate.getForObject(url, String.class);
    }

    @Override
    @Cacheable(cacheNames = "categoryMeals")
    public String getCategories() {
        String url = BASE + "/categories.php";
        return restTemplate.getForObject(url, String.class);
    }

    @Override
    @Cacheable(cacheNames = "Meals", key="#id")
    public String getMealById(String id) {
        String url = BASE + "/lookup.php?i=" + id;
        return restTemplate.getForObject(url, String.class);
    }

    @Override
    @Cacheable(cacheNames = "randomMeals")
    public String getRandomMeal() {
        String url = BASE + "/random.php";
        return restTemplate.getForObject(url, String.class);
    }

    @Override
    @Cacheable(cacheNames = "json", key="#url")
    public String fetchJson(String url) {
        try {
            ResponseEntity<String> res = restTemplate.exchange(url, HttpMethod.GET, HttpEntity.EMPTY, String.class);

            if (res.getStatusCode().is2xxSuccessful() && res.getBody() != null) {
                return res.getBody(); 
            } else {
                return "{}";           
            }
        } catch (Exception e) {
            return "{\"error\": \"" + e.getMessage() + "\"}";
        }
    }
}
