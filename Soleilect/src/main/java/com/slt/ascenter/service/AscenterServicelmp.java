package com.slt.ascenter.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.ascenter.dao.AscenterDAO;
import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Ascenter;

@Service
public class AscenterServicelmp implements AscenterService {
	
	@Autowired
	private AscenterDAO ascenterDao;

	@Override
	public ResultVO ascenterSelectList() {
		try {
			List<Ascenter> dtList = ascenterDao.ascenterSelectList();
			List<Object> dataList = new ArrayList<Object>();
			dataList.addAll(dtList);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	@Override
	public ResultVO ascenterInsert(Ascenter ascenter) {
		try {
			if (ascenter.getAs_region() != null) {
				ascenterDao.ascenterInfoInsert(ascenter);
				return new ResultVO("00", null);
			}else {
				return new ResultVO("03",null);
			}
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	@Override
	public ResultVO ascenterDelete(Long num) {
		try {
			if (num != null) {
				ascenterDao.ascenterDelete(num);
				return new ResultVO("00", null);
			}else {
				return new ResultVO("03",null);
			}
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

}
