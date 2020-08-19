package org.zach.learn.react.lesson_01.security;

import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.access.vote.AuthenticatedVoter;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.FilterInvocation;

import java.util.Collection;

public class CustomAccessDecisionVoter extends AuthenticatedVoter {

    @Override
    public boolean supports(ConfigAttribute attribute) {
        return true;
    }

    @Override
    public int vote(Authentication authentication, Object object, Collection collection) {
        FilterInvocation myFilter = (FilterInvocation) object;
        System.err.println("DEBUG: Check URL(" + myFilter.getRequestUrl() + ") "
        + authentication.isAuthenticated());
        System.err.println("DEBUG: AUTH(" + myFilter.getRequestUrl() + ") "
                + authentication.toString());
        if ( authentication.getPrincipal().toString().equals("anonymousUser") ) return ACCESS_DENIED;
        else return ACCESS_GRANTED;
    }

    @Override
    public boolean supports(Class clazz) {
        return true;
    }

}

