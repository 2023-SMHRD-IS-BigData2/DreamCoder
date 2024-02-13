package com.slt.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
public class MainBoard {
	private Long num; 
	private String writer;
	private String content;
	private String date;
	private long view;
	private String region;
	private long progress;
	
	
}
