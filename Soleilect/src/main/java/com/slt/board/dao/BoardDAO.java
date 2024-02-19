package com.slt.board.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Boards;

@Mapper
public interface BoardDAO {

	//게시판 정보 조회
	List<Boards> boardSelectList();

	//게시판 정보 등록
	void boardInfoInsert(Boards boards);

}
