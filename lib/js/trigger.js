gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const loadingLogo = document.getElementById("loading-logo");
  const mainContent = document.getElementById("home");
  const navbar = document.querySelector("nav");

  // Animasi logo
  gsap.from(loadingLogo, {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out",
  });

  // Hilangkan loading screen dan tampilkan konten utama dengan animasi
  gsap.to(loadingScreen, {
    opacity: 0,
    duration: 0.5,
    delay: 2,
    onComplete: () => {
      if (loadingScreen && loadingScreen.style) {
        loadingScreen.style.display = "none";
      }
      if (mainContent) {
        mainContent.style.display = "block";

        // Inisialisasi GSAP ScrollTrigger

        // Animasi untuk section Home
        gsap.from("#home h1", {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: "#home",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from("#home p", {
          opacity: 0,
          y: 30,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: "#home",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from("#home a", {
          opacity: 0,
          y: 30,
          duration: 1,
          delay: 0.4,
          scrollTrigger: {
            trigger: "#home",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        // Animasi untuk menu items di Navbar
        gsap.from("#mobile-menu a", {
          opacity: 0,
          y: -20,
          stagger: 0.1,
          duration: 0.5,
        });
      }
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi GSAP ScrollTrigger

  // Animasi untuk section Home
  gsap.from("#home h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: "#home",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#home p", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: "#home",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#home a", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.4,
    scrollTrigger: {
      trigger: "#home",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Fungsi untuk mengatur animasi logo berdasarkan lebar layar
  function setupLogoAnimation() {
    if (window.innerWidth >= 768) {
      gsap.from("nav", {
        backgroundColor: "rgba(146, 64, 14, 0.0)",
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)", // Menggunakan boxShadow alih-alih shadow
        duration: 0.3,
        scrollTrigger: {
          trigger: "body",
          start: "top -80px",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to("#logo", {
        fontSize: "23px",
        duration: 0.3,
        scrollTrigger: {
          trigger: "body",
          start: "top -80px",
          end: "top -120px",
          scrub: true,
        },
      });
    } else {
      // Menghapus animasi jika lebar layar di bawah 768px
      if (ScrollTrigger.getById("navAnimation")) {
        ScrollTrigger.getById("navAnimation").kill();
      }
      if (ScrollTrigger.getById("logoAnimation")) {
        ScrollTrigger.getById("logoAnimation").kill();
      }
      gsap.set("nav", {
        backgroundColor: "",
        boxShadow: "",
        clearProps: "all",
      });
      gsap.set("#logo", { fontSize: "", clearProps: "all" });
    }
  }

  // Panggil fungsi saat halaman dimuat
  setupLogoAnimation();

  // Tambahkan event listener untuk resize
  window.addEventListener("resize", setupLogoAnimation);

  // Animasi untuk menu items di Navbar
  gsap.from("#mobile-menu a", {
    opacity: 0,
    y: -20,
    stagger: 0.1,
    duration: 0.5,
  });

  gsap.from(".cards-ps", {
    scrollTrigger: {
      trigger: "#products",
      start: "top 80%",
      toggleActions: "play none none reverse", 
      // markers: true,
      once: true,
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
  });

  // Animasi untuk section Testimonials
  gsap.from("#testimonials .swiper-slide", {
    scrollTrigger: {
      trigger: "#testimonials",
      start: "top 80%",
    },
    opacity: 0,
    x: -50,
    stagger: 0.2,
    duration: 1,
  });

  // Animasi untuk section FAQ
  gsap.from("#faq .space-y-6 > div", {
    scrollTrigger: {
      trigger: "#faq",
      start: "top 80%",
    },
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 1,
  });

  // Animasi untuk section Contact
  gsap.from("#contact .grid > div", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
    },
    opacity: 0,
    scale: 0.9,
    stagger: 0.2,
    duration: 1,
  });

  // Tambahkan kode animasi loading text di sini
  const loadingText = document.getElementById("loading-text");
  const text = "Loading...";
  let index = 0;

  function typeText() {
    if (index < text.length) {
      loadingText.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeText, 150);
    } else {
      setTimeout(eraseText, 1000);
    }
  }

  function eraseText() {
    if (index > 0) {
      loadingText.innerHTML = text.substring(0, index - 1);
      index--;
      setTimeout(eraseText, 50);
    } else {
      setTimeout(typeText, 500);
    }
  }

  if (loadingText) {
    typeText();
  }

  const speakerButton = document.getElementById("speaker");
  const video = document.querySelector("video");

  if (speakerButton && video) {
    // Pastikan video dimulai dalam keadaan mute
    video.muted = true;

    const volumeXIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
    const volume2Icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;

    speakerButton.innerHTML = volumeXIcon;

    speakerButton.addEventListener("click", function () {
      if (video.muted) {
        video.muted = false;
        speakerButton.innerHTML = volume2Icon;
      } else {
        video.muted = true;
        speakerButton.innerHTML = volumeXIcon;
      }
    });
  }
});
