import routes from "../navigation/routes";
import icons from "./icons";
import images from "./images";

const myProfile = {
  name: "ByProgrammers",
  profile_image: images.profile,
  address: "No. 88, Jln Padungan, Kuching",
};

const screens = [
  {
    id: 1,
    label: routes.HOME,
    icon: icons.home,
  },
  {
    id: 2,
    label: routes.MY_WALLET,
    icon: icons.wallet,
  },
  {
    id: 3,
    label: routes.NOTIFICATION,
    icon: icons.notification,
  },
  {
    id: 4,
    label: routes.FAVOURITE,
    icon: icons.favourite,
  },
];

const drawerItems = [
  {
    id: 1,
    label: "Track Your Order",
    icon: icons.location,
  },
  {
    id: 2,
    label: "Coupons",
    icon: icons.coupon,
  },
  {
    id: 3,
    label: "Settings",
    icon: icons.setting,
  },
  {
    id: 4,
    label: "Invite a Friend",
    icon: icons.profile,
  },
  {
    id: 5,
    label: "Help Center",
    icon: icons.help,
  },
];

const categories = [
  {
    id: 1,
    name: "Fast Food",
    icon: icons.burger,
  },
  {
    id: 2,
    name: "Fruit Item",
    icon: icons.cherry,
  },
  {
    id: 3,
    name: "Rice Item",
    icon: icons.rice,
  },
];

const hamburger = {
  id: 1,
  name: "Hamburger",
  description: "Chicken patty hamburger",
  categories: [1, 2],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: images.hamburger,
};

const hotTacos = {
  id: 2,
  name: "Hot Tacos",
  description: "Mexican tortilla & tacos",
  categories: [1, 3],
  price: 10.99,
  calories: 78,
  isFavourite: false,
  image: images.hotTacos,
};

const vegBiryani = {
  id: 3,
  name: "Veg Biryani",
  description: "Indian Vegetable Biryani",
  categories: [1, 2, 3],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: images.vegBiryani,
};

const wrapSandwich = {
  id: 4,
  name: "Wrap Sandwich",
  description: "Grilled vegetables sandwich",
  categories: [1, 2],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: images.wrapSandwich,
};

const menu = [
  {
    id: 1,
    name: "Featured",
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 2,
    name: "Nearby you",
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 3,
    name: "Popular",
    list: [hamburger, hotTacos, wrapSandwich],
  },
  {
    id: 4,
    name: "Newest",
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 5,
    name: "Trending",
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 6,
    name: "Recommended",
    list: [hamburger, hotTacos, wrapSandwich],
  },
];

export default {
  categories,
  drawerItems,
  menu,
  myProfile,
  screens,
};
