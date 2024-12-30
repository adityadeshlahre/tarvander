"use server";

import type { Role } from "@prisma/client";
import prisma from "../db/prisma";
import bcrypt from "bcrypt";

export async function signup(
  password: string,
  name: string,
  age: number,
  contact: string,
  email: string,
  role: string
) {
  const hashedPassword: string = await bcrypt.hash(password, 10);

  const assignedRole: Role = role === "1" ? "LEADER" : "PASSENGER";

  const user = await prisma.user.create({
    data: {
      password: hashedPassword,
      name: name,
      age: age,
      contact: contact,
      email: email,
      role: assignedRole,
    },
  });

  if (assignedRole === "LEADER") {
    await prisma.leader.create({
      data: {
        userId: user.id,
      },
    });
  }

  return {
    message: "Signed up successfully!",
    user: { id: user.id, email: user.email },
  };
}

export async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    return { error: "User not found" };
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return { error: "Incorrect password" };
  }

  return {
    message: "Logged in successfully!",
    user: { id: user.id, email: user.email },
  };
}
