import * as z from "zod";
import * as imports from "./";
import { Role, Payment } from "@prisma/client";
import {
  CompleteLeader,
  RelatedLeaderModel,
  CompleteTraveler,
  RelatedTravelerModel,
} from "./index";

export const UserModel = z.object({
  id: z.number().int(),
  password: z.string(),
  name: z.string(),
  age: z.number().int(),
  contact: z.string(),
  email: z.string(),
  role: z.nativeEnum(Role),
  payment: z.nativeEnum(Payment).nullish(),
});

export type UserFrontModel = z.infer<typeof UserModel>;

export interface CompleteUser extends z.infer<typeof UserModel> {
  leader?: CompleteLeader | null;
  travelers: CompleteTraveler[];
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() =>
  UserModel.extend({
    leader: RelatedLeaderModel.nullish(),
    travelers: RelatedTravelerModel.array(),
  })
);
