package com.example.demo.controller;

import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.model.Generation;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.ai.ollama.OllamaChatModel;
import reactor.core.publisher.Flux;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;
import java.util.HashMap;

@RestController
public class ChatAIController {

    private static final Logger logger = LoggerFactory.getLogger(ChatAIController.class);

    private final OllamaChatModel chatModel;

    @Autowired
    public ChatAIController(OllamaChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @GetMapping("/ai/generate")
    public Map<String, String> generate(@RequestParam(value = "message", defaultValue = "Tell me a joke") String message) {
        Map<String, String> responseMap = new HashMap<>();
        try {
            ChatResponse response = chatModel.call(new Prompt(new UserMessage(message)));
            Generation result = response.getResult();
            responseMap.put("generation", result != null ? result.getOutput().getContent() : "No response");
        } catch (Exception e) {
            logger.error("Error occurred while generating AI response", e);
            responseMap.put("error", "Failed to connect to Ollama service: " + e.getMessage());
        }
        return responseMap;
    }

    @GetMapping(value = "/ai/generateStream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<String> generateStream(@RequestParam(value = "message", defaultValue = "Tell me a joke") String message) {
        try {
            Prompt prompt = new Prompt(new UserMessage(message));
            return chatModel.stream(prompt)
                    .map(ChatResponse::getResult)
                    .map(result -> result != null ? result.getOutput().getContent() : "No response")
                    .doOnError(e -> logger.error("Error occurred while streaming AI response", e));
        } catch (Exception e) {
            logger.error("Error occurred while preparing to stream AI response", e);
            return Flux.error(new RuntimeException("Failed to prepare streaming AI response: " + e.getMessage()));
        }
    }

}
