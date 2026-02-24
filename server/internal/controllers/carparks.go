package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetCarparks(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "carparks api endpoint reached",
	})
}