package com.slt.chats.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.chats.dao.ChatsGroupDAO;
import com.slt.chats.dao.ChatsMsgDAO;
import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Chats;

@Service
public class ChatsServicelmp implements ChatsService {

	@Autowired
	private ChatsGroupDAO chatsGroupDAO;
	
	@Autowired
	private ChatsMsgDAO chatsMsgDAO;

	// 쪽지 방 리스트 출력
	// 발신자 ID만 필수(sender_id)
	@Override
	public ResultVO chatsGroupSelectList(Chats chats) {
		try {
			List<Chats> dtList = chatsGroupDAO.chatsGroupSelectList(chats);
			List<Object> dataList = new ArrayList<Object>();
			dataList.addAll(dtList);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}
	
	// 쪽지 방 내용 리스트 불러오기
	// 필수!
	// 발신자 닉, 수신자 닉, 쪽지 방 순번(receiver_nick, sender_nick, chat_group_seq)
	@Override
	public ResultVO chatsMsgSelectList(Chats chats) {
		try {
			System.out.println(chats);
			List<Chats> dtList = chatsMsgDAO.chatsMsgSelectList(chats);
			List<Object> dataList = new ArrayList<Object>();
			dataList.addAll(dtList);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	// 필수
	// 내용, 수신자 닉네임, 수신자 아이디, 발신자 닉네임, 발신자 아이디
	// (chat_group_seq, chat_msg, receiver_nick, receiver_id, sender_nick, sender_id)
	@Override
	public ResultVO chatsInfoInsert(Chats chats) {
		try {
			Chats data = chatsGroupDAO.chatsGroupSelectOne(chats);
			if (data == null) {
				chatsGroupDAO.chatsGroupInfoInsert(chats);
				chats.setChat_group_seq(chatsGroupDAO.chatsGroupSelectOne(chats).getChat_group_seq());
				chatsMsgDAO.chatsMsgInfoInsert(chats);
				return new ResultVO("00", null);
			} else {
				System.out.println(data);
				chats.setChat_group_seq(data.getChat_group_seq());
				chatsMsgDAO.chatsMsgInfoInsert(chats);
				System.out.println(chats);
				chatsGroupDAO.chatsGroupUpdateLate(chatsMsgDAO.chatsMsgSelectOne(chats));
				System.out.println(chats);
				return new ResultVO("00", null);
			}
		} catch (Exception e) {
			System.err.println(e);
			return new ResultVO("99", null);
		}
		
	}

}
