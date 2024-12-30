import prisma from "@/app/db/prisma";
import { NextResponse } from "next/server";
import { RelatedTripModel } from "../../../../zod-schemas";
import { useParams } from "next/navigation";

export async function GET() {
  const { id } = useParams();

  if (!id) {
    return NextResponse.json(
      { message: "Trip ID is required" },
      { status: 400 }
    );
  }

  const trip = await prisma.trip.findUnique({
    where: { id: Number(id) },
    include: {
      leader: true,
      place: true,
    },
  });

  if (!trip) {
    return NextResponse.json({ message: "Trip not found" }, { status: 404 });
  }

  const parsedResponse = RelatedTripModel.safeParse(trip);

  if (!parsedResponse.success) {
    return NextResponse.json(
      { message: "Invalid response format", error: parsedResponse.error },
      { status: 400 }
    );
  }

  return NextResponse.json({ trip: parsedResponse.data });
}
