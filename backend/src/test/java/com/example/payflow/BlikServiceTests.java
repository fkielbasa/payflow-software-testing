package com.example.payflow;

import com.example.payflow.model.Blik;
import com.example.payflow.service.BlikService;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

public class BlikServiceTests {
    private final BlikService blikService = new BlikService();

    @Test
    void givenRequestForBlikCode_whenGeneratingCode_thenRandomBlikCodeIsReturned() {
        // given
        Blik b1, b2;

        // when
        b1 = blikService.getBlikCode();
        b2 = blikService.getBlikCode();

        // then
        assertNotEquals(b1.getCode(), b2.getCode());
    }
}
