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
	
	public int partyBoardInsert(Party_boards boards) {
		int row = partyboardmapper.partyBoardInsert(boards);
		return row;
	}
	
	public int partyBoardDelete(int num) {
		int row = partyboardmapper.partyBoardDelete(num);
		return row;
	}
	
	public List<Party_boards> partyBoardList(){
		List<Party_boards> list = partyboardmapper.partyBoardList();
		return list;
	}
}
