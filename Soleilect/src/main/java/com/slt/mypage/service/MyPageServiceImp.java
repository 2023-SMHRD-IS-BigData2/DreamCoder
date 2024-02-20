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
	public ResultVO plantDelete(int num) {
		try {
			int row = mypageDao.plantDelete(num);
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
	public ResultVO plantList(String id) {
		try {
			List<Plants> dtList = mypageDao.plantList(id);
			List<Object> dataList = new ArrayList<Object>();
			dataList.addAll(dtList);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	@Override
	public ResultVO myPost(String id) {
		try {
			List<Party_boards> pbList = mypageDao.myPartyBoardPost(id);
			List<Boards> bList = mypageDao.myBoardPost(id);
			HashMap<String, List<Party_boards>> pbMap = new HashMap<String, List<Party_boards>>();
			HashMap<String, List<Boards>> bMap = new HashMap<String, List<Boards>>();
			pbMap.put("모집", pbList);
			bMap.put("자유", bList);

			List<Object> dataList = new ArrayList<Object>();
			dataList.add(pbMap);
			dataList.add(bMap);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	@Override
	public ResultVO myGroupPlant(String nick) {
		try {
			List<Party_application> dtList = mypageDao.myGroupPlant(nick);
			List<Object> dataList = new ArrayList<Object>();
			dataList.addAll(dtList);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	@Override
	public ResultVO myGroupAccept(String nick) {
		try {
			List<Party_application> dtList = mypageDao.myGroupAccept(nick);
			List<Object> dataList = new ArrayList<Object>();
			dataList.addAll(dtList);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	@Override
	public ResultVO myGroupSearch(String nick) {
		try {
			int row = mypageDao.myGroupSearch(nick);
			boolean isNick = false;
			if (row == 0) {
				isNick = false;
			} else {
				isNick = true;
			}
			List<Object> dataList = new ArrayList<Object>();
			dataList.add(isNick);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}
}
