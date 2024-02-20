package com.slt.chats.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Chats;

@Mapper
public interface ChatsDAO {
	
	public List<Chats> chatsSelectList(Chats chats);
	
	public void chatsInfoInsert(Chats chats);
	
	public void chatsCancelUpdate(Long num);
	
	public void chatsUpdateDelete(Chats chats);
	
	public void chatsDelete(Long num);
	
}
