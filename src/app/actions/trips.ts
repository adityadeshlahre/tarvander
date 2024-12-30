"use server";

import { TripModel } from "../../../zod-schemas";
import prisma from "../db/prisma";

interface CreateTripInput {
  leaderId: number;
  placeId: number;
}

export async function CreateTrip({ leaderId, placeId }: CreateTripInput) {
  try {
    const leader = await prisma.leader.findUnique({
      where: { id: leaderId },
      include: { places: true },
    });

    if (!leader) {
      throw new Error("Leader not found.");
    }

    const isPlaceOwnedByLeader = leader.places.some(
      (place) => place.id === placeId
    );

    if (!isPlaceOwnedByLeader) {
      throw new Error("You can only create trips for your own places");
    }

    const trip = await prisma.trip.create({
      data: {
        updatedAt: new Date().toISOString(),
        leaderId,
        placeId,
      },
    });

    return {
      message: "Trip created successfully!",
      trip: TripModel.parse(trip),
    };
  } catch (error: any) {
    throw new Error(`Failed to create trip: ${error.message}`);
  }
}

interface DeleteTripInput {
  leaderId: number;
  placeId: number;
}

export async function DeleteTrip({ leaderId, placeId }: DeleteTripInput) {
  try {
    const leader = await prisma.leader.findUnique({
      where: { id: leaderId },
      include: { places: true },
    });

    if (!leader) {
      throw new Error("Leader not found.");
    }

    const isPlaceOwnedByLeader = leader.places.some(
      (place) => place.id === placeId
    );

    if (!isPlaceOwnedByLeader) {
      throw new Error("You can only create trips for your own places");
    }
    const trip = await prisma.trip.delete({
      where: {
        id: placeId,
      },
    });

    if (!trip) {
      throw new Error("Trip not found.");
    }
    return { message: "Trip deleted successfully!" };
  } catch (error: any) {
    throw new Error(`Failed to delete trip: ${error.message}`);
  }
}
