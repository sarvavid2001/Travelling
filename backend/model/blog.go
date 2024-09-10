package models

import "time"

// Blog represents the database model for a blog post
type Blog struct {
	ID          uint      `json:"id" gorm:"primaryKey"`
	Title       string    `json:"title"`
	Slug        string    `json:"slug"`
	ImageURL    string    `json:"image_url"`
	Description string    `json:"description"`
	Content     string    `json:"content"`
	Tags        string    `json:"tags"` // Store as a comma-separated string
	Category    string    `json:"category"`
	Published   bool      `json:"published"`
	Author      string    `json:"author"`
	CreatedAt   time.Time `json:"created_at"`
}
