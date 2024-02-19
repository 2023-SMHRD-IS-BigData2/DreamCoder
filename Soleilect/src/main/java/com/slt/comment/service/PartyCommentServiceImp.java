package com.slt.comment.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.cmmn.vo.ResultVO;
import com.slt.comment.dao.PartyCommentDAO;
import com.slt.entity.Party_comments;

@Service
public class PartyCommentServiceImp implements PartyCommentService{
	
	@Autowired
	private PartyCommentDAO partycommentDao;
	
	@Override
	public ResultVO partyCommentInsert(Party_comments comments) {
		try {
			if (comments.getP_cmt_content() != null) {
				partycommentDao.partyCommentInsert(comments);
				return new ResultVO("00", null);
			} else {
				return new ResultVO("03", null);
			}
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}
	
	@Override
	public ResultVO partyCommentDelete(int num) {
		try {
			partycommentDao.partyCommentDelete(num);
			return new ResultVO("00", null);

		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}
	
	@Override
	public ResultVO partyCommentList(int num){
		try {
			List<Party_comments> dtList = partycommentDao.partyCommentList(num);
			List<Object> dataList = new ArrayList<Object>();
			dataList.addAll(dtList);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}
}
