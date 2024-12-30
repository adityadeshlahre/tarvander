import { NextResponse } from "next/server";
import prisma from "../db/prisma";

export default async function Profile(email: string) {
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    return { error: "User not found" };
  }

  return NextResponse.json({
    message: "Logged in successfully!",
    user: { id: user.id, email: user.email },
  });
}
