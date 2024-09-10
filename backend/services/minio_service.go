package services

import (
	"context"
	"fmt"
	"mime/multipart"
	"os"
	"path/filepath"
	"strings"
	"time"

	"travelling/config"

	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"
)

func UploadToMinIO(file multipart.File, fileHeader *multipart.FileHeader) (string, error) {
	filename := filepath.Base(fileHeader.Filename)
	ext := filepath.Ext(filename)
	uniqueFilename := strings.TrimSuffix(filename, ext) + time.Now().Format("20060102150405") + ext
	filePath := "uploads/" + uniqueFilename

	// Upload the file to MinIO
	_, err := config.MinioClient.PutObject(context.Background(), config.BucketName, filePath, file, fileHeader.Size, minio.PutObjectOptions{
		ContentType: "application/octet-stream",
	})
	if err != nil {
		return "", err
	}

	// Return the MinIO file URL
	return fmt.Sprintf("http://%s/%s/%s", os.Getenv("MINIO_ENDPOINT"), config.BucketName, filePath), nil
}

// Initialize MinIO client using environment variables
func InitializeMinIOClient() (*minio.Client, error) {
	endpoint := os.Getenv("MINIO_ENDPOINT")
	accessKeyID := os.Getenv("MINIO_ACCESS_KEY")
	secretAccessKey := os.Getenv("MINIO_SECRET_KEY")
	useSSL := false

	minioClient, err := minio.New(endpoint, &minio.Options{
		Creds:  credentials.NewStaticV4(accessKeyID, secretAccessKey, ""),
		Secure: useSSL,
	})
	if err != nil {
		return nil, err
	}

	return minioClient, nil
}
