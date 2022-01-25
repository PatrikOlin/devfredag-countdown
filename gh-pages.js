var ghpages = require("gh-pages");

ghpages.publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/PatrikOlin/devfredag-countdown.git", // Update to point to your repository
    user: {
      name: "Patrik Olin", // update to use your name
      email: "patrik@olin.work", // Update to use your email
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
