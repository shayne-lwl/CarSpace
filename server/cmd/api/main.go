package main

import (
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/shayne-lwl/CarSpace/server/internal/database"
	"github.com/shayne-lwl/CarSpace/server/internal/routes"
)

func main() {

  // Reads the .env file and injects those variables into the environment, making them accessible via os.Getenv.
  err := godotenv.Load()
  if err != nil {
    log.Fatal("Error loading server environment variables: ", err)
  }

  destination := os.Getenv("DATABASE_URL")
  
  // Execute the ConnectDB function to establish a connection to the database using the provided destination URL.
  database.ConnectDB(destination)
  // Gracefully close the database connection pool when the application is shutting down. 
  defer database.Pool.Close()

  database.RunMigrations(destination)

  router := routes.SetupRouter()
  router.Run(":8080")
}