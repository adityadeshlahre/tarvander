"use server";

import { Role } from "@prisma/client";
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

  return {
    message: "Signed up successfully!",
    user: { id: user.id, email: user.email },
  };
}
