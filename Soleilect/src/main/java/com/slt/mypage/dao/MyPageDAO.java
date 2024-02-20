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
	
	int plantDelete(int num);
	
	List<Plants> plantList(String id);
	
	List<Party_boards> myPartyBoardPost(String id);
	
	List<Boards> myBoardPost(String id);
	
	List<Party_application> myGroupPlant(String nick);
	
	List<Party_application> myGroupAccept(String nick);
	
	int myGroupSearch(String nick);
}
