package com.slt.config;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

public class SecurityConfig extends WebSecurityConfigurerAdapter{
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
				// HttpServletRequest를 사용하는 요청들에 대한 접근 설정
				.authorizeRequests()
				// /api/hello에 대한 요청은 인증없이 접근을 허용
				.antMatchers("/").permitAll()
				// 나머지 요청들은 모두 인증되어야 한다는 의미
				.anyRequest().authenticated();
	}

}
