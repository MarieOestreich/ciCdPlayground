import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Marie Oestreich",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["not much yet, only what i have heard in the Onboarding"],
    // Which CI/CD tools do you use in your project?
    tools: "",
    // What do you want to learn in this workshop?
    expectations: ["Basics of CI/CD"],
  },
});
