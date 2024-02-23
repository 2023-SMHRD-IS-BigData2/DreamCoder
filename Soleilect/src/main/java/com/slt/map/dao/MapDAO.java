package com.slt.map.dao;



import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Plant_deep;

@Mapper
public interface MapDAO {
//	List<Plant_deep> mapList();
	
	List<Plant_deep> mapSumList();
}
