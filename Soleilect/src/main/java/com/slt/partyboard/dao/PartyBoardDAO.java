package com.slt.partyboard.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Party_boards;

@Mapper
public interface PartyBoardDAO {
	
	void partyBoardInsert(Party_boards boards);
	
	int partyBoardDelete(int num);
	
	int partyBoardUpdate(Party_boards boards);
	
	List<Party_boards> partyBoardList();
}
