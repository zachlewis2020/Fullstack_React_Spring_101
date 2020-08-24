package org.zach.learn.react.lesson_01;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GetData {
    @RequestMapping(value = "/getData")
    public String getData() {
        return "Got Data";
    }
}
