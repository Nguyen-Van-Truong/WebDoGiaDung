package com.example.demo.repository;

import com.example.demo.model.Medias;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface MediaRepository extends JpaRepository<Medias, Integer> {
    @Transactional
    @Modifying
    @Query("DELETE FROM Medias m WHERE m.file_url = ?1")
    void deleteByFileUrl(String fileUrl);
}
