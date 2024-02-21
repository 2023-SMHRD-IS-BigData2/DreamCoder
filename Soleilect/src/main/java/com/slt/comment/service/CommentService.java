package com.slt.comment.service;


import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Comments;

public interface CommentService {
	ResultVO commentInsert(Comments comments);

	ResultVO commentDelete(int cmt_seq);
	
	ResultVO commentList(int b_seq);
}
