import prisma from "../db/prisma";

export default async function PromoteToLeader(userId: number) {
  const user = await prisma.user.update({
    where: { id: userId },
    data: { role: "LEADER" },
  });

  return {
    message: "Promoted to leader!",
    user: { id: user.id, email: user.email },
  };
}
