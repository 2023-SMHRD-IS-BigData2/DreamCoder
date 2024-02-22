package com.slt.partyboard.dao;



import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Party_application;

@Mapper
public interface PartyApplyDAO {

	int partyApply(Party_application party);
	
	int partyAccept(int list_seq);
	
	int partyAcceptPlant(int pl_seq);
	
	int partyApplypbUpdate(int party_seq, int now_cnt);
	
	int partyRefuse(int list_seq);
}
