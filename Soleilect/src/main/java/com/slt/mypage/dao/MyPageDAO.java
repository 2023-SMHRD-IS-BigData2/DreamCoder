package com.slt.mypage.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Boards;
import com.slt.entity.Party_application;
import com.slt.entity.Party_boards;
import com.slt.entity.Plants;

@Mapper
public interface MyPageDAO {
	int plantInsert(Plants plants);
	
	int plantDelete(int pl_seq);
	
	List<Plants> plantList(String user_id);
	
	List<Party_boards> myPartyBoardPost(String user_id);
	
	List<Boards> myBoardPost(String user_id);
	
	List<Party_application> myGroupPlant(String user_nick);
	
	List<Party_application> myGroupAccept(String user_nick);
	
	Party_boards myGroupAcceptParty(int party_seq);
	
	int myGroupSearch(String user_nick);
	
	int userUpdate(String user_id, String user_nick, String user_pw);
	
	List<Party_boards> myGroup(String user_nick);
	
	List<String> myGroupNick(int party_seq);
}
