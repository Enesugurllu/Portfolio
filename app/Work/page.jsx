"use client";
import React, { useEffect } from "react";

const page = () => {
  const projects = [
    {
      number: "01",
      title: "Frontend Projesi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
      tech: "Html 5, Css 3, Javascript",
      image: "https://storage.googleapis.com/a1aa/image/1xCu1E2M93IPJFj0EweE78ePr4cuMtsBogkBTewYRReNI4LQB.jpg"
    },
    {
      number: "02",
      title: "Backend Projesi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
      tech: "Node.js, Express, MongoDB",
      image: "https://storage.googleapis.com/a1aa/image/1xCu1E2M93IPJFj0EweE78ePr4cuMtsBogkBTewYRReNI4LQB.jpg"
    },
    {
      number: "03",
      title: "Fullstack Projesi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
      tech: "React, Node.js, Express, MongoDB",
      image: "https://storage.googleapis.com/a1aa/image/1xCu1E2M93IPJFj0EweE78ePr4cuMtsBogkBTewYRReNI4LQB.jpg"
    },
    {
      number: "04",
      title: "Mobil Uygulama",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
      tech: "React Native, Expo",
      image: "https://storage.googleapis.com/a1aa/image/1xCu1E2M93IPJFj0EweE78ePr4cuMtsBogkBTewYRReNI4LQB.jpg"
    },
    {
      number: "05",
      title: "Veri Bilimi Projesi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
      tech: "Python, Pandas, Scikit-learn",
      image: "https://storage.googleapis.com/a1aa/image/1xCu1E2M93IPJFj0EweE78ePr4cuMtsBogkBTewYRReNI4LQB.jpg"
    },
    {
      number: "06",
      title: "DevOps Projesi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
      tech: "Docker, Kubernetes, Jenkins",
      image: "https://storage.googleapis.com/a1aa/image/1xCu1E2M93IPJFj0EweE78ePr4cuMtsBogkBTewYRReNI4LQB.jpg"
    }
  ];

  let currentIndex = 0;

  useEffect(() => {
    const nextButton = document.getElementById("next-button");
    const prevButton = document.getElementById("prev-button");

    const updateProject = () => {
      document.getElementById("project-number").textContent = projects[currentIndex].number;
      document.getElementById("project-title").textContent = projects[currentIndex].title;
      document.getElementById("project-description").textContent = projects[currentIndex].description;
      document.getElementById("project-tech").textContent = projects[currentIndex].tech;
      document.getElementById("project-image").src = projects[currentIndex].image;
    };

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % projects.length;
        updateProject();
      });
    }

    if (prevButton) {
      prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        updateProject();
      });
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (nextButton) nextButton.removeEventListener("click", () => {});
      if (prevButton) prevButton.removeEventListener("click", () => {});
    };
  }, [projects]);


  useEffect(() => {
      // Animate Value Function
      function animateValue(id, start, end, duration) {
        const obj = document.getElementById(id);
        if (!obj) return;
  
        const range = end - start;
        const minTimer = 50;
        const stepTime = Math.abs(Math.floor(duration / range));
        const timer = Math.max(stepTime, minTimer);
        let startTime = new Date().getTime();
        let endTime = startTime + duration;
        let timerId;
  
        function run() {
          const now = new Date().getTime();
          const remaining = Math.max((endTime - now) / duration, 0);
          const value = Math.round(end - remaining * range);
          obj.innerHTML = value;
          if (value === end) {
            clearInterval(timerId);
          }
        }
  
        timerId = setInterval(run, timer);
        run();
      }
  
      // Start Animations
      animateValue("years", 0, 12, 2000);
      animateValue("projects", 0, 26, 2000);
      animateValue("technologies", 0, 8, 2000);
      animateValue("commits", 0, 500, 2000);
  
      // Add Event Listeners
      const menuButton = document.getElementById("menu-button");
      const closeButton = document.getElementById("close-button");
      const overlay = document.getElementById("overlay");
  
      if (menuButton && overlay) {
        menuButton.addEventListener("click", () => {
          overlay.classList.add("active");
          document.body.style.overflow = "hidden";
        });
      }
  
      if (closeButton && overlay) {
        closeButton.addEventListener("click", () => {
          overlay.classList.remove("active");
          document.body.style.overflow = "auto";
        });
      }
  
      // Cleanup Function
      return () => {
        if (menuButton) menuButton.removeEventListener("click", null);
        if (closeButton) closeButton.removeEventListener("click", null);
      };
    }, []);
  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Çalışma</title>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
          
              \n        body {\n        }\n        .spin-slow {\n            animation: spin 3s linear infinite;\n        }\n        @keyframes spin {\n            from {\n                transform: rotate(0deg);\n            }\n            to {\n                transform: rotate(360deg);\n            }\n        }\n        .nav-link {\n            position: relative;\n        }\n        .nav-link.active::after {\n            content: '';\n            position: absolute;\n            width: 100%;\n            height: 2px;\n            background-color: #22c55e; /* Tailwind's green-500 */\n            bottom: -4px;\n            left: 0;\n        }\n        .nav-link:hover {\n            color: #22c55e; /* Tailwind's green-500 */\n        }\n        .mobile-menu {\n            display: none;\n        }\n        @media (max-width: 1024px) {\n            .desktop-menu {\n                display: none;\n            }\n            .mobile-menu {\n                display: block;\n            }\n        }\n        .overlay {\n            display: none;\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: rgba(0, 0, 0, 0.8);\n            z-index: 10;\n            justify-content: center;\n            align-items: center;\n        }\n        .overlay.active {\n            display: flex;\n        }\n        .overlay .close-button {\n            position: absolute;\n            top: 1rem;\n            right: 1rem;\n        }\n    
        `
        }}
      />
      <header className="flex justify-between items-center p-6">
    <div className="text-3xl font-bold">
      Enes
      <span className="text-green-500">.</span>
    </div>
    <nav className="space-x-8 text-lg desktop-menu">
      <a className="nav-link hover:text-green-500" href="/">
        Ana Sayfa
      </a>
      <a className="nav-link hover:text-green-500" href="./Services">
        Hizmetler
      </a>
      <a className="nav-link hover:text-green-500" href="./Resume">
        Öz Geçmiş
      </a>
      <a className="text-green-500 nav-link active" href="./Work">
        Çalışma
      </a>
      <a className="nav-link hover:text-green-500" href="./Contact">
        İletişim
      </a>
      <a className="bg-green-500 text-black px-4 py-2 rounded-full" href="./Contact">
        Beni İşe Al
      </a>
    </nav>
    <div className="mobile-menu">
      <button id="menu-button" className="text-3xl focus:outline-none">
        <i className="fas fa-bars" />
      </button>
    </div>
  </header>
  <div id="overlay" className="overlay">
    <button
      id="close-button"
      className="text-3xl text-white focus:outline-none close-button"
    >
      <i className="fas fa-times" />
    </button>
    <div className="flex flex-col items-center space-y-4">
      <a className="nav-link hover:text-green-500" href="/">
        Ana Sayfa
      </a>
      <a className="nav-link hover:text-green-500" href="/Services">
        Hizmetler
      </a>
      <a className="nav-link hover:text-green-500" href="./Resume">
        Öz Geçmiş
      </a>
      <a className="text-green-500 nav-link active" href="./Work">
        Çalışma
      </a>
      <a className="nav-link hover:text-green-500" href="./Contact">
        İletişim
      </a>
      <a className="bg-green-500 text-black px-4 py-2 rounded-full" href="./Contact">
        Beni İşe Al
      </a>
    </div>
  </div>
      <main className="flex flex-col md:flex-row items-center justify-center p-6">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <div id="project-number" className="text-6xl font-bold text-white">
            01
          </div>
          <h1 id="project-title" className="text-4xl font-bold text-white">
            Frontend Projesi
          </h1>
          <p id="project-description" className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.
          </p>
          <p id="project-tech" className="text-green-500">
            Html 5, Css 3, Javascript
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a className="text-gray-300 hover:text-white text-2xl" href="#">
              <i className="fas fa-arrow-up-right-from-square" />
            </a>
            <a className="text-gray-300 hover:text-white text-2xl" href="#">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col items-center">
          <img
            id="project-image"
            alt="Screenshot of a frontend project showcasing a furniture shop website with various sections and images"
            className="w-3/4 h-auto"
            src="https://storage.googleapis.com/a1aa/image/1xCu1E2M93IPJFj0EweE78ePr4cuMtsBogkBTewYRReNI4LQB.jpg"
          />
          <div className="flex space-x-4 mt-4">
            <button id="prev-button" className="bg-green-500 text-gray-900 p-2 hover:bg-green-600">
              <i className="fas fa-arrow-left" />
            </button>
            <button id="next-button" className="bg-green-500 text-gray-900 p-2 hover:bg-green-600">
              <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
