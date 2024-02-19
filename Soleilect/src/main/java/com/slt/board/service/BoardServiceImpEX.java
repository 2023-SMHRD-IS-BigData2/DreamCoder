//package com.slt.board.service;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.slt.board.dao.BoardDAO;
//import com.slt.cmmn.vo.ResultVO;
//import com.slt.entity.Boards;
//
//@Service
//public class BoardServiceImpEX implements BoardService {
//
//	@Autowired
//	private BoardDAO boardDao;
//	
//	//게시판 정보 조회
//	@Override
//	public ResultVO boardSelectList() {
//		try {
//			List<Boards> dtList = boardDao.boardSelectList();
//			List<Object> dataList = new ArrayList<Object>();
//			dataList.addAll(dtList);
//			return new ResultVO("00", dataList);
//		} catch (Exception e) {
//			return new ResultVO("99", null);
//		}
//	}
//
//	//게시판 정보 등록
//	@Override
//	public ResultVO boardInfoInsert(Boards boards) {
//		try {
//			if(boards.getB_title() != null) {
//				boardDao.boardInfoInsert(boards);
//				return new ResultVO("00", null);
//			}else {
//				return new ResultVO("03", null);
//			}
//		} catch (Exception e) {
//			return new ResultVO("99", null);
//		}
//	}
//
//}
