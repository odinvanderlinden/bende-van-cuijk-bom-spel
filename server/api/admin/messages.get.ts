import { messages } from "@/server/state/messages";
import { type GetMessagesResponse } from "@/types/message";

export default defineEventHandler<GetMessagesResponse>((event) => {
  return {
    messages,
    containsUnreadMessages: true,
  };
});
