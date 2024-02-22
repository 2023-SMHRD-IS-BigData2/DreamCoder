package com.slt.mypage.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Boards;
import com.slt.entity.Party_application;
import com.slt.entity.Party_boards;
import com.slt.entity.Plants;
import com.slt.mypage.dao.MyPageDAO;

@Service
public class MyPageServiceImp implements MyPageService {

	@Autowired
	private MyPageDAO mypageDao;

	@Override
	public ResultVO plantInsert(Plants plants) {
		try {
			if (plants.getPl_name() != null) {
				mypageDao.plantInsert(plants);
				return new ResultVO("00", null);
			} else {
				return new ResultVO("03", null);
			}
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	@Override
	public ResultVO plantDelete(int pl_seq) {
		try {
			int row = mypageDao.plantDelete(pl_seq);
			if (row != 0) {
				return new ResultVO("00", null);
			} else {
				return new ResultVO("05", null);
			}

		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	@Override
	public ResultVO plantList(String user_id) {
		try {
			List<Plants> dtList = mypageDao.plantList(user_id);
			List<Object> dataList = new ArrayList<Object>();
			dataList.addAll(dtList);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	@Override
	public ResultVO myPost(String user_id) {
		try {
			List<Party_boards> pbList = mypageDao.myPartyBoardPost(user_id);
			List<Boards> bList = mypageDao.myBoardPost(user_id);
			HashMap<String, List<Party_boards>> pbMap = new HashMap<String, List<Party_boards>>();
			HashMap<String, List<Boards>> bMap = new HashMap<String, List<Boards>>();
			pbMap.put("recruitment", pbList);
			bMap.put("free", bList);

			List<Object> dataList = new ArrayList<Object>();
			dataList.add(pbMap);
			dataList.add(bMap);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	@Override
	public ResultVO myGroupPlant(String user_nick) {
		try {
			List<Party_application> dtList = mypageDao.myGroupPlant(user_nick);
			List<Object> dataList = new ArrayList<Object>();
			dataList.addAll(dtList);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	@Override
	public ResultVO myGroupAccept(String user_nick) {
		try {
			List<Party_application> dtList = mypageDao.myGroupAccept(user_nick);
			List<Object> dataList = new ArrayList<Object>();

			dataList.add(dtList);

			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	@Override
	public ResultVO myGroupSearch(String user_nick) {
		try {
			int row = mypageDao.myGroupSearch(user_nick);

			if (row == 0) {
				return new ResultVO("01", null);
			} else {
				return new ResultVO("00", null);
			}

		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	@Override
	public ResultVO userUpdate(String user_id, String user_nick, String user_pw) {
		try {
			int row = mypageDao.userUpdate(user_id, user_nick, user_pw);

			if (row == 0) {
				return new ResultVO("01", null);
			} else {
				return new ResultVO("00", null);
			}

		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}
}
