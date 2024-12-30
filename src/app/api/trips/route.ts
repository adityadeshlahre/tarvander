import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db/prisma";
import { RelatedTripModel } from "../../../../zod-schemas";

export async function GET() {
  const trips = await prisma.trip.findMany({
    include: {
      leader: {
        include: {
          user: true,
          places: true,
          travelers: true,
        },
      },
      place: {
        include: {
          leader: true,
        },
      },
    },
  });

  const parsedResponse = RelatedTripModel.safeParse({ trips });
  if (!parsedResponse.success) {
    return NextResponse.json(
      { message: "Invalid response format", error: parsedResponse.error },
      { status: 400 }
    );
  }
  return NextResponse.json({ trips: parsedResponse.data });
}
