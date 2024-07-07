import { messages } from "@/server/state/messages";
import { type GetMessagesResponse } from "@/types/message";
import { isTicking } from "~/server/state/bomb";

export default defineEventHandler<{ isTicking: boolean }>((event) => {
  return {
    isTicking,
  };
});
