export const portfolios = {
  Web: [
    {
      id: "1",
      type: "featured",
      name: "LaraStarter",
      image: require("./image/larastarter.jpeg"),
      allImage: ['disney1.png', 'disney2.png', 'disney3.png'],
      description:
        "Lara Starter is highly capable and customizable Laravel Starter pack.",
      demo: "https://github.com/ShakilAhmed007/lara-starter",
      source: "https://github.com/ShakilAhmed007/lara-starter",
      tools: ["laravel", "bootstrap", "spite auth"],
    },
    {
      id: "2",
      type: "featured",
      name: "Disney Plus Clone",
      image: require("./image/disne.png"),
      allImage: [ 'disney2.png','disney1.png', 'disney3.png'],
      description:
        "A Disney plus stemming site pixel perfect clone with react",
      demo: "https://disneplus.netlify.app",
      source: "https://github.com/ShakilAhmed007/react-disney-plus-clone",
      tools: ["React", "React style component", "redux"],
    },
    {
      id: "3",
      type: "featured",
      name: "js.zonayed.me",
      image: require("./image/js.zonayed.me.png"),
      allImage: ['this', 'is', 'a', 'simple', 'image'],
      description:
        "Learn Practical use case of JavaScript in your everyday life, entirely in Bengali",
      demo: "https://zonayed.js.org",
      source: "https://github.com/zonayedpca/js.zonayed.me",
      tools: ["gatsby", "utterances", "travis ci"],
    },

    {
      id: "4",
      type: "regular",
      name: "PWA Blog",
      allImage: ['this', 'is', 'a', 'simple', 'image'],
      description:
        "A Simple blog powered by WP-Rest API and React, Progressive Web App supported",
      demo: "https://zonayedjsv1.netlify.com",
      source: "https://github.com/zonayedpca/old.js.zonayed.me",
      tools: ["react", "pwa"],
    },
  ],
  Others: [
    
  ],
}
