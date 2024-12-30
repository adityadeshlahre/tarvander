import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db/prisma";

export async function GET() {
  const user = await prisma.user.findMany({});
  return NextResponse.json({ user: user });
}
