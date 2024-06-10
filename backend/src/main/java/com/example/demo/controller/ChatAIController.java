package com.example.demo.controller;

import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.model.Generation;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.ai.ollama.OllamaChatModel;
import reactor.core.publisher.Flux;

import java.util.Map;

@RestController
public class ChatAIController {

    private final OllamaChatModel chatModel;

    @Autowired
    public ChatAIController(OllamaChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @GetMapping("/ai/generate")
    public Map<String, String> generate(@RequestParam(value = "message", defaultValue = "Tell me a joke") String message) {
        ChatResponse response = chatModel.call(new Prompt(new UserMessage(message)));
        Generation result = response.getResult();
        return Map.of("generation", result != null ? result.getOutput().getContent() : "No response");
    }

    @GetMapping("/ai/generateStream")
    public Flux<Generation> generateStream(@RequestParam(value = "message", defaultValue = "Tell me a joke") String message) {
        Prompt prompt = new Prompt(new UserMessage(message));
        return chatModel.stream(prompt).map(ChatResponse::getResult);
    }
}
