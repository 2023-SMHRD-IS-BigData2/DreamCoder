package com.slt.entity;

import java.sql.Date;
import java.sql.Timestamp;

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
	private Date start_at;
	private Date end_at;
	private int party_views;
	private int target_cnt;
	private int now_cnt;
	private Timestamp created_at;
	private String user_id;
	private String user_nick;
}
