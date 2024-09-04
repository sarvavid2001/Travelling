package main

import (
	"flag"
	"fmt"
	"github/rabinam24/ecom/internal/routes"
	"github/rabinam24/ecom/pkg/db"
	"log"
	"net/http"
	"os"
	"time"
	models "travelling/model"
)

func main() {
	var cfg models.Config
	flag.StringVar(&cfg.Db.Dsn, "dsn", "", "Postgres connection string")
	flag.StringVar(&cfg.Jwt.SecretKey, "jwt-secret", "your-secret-key", "JWT Secret Key")
	flag.DurationVar(&cfg.Jwt.AccessTokenTTL, "access-token-ttl", 15*time.Minute, "Access Token TTL")
	flag.DurationVar(&cfg.Jwt.RefreshTokenTTL, "refresh-token-ttl", 7*24*time.Hour, "Refresh Token TTL")
	flag.Parse()

	if cfg.Db.Dsn == "" {
		host := os.Getenv("DB_HOST")
		port := os.Getenv("DB_PORT")
		user := os.Getenv("DB_USER")
		password := os.Getenv("DB_PASSWORD")
		dbname := os.Getenv("DB_NAME")

		cfg.Db.Dsn = fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
	}

	// Connect to the database using GORM
	if err := db.ConnectDB(cfg); err != nil {
		log.Fatalf("Failed to connect to the database: %v", err)
	}

	// Get the underlying *sql.DB from the GORM *gorm.DB instance
	sqlDB, err := db.DB.DB()
	if err != nil {
		log.Fatalf("Failed to get the underlying sql.DB: %v", err)
	}

	// Defer closing the database connection
	defer sqlDB.Close()

	// Set up routes with the underlying *sql.DB
	r := routes.SetupRoutes(sqlDB)

	log.Println("Starting server on :8081")
	if err := http.ListenAndServe(":8081", r); err != nil {
		log.Fatal("Error starting server:", err)
	}
}
