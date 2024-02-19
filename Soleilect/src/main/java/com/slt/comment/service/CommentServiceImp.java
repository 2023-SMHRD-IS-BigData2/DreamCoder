package com.slt.comment.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.cmmn.vo.ResultVO;
import com.slt.comment.dao.CommentDAO;
import com.slt.entity.Comments;

@Service
public class CommentServiceImp implements CommentService {
	
	@Autowired
	private CommentDAO commentDao;
	
	@Override
	public ResultVO commentInsert(Comments comments) {
		try {
			if (comments.getCmt_content() != null) {
				commentDao.commentInsert(comments);
				return new ResultVO("00", null);
			} else {
				return new ResultVO("03", null);
			}
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}
	
	@Override
	public ResultVO commentDelete(int num) {
		try {
			commentDao.commentDelete(num);
			return new ResultVO("00", null);

		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}
	
	@Override
	public ResultVO commentList(int num){
		try {
			List<Comments> dtList = commentDao.commentList(num);
			List<Object> dataList = new ArrayList<Object>();
			dataList.addAll(dtList);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}
}
