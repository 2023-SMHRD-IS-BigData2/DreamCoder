package com.slt.partyboard.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Party_boards;
import com.slt.partyboard.dao.PartyBoardDAO;

@Service
public class PartyBoardServiceImp implements PartyBoardService {
	@Autowired
	private PartyBoardDAO partyboardDao;

	@Override
	public ResultVO partyBoardInsert(Party_boards boards) {
		try {
			if (boards.getParty_title() != null) {
				partyboardDao.partyBoardInsert(boards);
				return new ResultVO("00", null);
			} else {
				return new ResultVO("03", null);
			}
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	public ResultVO partyBoardDelete(int num) {
		try {
			int row = partyboardDao.partyBoardDelete(num);
			if (row!=0) {
				return new ResultVO("00", null);
			}else {
				return new ResultVO("05", null);
			}

		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	public ResultVO partyBoardUpdate(Party_boards boards) {
		try {
			int row = partyboardDao.partyBoardUpdate(boards);
			if (row!=0) {
				return new ResultVO("00", null);
			}else {
				return new ResultVO("05", null);
			}

		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	public ResultVO partyBoardList() {
//		try {
			List<Party_boards> dtList = partyboardDao.partyBoardList();
			List<Object> dataList = new ArrayList<Object>();
			dtList.get(0).getParty_title();
			dataList.addAll(dtList);
			return new ResultVO("00", dataList);
//		} catch (Exception e) {
//			return new ResultVO("99", null);
//		}
	}
}
