# Sử dụng hình ảnh chính thức của Ollama
FROM ollama/ollama:latest

# Thiết lập thư mục làm việc
WORKDIR /app

# Expose the Ollama service port
EXPOSE 11434

# Command to run the Ollama service (assuming the Ollama service runs automatically on container start)
CMD ["ollama", "run", "qwen2:0.5b"]
