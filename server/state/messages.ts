import { type Message } from "../../types/message";

//Maand is index dus 1 minder

export let messages: Message[] = [
  {
    id: 0,
    title: "Jullie hebben alles verpest!",
    message: `Beste welpen, <br/>
    <br/>
    Jullie hebben gisteren onze belangrijkste deal ooit verpest! Hebben jullie wel enig idee wat voor een probleem er nu is?!<br/>
    Dit zal hoe dan ook rechtgezet moeten worden. Om er zeker van te zijn dat jullie dit gaan oplossen leggen wij deze bom bij jullie gebouw neer.<br/>
    Zolang jullie onze berichten opvolgen is er niks aan de hand. We houden jullie in de gaten! Dus als jullie op pad gaan zou ik er maar voor zorgen dat je onherkenbaar bent.<br/>
    <br/>
    Jullie zullen nog van ons horen,<br/>
    De bende van Cuijk`,
    timestamp: new Date(2024, 5, 25, 21, 12),
  },
];

export const setMessages = (newMessages: Message[]) => {
  messages = newMessages;
};
