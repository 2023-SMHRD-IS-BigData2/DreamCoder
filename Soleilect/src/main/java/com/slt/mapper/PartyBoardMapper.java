package com.slt.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Party_boards;

@Mapper
public interface PartyBoardMapper {
	public int partyBoardInsert(Party_boards boards);
	public int partyBoardDelete();
	public List<Party_boards> partyBoardList();
}
