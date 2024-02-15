package com.slt.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Plants;

@Mapper
public interface MyPageMapper {
	public int plantInsert(Plants plants);
	
	public List<Plants> plantList(String id);
}
