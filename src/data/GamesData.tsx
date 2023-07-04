import bgwitcher from "../assets/images/games/bgwitcherC.jpg";
import witcher from "../assets/images/games/witcher.jpg";
import witcherlogo from "../assets/images/games/witcherlogo.png";

import bggtav from "../assets/images/games/bggtav.jpg";
import gtav from "../assets/images/games/gtav.jpg";
import gtavlogo from "../assets/images/games/gtalogo.png";
import bgminecraft from "../assets/images/games/bgminecraft.jpg";
import minecraft from "../assets/images/games/minecraft.jpg";
import bgzelda from "../assets/images/games/bgzelda.jpg";
import zelda from "../assets/images/games/zelda.jpg";
import bgreddead2 from "../assets/images/games/bgreddead2.jpg";
import reddead2 from "../assets/images/games/reddead2.jpg";
import bgcallofduty from "../assets/images/games/bgcallofduty.jpg";
import callofduty from "../assets/images/games/callofduty.png";
import bgfallout4 from "../assets/images/games/bgfallout4.jpg";
import fallout4 from "../assets/images/games/fallout4.jpg";
import bgcsgo from "../assets/images/games/bgcsgo.jpg";
import csgo from "../assets/images/games/csgo.jpg";
import bgskyrim from "../assets/images/games/bgskyrim.jpg";
import skyrim from "../assets/images/games/skyrim.jpg";
import bgdoom from "../assets/images/games/bgdoom.jpg";
import doom from "../assets/images/games/doom.jpg";
import bgdbd from "../assets/images/games/bgdbd.jpg";
import bgdbdB from "../assets/images/games/bgdbdB.jpg";
import dbd from "../assets/images/games/dbd.jpg";
import dbdB from "../assets/images/games/dbd.jpeg";
import bggodofwar from "../assets/images/games/bggodofwarB.jpg";
import godofwar from "../assets/images/games/godofwar.jpg";
import godofwarlogo from "../assets/images/games/godofwarlogo.png";
import zeldalogo from "../assets/images/games/zeldalogo.png";
import reddead2logo from "../assets/images/games/reddead2logo.png";
import fallout4logo from "../assets/images/games/fallout4logo.png";
import skyrimlogo from "../assets/images/games/skyrimlogo.png";
import doomlogo from "../assets/images/games/doomlogo.png";
import callofdutylogo from "../assets/images/games/callofdutylogo.png";
import dbdlogo from "../assets/images/games/dbdlogo.png";
import witcherchar from "../assets/images/games/witcherchar.png";
import gtavchar from "../assets/images/games/gtavchar.png";

import godofwarchar from "../assets/images/games/godofwarchar.png";
import zeldachar from "../assets/images/games/zeldachar.png";
import fallout4char from "../assets/images/games/fallout4char.png";
import reddead2char from "../assets/images/games/reddead2char.png";
import skyrimchar from "../assets/images/games/skyrimchar.png";
import doomchar from "../assets/images/games/doomchar.png";
import callofdutychar from "../assets/images/games/callofdutychar.png";
import dbdchar from "../assets/images/games/dbdchar.png";
import witchercharA from "../assets/images/games/witchercharA.png";
import witchercharB from "../assets/images/games/witchercharB.png";

interface Game {
  title: string;
  genre: string;
  developer: string;
  publisher: string;
  releaseYear: number;
  rating: number;
  platforms: string[];
  description: string;
  heroImage: string;
  image: string;
  charImage: string;
  logo: string;
  width: string;
  videoUrl: string;
}

const GamesData: Game[] = [
  {
    title: "The Witcher 3: Wild Hunt",
    genre: "Action role-playing",
    developer: "CD Projekt",
    publisher: "CD Projekt",
    releaseYear: 2015,
    rating: 9.9,
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    description:
      "The Witcher 3: Wild Hunt is an action role-playing game with a third-person perspective. Players control Geralt of Rivia, a monster slayer known as a Witcher.",
    heroImage: bgwitcher,
    image: witcher,
    logo: witcherlogo,
    width: "22rem",
    charImage: witcherchar,
    videoUrl: "https://www.youtube.com/embed/1-l29HlKkXU?start=33",
  },
  {
    title: "Grand Theft Auto V",
    genre: "Action-adventure",
    developer: "Rockstar North",
    publisher: "Rockstar Games",
    releaseYear: 2013,
    rating: 9.8,
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    description:
      "Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective.",
    heroImage: bggtav,
    image: gtav,
    logo: gtavlogo,
    width: "20rem",
    charImage: gtavchar,
    videoUrl: "https://www.youtube.com/embed/QkkoHAzjnUs?start=8",
  },
  {
    title: "God of War Ragnarok",
    genre: "Action-adventure",
    developer: "Santa Monica Studio",
    releaseYear: 2022,
    rating: 9.9,
    heroImage: bggodofwar,
    image: godofwar,
    publisher: "Sony Interactive Entertainment",
    platforms: ["PlayStation 5"],
    description:
      "God of War Ragnarök is the latest entry in the God of War series and the sequel to the critically acclaimed God of War (2018).",
    logo: godofwarlogo,
    width: "26rem",
    charImage: godofwarchar,
    videoUrl: "https://www.youtube.com/embed/EE-4GvjKcfs?start=8",
  },
  // {
  //   title: "Minecraft",
  //   genre: "Sandbox, survival",
  //   developer: "Mojang Studios",
  //   publisher: "Mojang Studios",
  //   releaseYear: 2011,
  //   rating: 9.7,
  //   platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
  //   description: "Minecraft is a sandbox survival game",
  //   heroImage: bgminecraft,
  //   image: minecraft,
  // },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Action-adventure",
    developer: "Nintendo",
    publisher: "Nintendo",
    releaseYear: 2017,
    rating: 9.7,
    platforms: ["Nintendo Switch", "Wii U"],
    description:
      "The series centers on the various incarnations of Link, a courageous young man of the elf-like Hylian race, and Princess Zelda, a magical princess who is the mortal reincarnation of the goddess Hylia",
    heroImage: bgzelda,
    image: zelda,
    logo: zeldalogo,
    width: "26rem",
    charImage: zeldachar,
    videoUrl: "https://www.youtube.com/embed/uHGShqcAHlQ?start=49",
  },
  {
    title: "Red Dead Redemption 2",
    genre: "Action-adventure",
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    releaseYear: 2018,
    rating: 9.6,
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    description:
      "After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee.",
    heroImage: bgreddead2,
    image: reddead2,
    logo: reddead2logo,
    width: "30rem",
    charImage: reddead2char,
    videoUrl: "https://www.youtube.com/embed/eaW0tYpxyp0?start=27",
  },
  {
    title: "Call of Duty: Modern Warfare 2",
    genre: "First-person shooter",
    developer: "Infinity Ward",
    publisher: "Activision",
    releaseYear: 2009,
    platforms: ["PC", "PlayStation 3", "Xbox 360"],
    rating: 9.4,
    description:
      "Call of Duty: Modern Warfare 2 is a first-person shooter video game. It is the sixth installment in the Call of Duty series and a direct sequel to Call of Duty 4: Modern Warfare.",
    heroImage: bgcallofduty,
    image: callofduty,
    logo: callofdutylogo,
    width: "25rem",
    charImage: callofdutychar,
    videoUrl: "https://www.youtube.com/embed/OeVapCrI1pY?start=1",
  },
  {
    title: "Dead by Daylight",
    genre: "Horror",
    developer: "Behaviour Interactive",
    publisher: "Behaviour Interactive",
    releaseYear: 2016,
    rating: 8.9,
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    description:
      "Dead by Daylight is an asymmetrical horror game where one player is the Killer and the other four are Survivors.",
    heroImage: bgdbdB,
    image: dbdB,
    logo: dbdlogo,
    width: "25rem",
    charImage: dbdchar,
    videoUrl: "https://www.youtube.com/embed/JGhIXLO3ul8?start=1",
  },
  {
    title: "Fallout 4",
    genre: "Action role-playing",
    developer: "Bethesda Game Studios",
    publisher: "Bethesda Softworks",
    releaseYear: 2015,
    rating: 9.5,
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    description:
      "Fallout 4 is an open-world role-playing game developed by Bethesda Game Studios. In it, the player begins as a parent and spouse in the year 2077, but then must enter Vault 111 to survive the nuclear apocalypse.",
    heroImage: bgfallout4,
    image: fallout4,
    logo: fallout4logo,
    width: "25rem",
    charImage: fallout4char,
    videoUrl: "https://www.youtube.com/embed/XW7Of3g2JME?start=22",
  },
  // {
  //   title: "Counter-Strike: Global Offensive",
  //   genre: "First-person shooter",
  //   developer: "Valve Corporation",
  //   publisher: "Valve Corporation",
  //   releaseYear: 2012,
  //   rating: 9.5,
  //   platforms: ["PC", "PlayStation 3", "Xbox 360"],
  //   description:
  //     "Counter-Strike: Global Offensive is a first-person shooter game",
  //   heroImage: bgcsgo,
  //   image: csgo,
  // },
  {
    title: "The Elder Scrolls V: Skyrim",
    genre: "Action role-playing",
    developer: "Bethesda Game Studios",
    publisher: "Bethesda Softworks",
    releaseYear: 2011,
    rating: 9.4,
    platforms: ["PC", "PlayStation 3", "Xbox 360"],
    description:
      "Skyrim is a cold and mountainous region in the north of the continent of Tamriel. It has traditionally been divided into nine administrative sections, called holds, each governed by a jarl from a larger town.",
    heroImage: bgskyrim,
    image: skyrim,
    logo: skyrimlogo,
    width: "30rem",
    charImage: skyrimchar,
    videoUrl: "https://www.youtube.com/embed/JSRtYpNRoN0?start=22",
  },
  {
    title: "Doom Eternal",
    genre: "First-person shooter",
    developer: "id Software",
    publisher: "Bethesda Softworks",
    releaseYear: 2020,
    rating: 9.4,
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    description:
      "Set some time after the events of the 2016 game, the story follows the Doom Slayer once again, on a mission to end Hell's consumption of Earth and foil the alien Maykrs' plans to exterminate humanity.",
    heroImage: doom,
    image: bgdoom,
    logo: doomlogo,
    width: "20rem",
    charImage: doomchar,
    videoUrl: "https://www.youtube.com/embed/RO90omga8D4?start=8",
  },
];

export default GamesData;
