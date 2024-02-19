package com.slt.board.service;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Boards;

public interface BoardService {

	//게시판 정보 조회
	ResultVO boardSelectList();

	//게시판 정보 등록
	ResultVO boardInfoInsert(Boards boards);

}
