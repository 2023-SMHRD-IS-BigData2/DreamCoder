package com.slt.partyboard.dao;



import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Party_application;

@Mapper
public interface PartyApplyDAO {

	int partyApply(Party_application party);
	
	int partyApplypbUpdate(int party_seq, int now_cnt);
}
