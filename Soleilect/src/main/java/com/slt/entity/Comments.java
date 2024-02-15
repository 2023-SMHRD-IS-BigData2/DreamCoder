package com.slt.entity;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comments {
	private int cmt_seq;
	private int b_seq;
	private int cmt_ref;
	private int cmt_ref_level;
	private String user_id;
	private String user_nick;
	private String cmt_content;
	private Timestamp created_at;
	private int cmt_parent;
	
	
}
