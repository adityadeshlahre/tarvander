import * as z from "zod"
import * as imports from "./"
import { CompleteUser, RelatedUserModel, CompleteTraveler, RelatedTravelerModel, CompletePlace, RelatedPlaceModel } from "./index"

export const LeaderModel = z.object({
  id: z.number().int(),
  userId: z.number().int(),
})

export interface CompleteLeader extends z.infer<typeof LeaderModel> {
  user: CompleteUser
  travelers: CompleteTraveler[]
  places: CompletePlace[]
}

/**
 * RelatedLeaderModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedLeaderModel: z.ZodSchema<CompleteLeader> = z.lazy(() => LeaderModel.extend({
  user: RelatedUserModel,
  travelers: RelatedTravelerModel.array(),
  places: RelatedPlaceModel.array(),
}))
