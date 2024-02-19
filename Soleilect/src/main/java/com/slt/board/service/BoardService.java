package com.slt.board.service;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Boards;

public interface BoardService {

	ResultVO boardList();
	
	ResultVO boardInsert(Boards boards);

	ResultVO boardUpdate(Boards boards);

	ResultVO boardDelete(int num);

	



}
