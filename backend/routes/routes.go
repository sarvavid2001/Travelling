package routes

import (
	"travelling/controllers"

	"github.com/gin-gonic/gin"
)

func RegisterRoutes(router *gin.Engine) {
	// Blog routes
	router.POST("/api/blogs", controllers.CreateBlog)
}
