gsap.registerPlugin(ScrollTrigger);
const duration = 0.5;
const swup = new Swup({
  plugins: [new SwupScrollPlugin(), new SwupPreloadPlugin(), new SwupSlideTheme()],
});
const initialiseAllAnimations = () => {
  const onloadTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "section",
      start: "top 90%",
    },
  });
  if (document.querySelector(".cards-wrapper")) {
    const cardsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards-wrapper",
        start: "top 90%",
      },
    });
    cardsTimeline.from(".cards-wrapper", {
      x: 100,
      y: 100,
      opacity: 0,
      duration: duration,
    });
  }
  const cards = gsap.utils.toArray(".card");
  cards.forEach((card) => {
    gsap.from(card, {
      x: 100,
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
      },
    });
  });

  if (document.querySelector("section.glassy .column img")) {
    onloadTimeline.from(".column-content", { x: -100, opacity: 0, duration: duration });
    onloadTimeline.from("section.glassy .column img", {
      x: 100,
      opacity: 0,
      duration: duration,
    });
  }
  onloadTimeline.from(
    "main section:not(:first-child)",
    { opacity: 0, duration: 1 },
    `-=${duration}`
  );

  VanillaTilt.init(document.querySelectorAll("[data-tilt-element]"), {
    max: 10,
    speed: 600,
    scale: 1.05,
  });
};
initialiseAllAnimations();
swup.on("animationInStart", initialiseAllAnimations);

const nav = document.querySelector("nav.navbar");

const navbarObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      nav.classList.toggle("glassy", entry.isIntersecting);
    });
  },
  {
    rootMargin: "0px",
  }
);
navbarObserver.observe(document.querySelector("section"));
