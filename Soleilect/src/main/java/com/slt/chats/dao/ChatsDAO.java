package com.slt.chats.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Chats;

@Mapper
public interface ChatsDAO {
	
	public List<Chats> chatsSelectList(Chats chats);
	
	public void chatsInfoInsert(Chats chats);
	
}
