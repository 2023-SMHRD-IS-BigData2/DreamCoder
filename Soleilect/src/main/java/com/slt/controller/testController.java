package com.slt.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/Sol")
@RestController
public class testController {
	
	@GetMapping("/test")
	public String test() {
		return "Hello World!";
	}
}
