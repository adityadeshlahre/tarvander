import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db/prisma";

export async function GET() {
  const user = await prisma.user.findFirst({});
  return NextResponse.json({ name: user?.name, email: user?.email });
}
