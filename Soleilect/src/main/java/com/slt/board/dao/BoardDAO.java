package com.slt.board.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Boards;

@Mapper
public interface BoardDAO {

	//게시판 정보 조회
	List<Boards> boardList();

	//게시판 정보 등록
	void boardInsert(Boards boards);
	
	void boardUpdate(Boards boards);
	
	void boardDelete(int num);
	
	List<Boards> boardFilter(String hd_code);

	List<Boards> boardSearch(String search);
}
