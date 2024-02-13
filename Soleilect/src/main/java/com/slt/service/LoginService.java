package com.slt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.entity.Login;
import com.slt.entity.User;
import com.slt.mapper.LoginMapper;

@Service
public class LoginService {
	
	@Autowired
	private LoginMapper loginmapper;
	
	public User loginService(Login login) {
		User user = loginmapper.login(login);
		
		return user;
	}
}
