package com.slt.login.dao;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Login;
import com.slt.entity.User;

@Mapper
public interface LoginDAO {
	User login(Login login);
}
