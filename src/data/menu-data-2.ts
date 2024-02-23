type MenuItemWithDropdown = {
  id: number;
  hasDropdown: boolean;
  title: string;
  link: string;
  pluseInco: boolean;
  megaMenu?: boolean;
  submenus?: MenuItem[]; // Add 'submenus' property for items with dropdowns
};

type MenuItemWithoutDropdown = {
  id: number;
  hasDropdown: boolean;
  title: string;
  link: string;
  pluseInco?: boolean; // Optional: Add 'pluseInco' if some items may not have it
  megaMenu?: boolean; 
  submenus?: MenuItem[];
};

type MenuItem = MenuItemWithDropdown | MenuItemWithoutDropdown;

const menu_data: MenuItem[] = [
  {
    id: 1,
    hasDropdown: false,
    title: "Home",
    link: "/",
    pluseInco: false,
  },

  {
    id: 2,
    hasDropdown: false,
    title: "about us",
    link: "/about",
    pluseInco: false,
  },
  {
    id: 3,
    hasDropdown: false,
    title: "rooms & suites",
    link: "/room-one",
  },

  {
    id: 4,
    hasDropdown: false,
    title: "Offer ",
    link: "/offers",
    pluseInco: false,
  },

  {
    id: 5,
    hasDropdown: false,
    title: "Gallery ",
    link: "/gallery",
    pluseInco: false,
  },
  {
    id: 6,
    hasDropdown: false,
    title: "near me places  ",
    link: "/nearmeplaces ",
    pluseInco: false,
  },

  {
    id: 7,
    hasDropdown: false,
    title: "contact us ",
    link: "/contact",
    pluseInco: false,
  },
];

export default menu_data;
