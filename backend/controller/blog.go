package handlers

import (
	"net/http"
	"strconv"
	"time"

	"github/rabinam24/ecom/internal/models"
	"github/rabinam24/ecom/pkg/db"

	"github.com/gin-gonic/gin"
)

func CreateBlog(c *gin.Context) {
	var newBlog models.Blog

	if err := c.ShouldBindJSON(&newBlog); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	newBlog.CreatedAt = time.Now()
	newBlog.UpdatedAt = time.Now()

	// Save to database using GORM
	if err := db.DB.Create(&newBlog).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, newBlog)
}

func GetBlogs(c *gin.Context) {
	var blogs []models.Blog

	if err := db.DB.Find(&blogs).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, blogs)
}

func GetBlogByID(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	var blog models.Blog

	if err := db.DB.First(&blog, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Blog post not found"})
		return
	}

	c.JSON(http.StatusOK, blog)
}

func UpdateBlog(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	var updatedBlog models.Blog
	if err := c.ShouldBindJSON(&updatedBlog); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var blog models.Blog

	if err := db.DB.First(&blog, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Blog post not found"})
		return
	}

	blog.Title = updatedBlog.Title
	blog.Slug = updatedBlog.Slug
	blog.Image = updatedBlog.Image
	blog.Description = updatedBlog.Description
	blog.Content = updatedBlog.Content
	blog.Tags = updatedBlog.Tags
	blog.Category = updatedBlog.Category
	blog.Published = updatedBlog.Published
	blog.Author = updatedBlog.Author
	blog.UpdatedAt = time.Now()

	if err := db.DB.Save(&blog).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, blog)
}

func DeleteBlog(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	var blog models.Blog

	if err := db.DB.First(&blog, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Blog post not found"})
		return
	}

	if err := db.DB.Delete(&blog).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusNoContent, nil)
}
