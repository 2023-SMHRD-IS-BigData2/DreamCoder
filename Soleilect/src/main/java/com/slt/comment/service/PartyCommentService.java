package com.slt.comment.service;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Party_comments;

public interface PartyCommentService {
	ResultVO partyCommentInsert(Party_comments comments);
	
	ResultVO partyCommentDelete(int p_cmt_seq);
	
	ResultVO partyCommentList(int party_seq);
}
