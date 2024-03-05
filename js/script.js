// Create a GSAP timeline for the header burger animation
const burgerTimeline = gsap.timeline({ paused: true });

// Define the animation for opening the header burger
burgerTimeline
  .to(".header-burger", {
    duration: 1,
    autoAlpha: 1,
    ease: "power2.inOut",
    visibility: "visible",
    pointerEvents: "auto",
    y: 0,
    onStart: function () {
      $(".header-burger").css("visibility", "visible");
      $(".header-burger").css("pointer-events", "auto");
    },
    onComplete: function () {
      $(".header-burger").css("visibility", "visible");
      $(".header-burger").css("pointer-events", "auto");
    },
    onReverseComplete: function () {
      $(".header-burger").css("visibility", "hidden");
      $(".header-burger").css("pointer-events", "none");
    },
  })
  //   .addPause() // Add a pause before animating the child elements
  .fromTo(
    ".header-burger-close",
    { x: -20, autoAlpha: 0 },
    {
      duration: 0.3,
      autoAlpha: 1,
      ease: "power2.inOut",
      x: 0,
      stagger: { amount: 0.15 },
    }
  )
  .fromTo(
    ".header-burger-link",
    { y: 20, autoAlpha: 0 },
    {
      duration: 0.3,
      autoAlpha: 1,
      ease: "power2.inOut",
      y: 0,
      stagger: { amount: 0.2 },
    },
    "-=0.15" // Start the header-burger-link animation 0.15 seconds before the previous animation ends
  )
  .fromTo(
    ".header-burger-auth-btn",
    { x: 20, autoAlpha: 0 },
    {
      duration: 0.3,
      autoAlpha: 1,
      ease: "power2.inOut",
      x: 0,
      stagger: { amount: 0.15 },
    },
    "-=0.15" // Start the header-burger-auth-btn animation 0.15 seconds before the previous animation ends
  );

// Add click event listeners for opening and closing the header burger
$(document).on("click", ".header-burger-open", function () {
  burgerTimeline.play();
});

$(document).on("click", ".header-burger-close", function () {
  burgerTimeline.reverse();
});
