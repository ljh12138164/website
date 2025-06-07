CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"avatar" text,
	"email" text,
	"password" text
);
