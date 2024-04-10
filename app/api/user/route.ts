import { NextRequest, NextResponse } from "next/server";

import client from "@/db/index";

export async function POST(req: NextRequest) {
  const body = await req.json();
  await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  return Response.json({
    message: "User created successfully",
  });
}
