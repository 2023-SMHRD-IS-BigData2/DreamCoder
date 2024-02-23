package com.slt.chats.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Chats;

@Mapper
public interface ChatsMsgDAO {
	
	// 쪽지 방 내용 리스트 불러오기
	// 발신자 ID, 수신자ID, 쪽지 방 순번 필수(receiver_id, sender_id, chat_group_seq)
	public List<Chats> chatsMsgSelectList(Chats chats);
	
	// 쪽지 메시지 하나 조회(쪽지 방 업데이트)
	public Chats chatsMsgSelectOne(Chats chats);
	
	// 쪽지 방 내용 추가
	public void chatsMsgInfoInsert(Chats chats);

}
