import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  await prisma.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  return Response.json({
    message: "User created successfully",
  });
}
