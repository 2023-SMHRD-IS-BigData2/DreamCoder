package com.slt.entity;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Boards {
	private int b_seq;
	private String b_title;
	private String b_content;
	private Timestamp created_at;
	private int b_views;
	private int b_likes;
	private String hd_code;
	private String user_id;
	private String user_nick;
}
