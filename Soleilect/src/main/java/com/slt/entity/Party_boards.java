package com.slt.entity;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Party_boards {
	private int party_seq;
	private String party_title;
	private String party_content;
	private String party_loc;
	private String start_at;
	private String end_at;
	private int party_views;
	private int target_cnt;
	private int now_cnt;
	private BigDecimal party_progress;
	private String created_at;
	private String user_id;
}
