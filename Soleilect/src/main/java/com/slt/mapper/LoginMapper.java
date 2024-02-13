package com.slt.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Login;
import com.slt.entity.User;

@Mapper
public interface LoginMapper {
	public User login(Login login);
}
