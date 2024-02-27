package com.slt.chats.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Chats;

@Mapper
public interface ChatsMsgDAO {
	
	public List<Chats> chatsMsgSelectList(Chats chats);
	
	public Chats chatsMsgSelectOne(Chats chats);
	
	public void chatsMsgInfoInsert(Chats chats);

}
