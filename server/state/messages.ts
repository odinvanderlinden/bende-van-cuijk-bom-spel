import { type Message } from "../../types/message";

//Maand is index dus 1 minder
// Op vercel server is het 2 uur vroeger

export let messages: Message[] = [
  {
    id: 0,
    title: "Jullie hebben alles verpest!💣",
    message: `Hoi welpen, <br/>
    <br/>
    Jullie hebben gisteren onze belangrijkste deal ooit verpest! Hebben jullie wel enig idee wat voor een probleem er nu is?!<br/>
    Dit zal hoe dan ook rechtgezet moeten worden. Om er zeker van te zijn dat jullie dit gaan oplossen leggen wij deze bom bij jullie gebouw neer.<br/>
    Zolang jullie onze berichten opvolgen is er niks aan de hand. We houden jullie in de gaten! Dus als jullie op pad gaan zou ik er maar voor zorgen dat je onherkenbaar bent.<br/>
    <br/>
    Jullie zullen nog van ons horen,<br/>
    De bende van Cuijk`,
    timestamp: new Date(2024, 5, 25, 21, 12),
  },
  {
    id: 1,
    title: "Lekker spelen in de stad",
    message: `Hoi Welpen, <br/>
    <br/>
    Denk maar niet dat we jullie niet hebben zien spelen in de stad, ondanks die maskers waren jullie nogsteeds erg opvallend. <br/>
    Volgensmij snappen jullie niet hoe dringend dit probleem is. Wij moeten hoe dan ook ons 💰 terug krijgen!<br/>
    <br/>
    Ik zou maar opschieten,<br/>
    De bende van Cuijk`,
    timestamp: new Date(2024, 6, 9, 12),
  },
  {
    id: 2,
    title: "De ontmantelcode",
    message: `Hoi Welpen, <br/>
    <br/>
    De ontmantelcode is veels te moeilijk om te raden, zelfs de politie zal jullie niet kunnen helpen😈<br/>
    En waag het niet nogmaals de politie te benaderen<br/>
    <br/>
    De bende van Cuijk`,
    timestamp: new Date(2024, 6, 9, 16),
  },
];

export const setMessages = (newMessages: Message[]) => {
  messages = newMessages;
};
