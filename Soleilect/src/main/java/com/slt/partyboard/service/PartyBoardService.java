package com.slt.partyboard.service;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Party_boards;

public interface PartyBoardService {
	
	ResultVO partyBoardInsert(Party_boards boards);
	
	ResultVO partyBoardDelete(int num);
	
	ResultVO partyBoardUpdate(Party_boards boards);
	
	ResultVO partyBoardList();
	
	ResultVO partyBoardSearch(String search);
	
	ResultVO partyBoardViewUp(int num);
}
