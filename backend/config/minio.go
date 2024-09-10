package config

import (
	"log"
	"os"

	"context"

	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"
)

var MinioClient *minio.Client
var BucketName = "your-bucket-name"

func InitMinIO() {
	var err error
	MinioClient, err = minio.New(os.Getenv("MINIO_ENDPOINT"), &minio.Options{
		Creds:  credentials.NewStaticV4(os.Getenv("MINIO_ACCESS_KEY"), os.Getenv("MINIO_SECRET_KEY"), ""),
		Secure: false, // For local MinIO, set to true if using HTTPS
	})
	if err != nil {
		log.Fatal("Failed to connect to MinIO:", err)
	}

	// Check if the bucket exists or create a new one
	exists, err := MinioClient.BucketExists(context.Background(), BucketName)
	if err != nil || !exists {
		err = MinioClient.MakeBucket(context.Background(), BucketName, minio.MakeBucketOptions{})
		if err != nil {
			log.Fatal("Failed to create bucket:", err)
		}
	}

	log.Println("MinIO connected successfully!")
}
