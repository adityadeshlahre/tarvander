import { z } from "zod";
import { CompleteLeader, RelatedLeaderModel } from "./leader";
import { CompletePlace, RelatedPlaceModel } from "./place";

export const TripModel = z.object({
  id: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  leaderId: z.number().int(),
  placeId: z.number().int(),
});

export type TripInputModel = z.infer<typeof TripModel>;

export interface CompleteTrip extends z.infer<typeof TripModel> {
  leader: CompleteLeader;
  place: CompletePlace;
}

// export const RelatedTripModel: z.ZodSchema<CompleteTrip> = z.lazy(() =>
//   trips: z.array(TripModel.extend({
//     leader: RelatedLeaderModel,
//     place: RelatedPlaceModel,
//   })),
// );

export const RelatedTripModel = z.object({
  trips: z.array(
    TripModel.extend({
      leader: RelatedLeaderModel,
      place: RelatedPlaceModel,
    })
  ),
});
