package com.slt.join.dao;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.User;

@Mapper
public interface JoinDAO {
	// 회원가입
	int join(User user);
	
	int idCheck(String id);
	
	int nickCheck(String nick);
}
