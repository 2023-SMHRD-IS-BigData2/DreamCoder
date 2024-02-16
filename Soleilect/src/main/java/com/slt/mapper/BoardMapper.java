package com.slt.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Boards;

@Mapper
public interface BoardMapper {
public int boardInsert(Boards boards);
	
	public int boardDelete(int num);
	
	public int boardUpdate(Boards boards);
	
	public List<Boards> boardList();
}
