import * as z from "zod";
import * as imports from "./";
import { CompleteLeader, RelatedLeaderModel } from "./index";

export const PlaceModel = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  start: z.string(),
  end: z.string(),
  price: z.number().int(),
  leaderId: z.number().int(),
});

export interface CompletePlace extends z.infer<typeof PlaceModel> {
  leader: CompleteLeader;
}

/**
 * RelatedPlaceModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPlaceModel: z.ZodSchema<CompletePlace> = z.lazy(() =>
  PlaceModel.extend({
    leader: RelatedLeaderModel,
  })
);
