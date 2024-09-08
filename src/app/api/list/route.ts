import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db/prisma";

export async function GET() {
  const user = await prisma.user.findFirst({});
  return NextResponse.json({ name: user?.username, email: user?.username });
}
