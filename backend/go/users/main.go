package main

import (
	"fmt"

	"goUsers/common"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	"goUsers/src"
)

func Migrate(db *gorm.DB) {
	src.AutoMigrate()

}

func main() {
	db := common.Init()
	Migrate(db)
	defer db.Close()

	r := gin.Default()
	MakeRoutes(r)

	v1 := r.Group("/api")

	v1.Use(src.AuthMiddleware(false))
	src.UsersRegister(v1.Group("/users"))

	v1.Use(src.AuthMiddleware(true))
	src.UserRegister(v1.Group("/user"))
	src.ProfileRegister(v1.Group("/profiles"))

	fmt.Printf("0.0.0.0:3000")
	r.Run(":3000")
}

func MakeRoutes(r *gin.Engine) {
	cors := func(c *gin.Context) {
		fmt.Printf("c.Request.Method \n")

		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "*")
		c.Writer.Header().Set("Content-Type", "application/json")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(200)
		}
		c.Next()
	}
	r.Use(cors)

}
