package com.slt.chats.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.chats.dao.ChatsDAO;
import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Chats;

@Service
public class ChatsServicelmp implements ChatsService {

	@Autowired
	private ChatsDAO chatsDao;

	// 쪽지 리스트 조회
	@Override
	public ResultVO chatsSelectList(Chats chats) {
		try {
			List<Chats> dtList = chatsDao.chatsSelectList(chats);
			List<Object> dataList = new ArrayList<Object>();
			dataList.addAll(dtList);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	// 쪽지 발송
	@Override
	public ResultVO chatsInfoInsert(Chats chats) {
		try {
			if (chats.getReceiver_id() != null) {
				chatsDao.chatsInfoInsert(chats);
				return new ResultVO("00", null);
			} else {
				return new ResultVO("03", null);
			}
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	// 쪽지 발송 취소
	@Override
	public ResultVO chatsCancelUpdate(Chats chats) {
		try {
			if (chats.getChat_seq() != null) {
				if(within5Minutes(chats.getCreated_at())) {
					chatsDao.chatsCancelUpdate(chats.getChat_seq());
					return new ResultVO("00", null);
				}else {
					return new ResultVO("01", null);
				}
			}else {
				return new ResultVO("03",null);
			}
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	// 쪽지 삭제
	@Override
	public ResultVO chatsDelete(Chats chats) {
		try {
			if (chats.getChat_seq() != null && chats.getSender_id() != null) {
				if (chats.getDelete_id() != null && chats.getSender_id() != chats.getDelete_id()) {
					chatsDao.chatsDelete(chats.getChat_seq());
				} else {
					chatsDao.chatsUpdateDelete(chats);
				}
				return new ResultVO("00", null);
			} else {
				return new ResultVO("03", null);
			}
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	private Boolean within5Minutes(Timestamp timestamp) {
		
		// 현재시각
		Timestamp currentDateTime = new Timestamp(System.currentTimeMillis());
		
		// 현재시각-지정된시각
		long differenceInMillis = currentDateTime.getTime() - timestamp.getTime();

		long fiveMinutesInMillis = 5 * 60 * 1000;

		return Math.abs(differenceInMillis) < fiveMinutesInMillis;
	}

}
