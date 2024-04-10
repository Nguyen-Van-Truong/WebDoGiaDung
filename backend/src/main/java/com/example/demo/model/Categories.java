package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

import java.util.Set;

@Entity
/*
    JsonIdentityInfo sẽ giúp giải quyết vấn đề vòng lặp trong JSON
    vì categories có thể chứa nhiều quan hệ 1 nhiều với chính nó và 1 sản phẩm có thể thuộc nhiều categories
    nên khi chuyển sang JSON sẽ bị lặp vô tận
 */
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "categoryId"
)
@Table(name = "categories")
public class Categories {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private int categoryId;

    @Column(name = "category_name")
    private String categoryName;

    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "category")
    private Set<Products> products;

    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Categories parentCategory;

    @OneToMany(mappedBy = "parentCategory")
    private Set<Categories> subCategories;

    public Categories(int categoryId, String categoryName, String description, Set<Products> products, Categories parentCategory, Set<Categories> subCategories) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.description = description;
        this.products = products;
        this.parentCategory = parentCategory;
        this.subCategories = subCategories;
    }

    public Categories() {

    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<Products> getProducts() {
        return products;
    }

    public void setProducts(Set<Products> products) {
        this.products = products;
    }

    public Categories getParentCategory() {
        return parentCategory;
    }

    public void setParentCategory(Categories parentCategory) {
        this.parentCategory = parentCategory;
    }

    public Set<Categories> getSubCategories() {
        return subCategories;
    }

    public void setSubCategories(Set<Categories> subCategories) {
        this.subCategories = subCategories;
    }
}
