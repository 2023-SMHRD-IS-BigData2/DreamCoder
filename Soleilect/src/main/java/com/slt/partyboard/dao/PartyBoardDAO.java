package com.slt.partyboard.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Party_boards;

@Mapper
public interface PartyBoardDAO {
	
	void partyBoardInsert(Party_boards boards);
	
	int partyBoardDelete(int party_seq);
	
	int partyBoardUpdate(Party_boards boards);
	
	List<Party_boards> partyBoardList();
	
	List<Party_boards> partyBoardSearch(String search);
	
	Party_boards partyBoardDetail(int party_seq);
	
	void partyBoardViewUp(int party_seq);
}
