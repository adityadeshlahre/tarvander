import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db/prisma";
import { UserModel } from "../../../../zod-schemas";

export async function GET() {
  const user = await prisma.user.findFirst({});
  return NextResponse.json({ name: user?.name, email: user?.email });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = UserModel.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  }

  await prisma.user.create({
    data: {
      password: body.password,
      name: body.name,
      age: body.age,
      contact: body.contact,
      email: body.email,
      role: body.role,
      payment: body.payment ?? null,
    },
  });

  return NextResponse.json({ message: "Signed up" });
}
