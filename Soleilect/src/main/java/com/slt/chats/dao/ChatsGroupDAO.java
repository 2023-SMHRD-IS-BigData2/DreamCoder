package com.slt.chats.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Chats;

@Mapper
public interface ChatsGroupDAO {
	
	public List<Chats> chatsGroupSelectList(Chats chats);
	
	public Chats chatsGroupSelectOne(Chats chats);
	
	public void chatsGroupInfoInsert(Chats chats);

	public void chatsGroupUpdateLate(Chats chats);
	
}
