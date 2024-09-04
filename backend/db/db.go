package db

import (
	"fmt"
	"github/rabinam24/ecom/internal/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

// ConnectDB initializes the database connection and sets the global DB variable
func ConnectDB(cfg models.Config) error {
	dsn := cfg.Db.Dsn
	fmt.Println("Connecting to database with DSN:", dsn)

	var err error
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return err
	}

	// Optionally check if the database connection is alive
	sqlDB, err := DB.DB()
	if err != nil {
		return err
	}
	if err := sqlDB.Ping(); err != nil {
		return err
	}

	return nil
}
