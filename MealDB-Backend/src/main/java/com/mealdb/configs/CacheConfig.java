package com.mealdb.configs;

import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.caffeine.CaffeineCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.github.benmanes.caffeine.cache.Caffeine;

@Configuration
@EnableCaching
public class CacheConfig {
	
	@Value("${cache.expireAfterWrite}")
	private int expireTime;

	@Value("${cache.maximumSize}")
	private int maxSize;
	
	@Bean
    public Caffeine<Object, Object> caffeineConfig() {
        return Caffeine.newBuilder()
                .expireAfterWrite(expireTime, TimeUnit.MINUTES)
                .maximumSize(maxSize);
    }

    @Bean
    public CacheManager cacheManager(Caffeine<Object, Object> caffeine) {
        CaffeineCacheManager manager = new CaffeineCacheManager(
                "searchMeals", "categoryMeals", "Meals", "randomMeals", "json","allPosts", "postById"
        );
        manager.setCaffeine(caffeine);
        return manager;
    }
	
}
