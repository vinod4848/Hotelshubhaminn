const menu_data = [
  {
    id: 1,
    hasDropdown: true,
    active: true,
    title: "Home",
    pluseInco: true,
    link: "/",
    submenus: [{ title: "Home Style 1", link: "/" }],
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
    hasDropdown: true,
    title: "rooms & suites",
    link: "/room-one",
    pluseInco: true,
    submenus: [{ title: "rooms 1", link: "/room-one" }],
  },

  {
    id: 4,
    title: "Pages",
    megaMenu: true,
    link: "",
    pluseInco: true,
    pages: true,
    mega_menus: [
      {
        title: "Page Layout 1",
        link: "",
        submenus: [
          { title: "Offer", link: "/offers" },
          // { title: "Offer Details", link: "/offer-details" },
          { title: "Gallery", link: "/gallery" },
        ],
      },
    ],
  },
  {
    id: 6,
    hasDropdown: false,
    title: "contact us ",
    link: "/contact",
    pluseInco: false,
  },
  {
    id: 7,
    hasDropdown: false,
    title: "near me places  ",
    link: "/nearmeplaces ",
    pluseInco: false,
  },
];

export default menu_data;
