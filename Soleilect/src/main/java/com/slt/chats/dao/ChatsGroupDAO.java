package com.slt.chats.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Chats;

@Mapper
public interface ChatsGroupDAO {
	
	// 쪽지 방 리스트 출력
	// 발신자 ID만 필수
	public List<Chats> chatsGroupSelectList(Chats chats);
	
	// 쪽지 방 하나만 검색
	// 수신자 ID, 발송자 ID 필수 (receiver_id, sender_id)
	public Chats chatsGroupSelectOne(Chats chats);
	
	// 쪽지 방 추가
	public void chatsGroupInfoInsert(Chats chats);
	
	// 채팅 방 최신 정보로 업데이트
	public void chatsGroupUpdateLate(Chats chats);
	
}
