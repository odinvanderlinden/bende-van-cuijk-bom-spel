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
  {
    id: 3,
    title: "Geld terug",
    message: `Hoi Welpen, <br/>
    <br/>
    Wij hebben vandaag in jullie gebouw gezocht naar iets waardevols zodat jullie ons kunnen terugbetalen<br/>
    Helaas hebben jullie niks wat veel geld waard is, dus hebben we maar jullie bestek meegenomen. Dat ijzerwaar kunnen we nog verpatsen.<br/>
    <br/>
    Tot snel,<br/>
    De bende van Cuijk`,
    timestamp: new Date(2024, 6, 10, 12),
  },
  {
    id: 4,
    title: "De bom gaat weer aan",
    message: `Hoi Welpen, <br/>
    <br/>
    Mooi werk die bom ontmanteling zeg, maar zo makkelijk komen jullie niet van ons af.<br/>
    We hebben nogsteeds ons geld niet terug en dat zal hoe dan ook opgelost moeten worden.<br/>
    Hierom zetten we bom toch maar weer aan, jullie regelen het maar.<br/>
    <br/>
    P.S. jullie hebben geluk dat ik jullie gister avond niet te pakken heb gekregen, dus dan maar zo.<br/>
    <br/>
    Tot snel,<br/>
    De bende van Cuijk`,
    timestamp: new Date(2024, 6, 11, 7),
  },
  {
    id: 5,
    title: "🐍",
    message: `Hoi Welpen, <br/>
    <br/>
    Hebben jullie nou alweer contact met politie gezocht?!<br/>
    Volgensmij waren wij vrij duidelijk geweest dat dit niet meer de bedoeling was. Hebben jullie dan niks geleerd?<br/>
    Wij willen graag een hartig woordje met jullie spreken!<br/>
    <br/>
    Tot vanavond,<br/>
    De bende van Cuijk`,
    timestamp: new Date(2024, 6, 11, 13),
  },
];

export const setMessages = (newMessages: Message[]) => {
  messages = newMessages;
};
