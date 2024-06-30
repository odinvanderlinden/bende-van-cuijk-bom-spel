export interface Message {
  id: number;
  timestamp: Date;
  title: string;
  message: string;
}

export interface GetMessagesResponse {
  messages: Message[];
  containsUnreadMessages: boolean;
}
