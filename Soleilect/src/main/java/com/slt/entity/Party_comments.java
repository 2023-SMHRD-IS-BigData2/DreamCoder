package com.slt.entity;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Party_comments {
	private int p_cmt_seq;
	private int party_seq;
	private int p_cmt_ref;
	private int p_cmt_ref_level;
	private String user_id;
	private String user_nick;
	private String p_cmt_content;
	private Timestamp created_at;
	private int p_cmt_parent;
	
}
