package com.slt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.entity.Party_boards;
import com.slt.mapper.PartyBoardMapper;

@Service
public class PartyBoardService {
	@Autowired
	private PartyBoardMapper partyboardmapper;
	
	public int PartyBoardInsert(Party_boards boards) {
		int row = partyboardmapper.PartyBoardInsert(boards);
		return row;
	}
	
	public int PartyBoardDelete(int num) {
		int row = partyboardmapper.PartyBoardDelete();
		return row;
	}
	
	public List<Party_boards> PartyBoardList(){
		List<Party_boards> list = partyboardmapper.PartyBoardList();
		return list;
	}
}
