package com.example.demo.controller;

import com.example.demo.dto.MessagerDTO;
import com.example.demo.model.Messenger;
import com.example.demo.model.User;
import com.example.demo.service.MessengerService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MessengerController {
    @Autowired
    private MessengerService messengerService;

@GetMapping("/getUser")
    public User getUser(@RequestParam("username") String  username){
    return messengerService.getUser(username);
}

@GetMapping("/getUsernameSender")
    public List<MessagerDTO>list(){
    return messengerService.getName();
}
}
