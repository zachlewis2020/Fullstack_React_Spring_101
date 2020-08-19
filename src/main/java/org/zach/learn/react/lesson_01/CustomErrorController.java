package org.zach.learn.react.lesson_01;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
class CustomErrorController implements ErrorController {

    @RequestMapping("/error")
    public ModelAndView handleError(ModelMap model) {
        model.addAttribute("attribute", "forwardWithForwardPrefix");
        return new ModelAndView("forward:/error.html", model);
    }

    @Override
    public String getErrorPath() {
        return "/";
    }
}
