import { NextRequest } from "next/server";

export function GET() {
  return Response.json({
    name: "John Doe",
    email: "johndoe@example.com ",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  

  return Response.json({
    message: "User created successfully",
  });
}
