import { z } from "zod";
import { PlaceModel } from "../../../zod-schemas";
import prisma from "../db/prisma";

export const CreatePlaceSchema = PlaceModel.omit({ id: true }); // Schema for input validation

export default async function CreatePlace(
  input: z.infer<typeof CreatePlaceSchema>
) {
  const validation = CreatePlaceSchema.safeParse(input);

  if (!validation.success) {
    throw new Error(
      `Validation Error: ${JSON.stringify(validation.error.errors)}`
    );
  }

  const { title, description, start, end, price, leaderId } = validation.data;

  try {
    const leaderExists = await prisma.leader.findUnique({
      where: { id: leaderId },
    });

    if (!leaderExists) {
      throw new Error("Leader not found.");
    }

    const place = await prisma.place.create({
      data: {
        title,
        description,
        start,
        end,
        price,
        leaderId,
      },
    });

    return {
      message: "Place created successfully!",
      place: PlaceModel.parse(place),
    };
  } catch (error: any) {
    throw new Error(`Failed to create place: ${error.message}`);
  }
}

interface DeletePlaceInput {
  placeId: number;
  leaderId: number;
}

export const DeletePlaceSchema = PlaceModel.omit({ id: true }).extend({
  leaderId: z.number().int(),
});

export async function DeletePlace({ placeId, leaderId }: DeletePlaceInput) {
  const parsedData = DeletePlaceSchema.safeParse({ leaderId });

  if (!parsedData.success) {
    throw new Error("Invalid data: " + parsedData.error);
  }

  const leaderExists = await prisma.leader.findUnique({
    where: { id: leaderId },
  });

  if (!leaderExists) {
    throw new Error("Leader not found.");
  }

  await prisma.place.delete({
    where: { id: placeId },
  });

  return {
    message: "Place deleted successfully!",
  };
}
