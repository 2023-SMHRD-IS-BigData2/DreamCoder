package com.slt.cmmn.vo;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ResultVO {
	
	private String reMsg;
	private String reCode;
	private List<Object> data;
	
	public ResultVO(String reCode, List<Object> dataList) {
		this.reCode = reCode;
		this.reMsg = getResultDescription(reCode);
        this.data = dataList;
	}

    private String getResultDescription(String reCode) {
        switch (reCode) {
            case "00":
                return "성공";
            case "01":
            	return "실패";
            case "02":
            	return "데이터 중복"; 
            case "03":
            	return "필수 값 오류"; 
            case "04":
            	return "데이터 에러"; 
            case "05":
            	return "시스템 오류"; 
            case "06":
            	return "해당 데이터 없음"; 
            case "98":
            	return "NULL";
            case "99":
            	return "시스템 관리자 오류";
            default:
            	return "시스템 관리자 오류"; 
        }
    }
}
