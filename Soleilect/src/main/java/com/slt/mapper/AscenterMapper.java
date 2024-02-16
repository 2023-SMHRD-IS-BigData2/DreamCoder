package com.slt.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Ascenter;

@Mapper
public interface AscenterMapper {
	
	public void ascenterInsert(Ascenter ascenter);
	
	public List<Ascenter> ascenterList();
	
	public void ascenterDelete(Long as_seq);
}
