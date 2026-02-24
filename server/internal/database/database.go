package database

import (
	"context"
	"fmt"
	"log"

	"github.com/golang-migrate/migrate/v4"
	"github.com/jackc/pgx/v5/pgxpool"

	/* An _ before an import is a Side-Effect import, which means we are importing the package solely for its initialization side effects.
	In this case, we need to import the database and source drivers for golang-migrate to work. */
	_ "github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
)

func RunMigrations(destination string) {
	// Intialize the migrate engine and the engine takes in the source of the migration files and the destination database URL
	m, err := migrate.New("file://cmd/migrate/migrations", destination)
	if err != nil {
		log.Fatal(err)
	}

	// The execution of the migration is done by calling the Up method on the migrate instance. 
	// Errors are handled by checking if the error is not nil and not equal to migrate.ErrNoChange, which indicates that there were no new migrations to apply.
	if err := m.Up(); err != nil && err != migrate.ErrNoChange {
		log.Fatal(err)
	}

	fmt.Println("Migrations applied successfully.")
}

// Gloal varaible to hold the database connection pool, which can be accessed throughout the application.
var Pool *pgxpool.Pool

// The destination is the address and key to our database, which is stored in an environment variable for security and flexibility reasons.
func ConnectDB(destination string) {
	var err error
	// Start the connection pool and don't stop unless the whole program shuts down. 
	Pool, err = pgxpool.New(context.Background(), destination)

	if err != nil {
		log.Fatal("Could not connect to database: ", err)
	}

	fmt.Println("Connected to database successfully.")
}