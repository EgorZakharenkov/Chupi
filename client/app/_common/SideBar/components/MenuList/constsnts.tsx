import { BsFillHouseFill, BsJournalAlbum } from "react-icons/bs";
import {
  FaBroadcastTower,
  FaMicrophoneAlt,
  FaPodcast,
  FaUser,
} from "react-icons/fa";

export type MenuList = {
  id: number;
  icon: any;
  name: string;
  link: string;
};

export const menuList: MenuList[] = [
  {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Home",
    link: "/",
  },
  {
    id: 4,
    icon: <FaMicrophoneAlt />,
    name: "Artist",
    link: "/artist",
  },
  {
    id: 3,
    icon: <FaUser />,
    name: "Profile",
    link: "/profile",
  },
  {
    id: 3,
    icon: <FaBroadcastTower />,
    name: "Radio",
    link: "/radio",
  },
  {
    id: 5,
    icon: <BsJournalAlbum />,
    name: "Albums",
    link: "/albums",
  },
  {
    id: 6,
    icon: <FaPodcast />,
    name: "Podcasts",
    link: "/podcasts",
  },
];
