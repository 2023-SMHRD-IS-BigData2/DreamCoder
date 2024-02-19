package com.slt.mypage.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Plants;

@Mapper
public interface MyPageDAO {
	int plantInsert(Plants plants);
	
	int plantDelete(int num);
	
	List<Plants> plantList(String id);
}
