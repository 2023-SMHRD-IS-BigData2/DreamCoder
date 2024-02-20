package com.slt.entity;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Chats {
	// 쪽지 고유번호
	private Long chat_seq;
	// 쪽지 내용
	private String chat_msg;
	// 발송 시간
	private Timestamp created_at;
	// 상대 유저 아이디
	private String receiver_id;
	// 상대 유저 닉네임
	private String receiver_nick;
	// 로그인한 유저 아이디
	private String sender_id; 
	// 로그인한 유저 닉네임
	private String sender_nick;
	// 발송취소 여부
	private char cancel_sender;
	// 삭제한 유저 아이디
	private String delete_id;

}
