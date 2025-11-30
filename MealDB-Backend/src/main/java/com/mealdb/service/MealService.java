package com.mealdb.service;


public interface MealService {
	public String searchMealsByName(String name);
	public String getCategories();
	public String getMealById(String id);
	public String getRandomMeal();
	public String fetchJson(String url);
}
