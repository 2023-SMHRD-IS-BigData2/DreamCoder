package com.slt.partyboard.service;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Party_application;

public interface PartyApplyService {
		
	ResultVO partyApply(Party_application party);
	
	ResultVO partyAccept(int list_seq, int pl_seq);

	ResultVO partyApplypbUpdate(int party_seq, int now_cnt);
	
	ResultVO partyRefuse(int list_seq);
}
