package com.slt.partyboard.service;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Party_application;

public interface PartyApplyService {
		
	ResultVO partyApply(Party_application party);
	
	ResultVO partyApplypbUpdate(int party_seq, int now_cnt);
}
