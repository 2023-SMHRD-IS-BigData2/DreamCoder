package com.slt.entity;


import java.sql.Date;
import java.sql.Time;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Plant_deep {
	//날짜
	private Date dgen_ymd;
	
	//시간
	private Time dgen_hms;
	
	//지역코드
	private String ippt;
	
	//발전량
	private float ippt_gen;
	
	//사용한 모델명
	private String deep_code;
}
