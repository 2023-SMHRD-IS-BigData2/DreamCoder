package com.slt.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.user;

@Mapper
public interface JoinMapper {
	public int join(user user);
}
