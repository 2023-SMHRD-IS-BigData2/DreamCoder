package com.slt.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class user {
	@Id
	@Column(length = 100)
	private String id;
	@Column(length = 100, nullable = false)
	private String pw;
	@Column(length = 100, nullable = false)
	private String nickname;
	@Column(length = 100, nullable = false)
	private String name;
	@Column(length = 100, nullable = false)
	private String b_num;
	
}
