import { messages } from "@/server/state/messages";
import { type GetMessagesResponse } from "@/types/message";

export default defineEventHandler<GetMessagesResponse>((event) => {
  return {
    messages: messages.filter((message) => {
      console.log(
        message.timestamp < new Date(),
        message.timestamp,
        new Date()
      );
      return message.timestamp < new Date();
    }),
    containsUnreadMessages: true,
  };
});
