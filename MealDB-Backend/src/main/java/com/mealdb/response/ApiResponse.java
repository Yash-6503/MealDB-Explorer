package com.mealdb.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApiResponse {

    private int status;
    private String message;
    private Object data;

    public static ApiResponse success(Object data) {
        return new ApiResponse(200, "Success", data);
    }

    public static ApiResponse error(String message) {
        return new ApiResponse(500, message, null);
    }

}
