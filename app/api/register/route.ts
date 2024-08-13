// app/api/register/route.js
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request: { json: () => PromiseLike<{ name: any; username: any; email: any; password: any; }> | { name: any; username: any; email: any; password: any; }; }) {
  const { name, username, email, password } = await request.json();

  if (!name || !email || !password) {
    return new Response(
      JSON.stringify({ error: "Name, email, username, and password are required" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    // Check if the email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "Email already in use" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    await prisma.user.create({
      data: { name, username, email, password: hashedPassword },
    });

    return new Response(
      JSON.stringify({ message: "User registered successfully" }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Database error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function GET(request){
  return new Response("GET request not allowed", { status: 200 });
}