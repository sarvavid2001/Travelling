package controllers

import (
	"database/sql"
	"log"
	"net/http"
	models "travelling/model"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

// HandleUserSignup handles user signup
func HandleUserSignup(db *sql.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		var userData models.User
		if err := c.ShouldBindJSON(&userData); err != nil {
			log.Printf("Error decoding the json data: %v", err)
			c.JSON(http.StatusBadRequest, gin.H{"error": "Error decoding the json data"})
			return
		}
		if db != nil {
			if err := HandleInsertUserDetails(db, &userData); err != nil {
				log.Printf("Error inserting the data into the database:%v", err)
				c.JSON(http.StatusInternalServerError, gin.H{"error": "Error inserting the data into the database"})
				return
			}
		}
		c.JSON(http.StatusOK, gin.H{"message": "Data inserted successfully"})
	}
}

// HashPassword hashes the user's password
func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	return string(bytes), err
}

// HandleInsertUserDetails inserts user details into the database
func HandleInsertUserDetails(db *sql.DB, user *models.User) error {
	hashedPassword, err := HashPassword(user.Password)
	if err != nil {
		return err
	}
	query := `INSERT INTO users (username, email, phone, password) VALUES ($1, $2, $3, $4)`
	_, err = db.Exec(query, user.Username, user.Email, user.Phone, hashedPassword)
	if err != nil {
		return err
	}
	return nil
}

// CheckPasswordHash compares a password with a hash
func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}
