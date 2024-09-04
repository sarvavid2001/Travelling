package models

import (
	"time"

	"gorm.io/gorm"
)

type Blog struct {
	ID          uint           `gorm:"primaryKey" json:"id"`
	Title       string         `json:"title"`
	Slug        string         `json:"slug"`
	Image       string         `json:"image"`
	Description string         `json:"description"`
	Content     string         `json:"content"`
	Tags        []string       `gorm:"type:text[]" json:"tags"`
	Category    string         `json:"category"`
	Published   bool           `json:"published"`
	CreatedAt   time.Time      `json:"created_at"`
	UpdatedAt   time.Time      `json:"updated_at"`
	DeletedAt   gorm.DeletedAt `gorm:"index" json:"-"`
	Author      string         `json:"author"`
}
