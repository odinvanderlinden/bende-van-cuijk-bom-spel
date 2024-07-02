import { messages } from "@/server/state/messages";
import { type GetMessagesResponse } from "@/types/message";
import { defuse } from "~/server/state/bomb";

export default defineEventHandler((event) => {
  defuse();
});
