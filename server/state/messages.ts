import { type Message } from "../../types/message";

//Maand is index dus 1 minder

export let messages: Message[] = [
  {
    id: 0,
    title: "Jullie zijn gedoomd",
    message: "Beste welpen, jullie zijn gedoomd",
    timestamp: new Date(2024, 5, 25, 21, 12),
  },
];

export const setMessages = (newMessages: Message[]) => {
  messages = newMessages;
};
