interface OnBoardingSlideData {
  title: string;
  subtitle: string;
  desc: string;
  color: string;
  picture: number;
}

export const slides: OnBoardingSlideData[] = [
  {
    title: "Relaxed",
    subtitle: "Find your outfits",
    desc: "Confused about your outfit? Don't worry! Find the best outfit here.",
    color: "#bfeaf5",
    picture: require("../assets/images/1.png"),
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    desc:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: "#beecc4",
    picture: require("../assets/images/2.png"),
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    desc: "Create your individual and unique style and look amazing everyday",
    color: "#ffe4d9",
    picture: require("../assets/images/3.png"),
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    desc: "Discover the latest trends in fashion and explore your personality",
    color: "#ffdddd",
    picture: require("../assets/images/4.png"),
  },
];
