package com.slt.user.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.User;

@Mapper
public interface UserDAO {
	List<User> userList();
}
