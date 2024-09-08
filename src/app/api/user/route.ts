import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db/prisma";

export async function GET() {
  const user = await prisma.user.findFirst({});
  return NextResponse.json({ name: user?.username, email: user?.username });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const user = await prisma.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  return NextResponse.json({ message: "Signed up" });
}
