const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  spaceBetween: 20,

  on: {
    slideChangeTransitionStart: function () {
      // Знаходимо всі елементи team-item-content
      const contents = document.querySelectorAll(".team-item-content");

      // Проходимо по всім елементам і видаляємо клас active
      contents.forEach((content) => {
        content.classList.remove("active");
      });

      // Знаходимо активний слайд
      const activeSlide = this.slides[this.activeIndex];

      // Знаходимо елемент team-item-content в активному слайді
      const activeContent = activeSlide.querySelector(".team-item-content");

      // Додаємо клас active до елементу team-item-content в активному слайді
      activeContent.classList.add("active");
    },
  },
});

$('a[href^="#"]').click(function () {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    ); // тривалість анімації - 1000 мілісекунд (1 секунда)
    return false;
  }
});

// Create a GSAP timeline for the header burger animation
const burgerTimeline = gsap.timeline({ paused: true });

// Define the animation for opening the header burger
burgerTimeline
  .to(".header-burger", {
    duration: 0.4,
    autoAlpha: 1,
    ease: "power2.inOut",
    visibility: "visible",
    pointerEvents: "auto",
    y: 0,
    onStart: function () {
      $(".header-burger").css("visibility", "visible");
      $(".header-burger").css("pointer-events", "auto");
      $("body").css("overflow", "hidden");
    },
    onComplete: function () {
      $(".header-burger").css("visibility", "visible");
      $(".header-burger").css("pointer-events", "auto");
      $("body").css("overflow", "hidden");
    },
    onReverseComplete: function () {
      $(".header-burger").css("visibility", "hidden");
      $(".header-burger").css("pointer-events", "none");
      $("body").css("overflow", "auto");
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

$(".header-burger-link").click(function () {
  burgerTimeline.reverse();
});

// Add click event listeners for opening and closing the header burger
$(document).on("click", ".header-burger-open", function () {
  burgerTimeline.play();
});

$(document).on("click", ".header-burger-close", function () {
  burgerTimeline.reverse();
});

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

gsap.fromTo(
  ".header-logo",
  {
    opacity: 0,
    x: -50,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".header-logo",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".header-burger-open",
  {
    opacity: 0,
    x: 50,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".header-burger-open",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".hero-content",
  {
    opacity: 0,
    y: 50,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero-content",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".hero-title span",
  {
    opacity: 0,
    x: -100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero-title span",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".hero-form-wrap",
  {
    opacity: 0,
    x: 100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".hero-form",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".hero-form-btn",
  {
    opacity: 0,
    x: 20,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero-form-btn",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".hero-img-wrap",
  {
    opacity: 0,
    y: 50,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero-img-wrap",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".services-title",
  {
    opacity: 0,
    y: -20,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".services-title",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".services-descr",
  {
    opacity: 0,
    y: 20,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".services-descr",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".services-item",
  {
    opacity: 0,
    x: 100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".services-list",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".about-title",
  {
    opacity: 0,
    x: 50,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-title",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".about-descr",
  {
    opacity: 0,
    x: -50,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-descr",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".about-btn",
  {
    opacity: 0,
    x: 50,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-btn",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".about-img-wrap",
  {
    opacity: 0,
    x: -50,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-img-wrap",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".property-item",
  {
    opacity: 0,
    x: -100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".property-list",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".property-title",
  {
    opacity: 0,
    x: -50,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".property-title",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".property-descr",
  {
    opacity: 0,
    x: 50,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".property-descr",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".benefits-title",
  {
    opacity: 0,
    y: -50,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".benefits-title",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".benefits-descr",
  {
    opacity: 0,
    y: 50,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".benefits-descr",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".benefits-item",
  {
    opacity: 0,
    x: 50,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".benefits-item",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".header-nav-item",
  {
    opacity: 0,
    y: -20,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".header",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".header-auth-reg",
  {
    opacity: 0,
    x: 50,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".header",
      start: "top 80%",
    },
  }
);
gsap.fromTo(
  ".header-auth-login",
  {
    opacity: 0,
    x: -50,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".header",
      start: "top 80%",
    },
  }
);

// Створюємо анімацію з допомогою gsap.to()
const tween = gsap.to(CSSRulePlugin.getRule(".benefits-item::after"), {
  width: "100%", // кінцеве значення властивості width
  ease: "power2.inOut", // функція пом'якшення
  duration: 1.5,
});

// Створюємо тригер ScrollTrigger
ScrollTrigger.create({
  trigger: ".benefits-item-descr", // тригер сцени
  start: "top bottom", // початок тригеру
  end: "bottom top", // кінець тригеру
  animation: tween, // анімація, яка запускається при тригері
  once: true, // вмикання/вимкнення запуску анімації лише один раз
});

const tweenSecond = gsap.to(CSSRulePlugin.getRule(".benefits-list::after"), {
  height: "100%", // кінцеве значення властивості width
  ease: "power2.inOut", // функція пом'якшення
  duration: 1.5,
});

// Створюємо тригер ScrollTrigger
ScrollTrigger.create({
  trigger: ".benefits-list", // тригер сцени
  start: "top bottom", // початок тригеру
  end: "bottom top", // кінець тригеру
  animation: tweenSecond, // анімація, яка запускається при тригері
  once: true, // вмикання/вимкнення запуску анімації лише один раз
});

gsap.fromTo(
  ".team-title",
  {
    opacity: 0,
    x: -50,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".team-title",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".team-descr",
  {
    opacity: 0,
    x: 50,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".team-descr",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".team-list",
  {
    opacity: 0,
    y: 100,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".team-list",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".send-img-wrap",
  {
    opacity: 0,
    y: -30,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".send-img-wrap",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".send-title",
  {
    opacity: 0,
    y: -30,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".send-title",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".send-descr",
  {
    opacity: 0,
    x: -30,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".send-descr",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".send-form",
  {
    opacity: 0,
    x: 30,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".send-form",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".footer-logo",
  {
    opacity: 0,
    y: -50,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer-logo",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".footer-descr",
  {
    opacity: 0,
    x: -50,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer-descr",
      start: "top 80%",
    },
  }
);

gsap.fromTo(
  ".footer-social-item",
  {
    opacity: 0,
    y: 20,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".footer-descr",
      start: "top 80%",
    },
  }
);
