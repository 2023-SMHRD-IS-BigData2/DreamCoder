package com.slt.ascenter.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Ascenter;

@Mapper
public interface AscenterDAO {
	
	public void ascenterInfoInsert(Ascenter ascenter);
	
	public List<Ascenter> ascenterSelectList();
	
	public void ascenterDelete(Long as_seq);
}
