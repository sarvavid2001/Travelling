package routes

import (
	"database/sql"
	"github/rabinam24/ecom/internal/handlers"
	"github/rabinam24/ecom/internal/middlewares"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(db *sql.DB) *gin.Engine {
	r := gin.Default()

	// Apply CORS middleware
	r.Use(middlewares.CorsMiddleware())

	// Define routes
	r.POST("/sign-up", handlers.HandleUserSignup(db))
	r.POST("/blogs", handlers.CreateBlog)
	r.GET("/blogs", handlers.GetBlogs)
	r.GET("/blogs/:id", handlers.GetBlogByID)
	r.PUT("/blogs/:id", handlers.UpdateBlog)
	r.DELETE("/blogs/:id", handlers.DeleteBlog)

	return r
}
