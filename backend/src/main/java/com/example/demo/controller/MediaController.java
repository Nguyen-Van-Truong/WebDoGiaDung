package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@RestController
public class MediaController {
    @Value("${upload.dir}")
    private String uploadDir;

    //api này dùng để xem ảnh trong thư mục UPLOAD_DIR nơi lưu trữ ảnh đã upload
    @GetMapping("/api/images/{imageName:.+}")
    public ResponseEntity<Resource> getImage(@PathVariable String imageName) {
//        System.out.println("uploadDir:" + uploadDir);
        try {
            Path filePath = Paths.get(uploadDir, imageName);
            if (!Files.exists(filePath) || !Files.isReadable(filePath)) {
                return ResponseEntity.notFound().build();
            }

            ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(filePath));

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + imageName + "\"")
                    .contentType(MediaType.IMAGE_JPEG) // You might want to dynamically determine the content type
                    .body(resource);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body(null);
        }
    }

    //api này chỉ dùng để xem ảnh trong thư mục static/images
//    @GetMapping("/api/images/{imageName:.+}")
//    public ResponseEntity<Resource> getImage(@PathVariable String imageName) {
//        Resource image = new ClassPathResource("static/images/" + imageName);
//
//        if (!image.exists() || !image.isReadable()) {
//            return ResponseEntity.notFound().build();
//        }
//
//        return ResponseEntity.ok()
//                .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + image.getFilename() + "\"")
//                .contentType(MediaType.IMAGE_JPEG) // Consider dynamically determining the content type
//                .body(image);
//    }

    //api này dùng để upload ảnh lên thư mục UPLOAD_DIR
    @PostMapping("/api/upload")
    public ResponseEntity<String> uploadImages(@RequestParam("files") MultipartFile[] files) {
        if (files.length == 0) {
            return ResponseEntity.badRequest().body("No files selected");
        }

        try {
            for (MultipartFile file : files) {
                if (file.isEmpty()) {
                    continue;
                }

                File uploadDir = new File(this.uploadDir);
                if (!uploadDir.exists()) {
                    uploadDir.mkdirs();
                }

                // Tạo tên file mới để tránh trùng lặp
                String originalFileName = file.getOriginalFilename();
                String fileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));
                String uniqueFileName = UUID.randomUUID().toString() + fileExtension;

                File saveFile = new File(this.uploadDir, uniqueFileName);
                file.transferTo(saveFile);
            }
            return ResponseEntity.ok("Files uploaded successfully");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("Could not upload the files");
        }
    }


}
