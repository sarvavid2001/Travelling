package controllers

import (
	"net/http"
	"your-project/config"
	"your-project/models"
	"your-project/services"

	"github.com/gin-gonic/gin"
)

func CreateBlog(c *gin.Context) {
	var blog models.Blog

	// Parse form data
	if err := c.Bind(&blog); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Handle file upload
	file, fileHeader, err := c.Request.FormFile("image")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to upload image"})
		return
	}

	imageURL, err := services.UploadToMinIO(file, fileHeader)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to upload image to MinIO"})
		return
	}

	blog.ImageURL = imageURL

	// Insert the new blog post into the database
	if err := config.DB.Create(&blog).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create blog post"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Blog post created successfully", "blog": blog})
}
