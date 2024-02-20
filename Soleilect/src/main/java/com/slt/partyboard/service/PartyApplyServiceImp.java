package com.slt.partyboard.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Party_application;
import com.slt.partyboard.dao.PartyApplyDAO;

@Service
public class PartyApplyServiceImp implements PartyApplyService {

	@Autowired
	private PartyApplyDAO partyapplyDao;

	@Override
	public ResultVO partyApply(Party_application party) {

		try {
			if (party.getPl_name() != null) {
				partyapplyDao.partyApply(party);
				return new ResultVO("00", null);
			} else {
				return new ResultVO("03", null);
			}
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	@Override
	public ResultVO partyApplypbUpdate(int party_seq, int now_cnt) {

		try {
			partyapplyDao.partyApplypbUpdate(party_seq, now_cnt);
			return new ResultVO("00", null);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	@Override
	public ResultVO partyAccept(int num) {
		try {
			partyapplyDao.partyAccept(num);
			return new ResultVO("00", null);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

}
