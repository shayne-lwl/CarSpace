package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/shayne-lwl/CarSpace/server/internal/controllers"
)

func SetupRouter() *gin.Engine {
	router := gin.Default()

	// Public Routes
	publicAPI := router.Group("/api")
	{
		publicAPI.GET("/carparks", controllers.GetCarparks)
	}

	return router
}