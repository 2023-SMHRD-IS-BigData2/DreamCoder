package com.slt.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.User;

@Mapper
public interface JoinMapper {
	// 회원가입
	public int join(User user);
	public int idCheck(String id);
	public int nickCheck(String nick);
}
