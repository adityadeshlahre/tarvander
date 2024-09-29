import * as z from "zod";
import * as imports from "./";
import {
  CompleteLeader,
  RelatedLeaderModel,
  CompleteUser,
  RelatedUserModel,
} from "./index";

export const TravelerModel = z.object({
  id: z.number().int(),
  name: z.string(),
  age: z.number().int(),
  leaderId: z.number().int(),
  userId: z.number().int().nullish(),
});

export interface CompleteTraveler extends z.infer<typeof TravelerModel> {
  leader: CompleteLeader;
  user?: CompleteUser | null;
}

/**
 * RelatedTravelerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTravelerModel: z.ZodSchema<CompleteTraveler> = z.lazy(() =>
  TravelerModel.extend({
    leader: RelatedLeaderModel,
    user: RelatedUserModel.nullish(),
  })
);
