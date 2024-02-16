package com.slt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.entity.Boards;
import com.slt.mapper.BoardMapper;

@Service
public class BoardService {
	
	@Autowired
	private BoardMapper boardmapper;
	
	public int boardInsert(Boards boards) {
		int row = boardmapper.boardInsert(boards);
		return row;
	}

	public int boardDelete(int num) {
		int row = boardmapper.boardDelete(num);
		return row;
	}
	
	public int boardUpdate(Boards boards) {
		int row = boardmapper.boardUpdate(boards);
		return row;
	}

	public List<Boards> boardList() {
		List<Boards> list = boardmapper.boardList();
		return list;
	}

}
