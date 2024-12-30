import { z } from "zod";
import { CompleteLeader, RelatedLeaderModel } from "./leader";
import { CompletePlace, RelatedPlaceModel } from "./place";

export const TripModel = z.object({
  id: z.number().int(),
  createdAt: z.string(),
  updatedAt: z.string(),
  leaderId: z.number().int(),
  placeId: z.number().int(),
});

export interface CompleteTrip extends z.infer<typeof TripModel> {
  leader: CompleteLeader;
  place: CompletePlace;
}

export const RelatedTripModel: z.ZodSchema<CompleteTrip> = z.lazy(() =>
  TripModel.extend({
    leader: RelatedLeaderModel,
    place: RelatedPlaceModel,
  })
);
