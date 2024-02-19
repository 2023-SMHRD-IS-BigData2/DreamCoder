package com.slt.board.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.board.dao.BoardDAO;
import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Boards;

@Service
public class BoardServiceImp implements BoardService {

	@Autowired
	private BoardDAO boardDao;

	// 게시판 정보 조회
	@Override
	public ResultVO boardList() {
		try {
			List<Boards> dtList = boardDao.boardList();
			List<Object> dataList = new ArrayList<Object>();
			dataList.addAll(dtList);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	// 게시판 정보 등록
	@Override
	public ResultVO boardInsert(Boards boards) {
		try {
			if (boards.getB_title() != null) {
				boardDao.boardInsert(boards);
				return new ResultVO("00", null);
			} else {
				return new ResultVO("03", null);
			}
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	@Override
	public ResultVO boardUpdate(Boards boards) {
		try {
			if (boards.getB_title() != null) {
				boardDao.boardUpdate(boards);
				return new ResultVO("00", null);
			} else {
				return new ResultVO("03", null);
			}
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	@Override
	public ResultVO boardDelete(int num) {
		try {
			boardDao.boardDelete(num);
			return new ResultVO("00", null);

		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

}
