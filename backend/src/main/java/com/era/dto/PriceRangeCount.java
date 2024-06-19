package com.era.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PriceRangeCount {
    private String priceRange;
    private long itemCount;
}
