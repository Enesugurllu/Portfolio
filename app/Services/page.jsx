"use client";
import React, { useEffect } from "react";

const page = () => {
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
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hizmetler</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n        }\n        .service-box:hover .number, .service-box:hover .title {\n            color: #10B981; /* Tailwind's green-500 */\n        }\n        .arrow-box:hover .arrow {\n            background-color: #10B981; /* Tailwind's green-500 */\n            color: #fff;\n            transform: rotate(0deg);\n        }\n        .arrow {\n            transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;\n        }\n    \n        body {\n        }\n        .spin-slow {\n            animation: spin 3s linear infinite;\n        }\n        @keyframes spin {\n            from {\n                transform: rotate(0deg);\n            }\n            to {\n                transform: rotate(360deg);\n            }\n        }\n        .nav-link {\n            position: relative;\n        }\n        .nav-link.active::after {\n            content: '';\n            position: absolute;\n            width: 100%;\n            height: 2px;\n            background-color: #22c55e; /* Tailwind's green-500 */\n            bottom: -4px;\n            left: 0;\n        }\n        .nav-link:hover {\n            color: #22c55e; /* Tailwind's green-500 */\n        }\n        .mobile-menu {\n            display: none;\n        }\n        @media (max-width: 1024px) {\n            .desktop-menu {\n                display: none;\n            }\n            .mobile-menu {\n                display: block;\n            }\n        }\n        .overlay {\n            display: none;\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: rgba(0, 0, 0, 0.8);\n            z-index: 10;\n            justify-content: center;\n            align-items: center;\n        }\n        .overlay.active {\n            display: flex;\n        }\n        .overlay .close-button {\n            position: absolute;\n            top: 1rem;\n            right: 1rem;\n        }\n    "
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
      <a className="text-green-500 nav-link active" href="./Services">
        Hizmetler
      </a>
      <a className="nav-link hover:text-green-500" href="./Resume">
        Öz Geçmiş
      </a>
      <a className="nav-link hover:text-green-500" href="./Work">
        Çalışma
      </a>
      <a className="nav-link hover:text-green-500" href="/Contact">
        İletişim
      </a>
      <a className="bg-green-500 text-black px-4 py-2 rounded-full" href="/Contact">
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
      <a className="text-green-500 nav-link active" href="./Services">
        Hizmetler
      </a>
      <a className="nav-link hover:text-green-500" href="./Resume">
        Öz Geçmiş
      </a>
      <a className="nav-link hover:text-green-500" href="./Work">
        Çalışma
      </a>
      <a className="nav-link hover:text-green-500" href="/Contact">
        İletişim
      </a>
      <a className="bg-green-500 text-black px-4 py-2 rounded-full" href="/Contact">
        Beni İşe Al
      </a>
    </div>
  </div>
  <main className="p-6 flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
      <div className="relative flex flex-col space-y-6 p-8 bg-gray-800 rounded-lg service-box">
        <div className="text-5xl font-bold text-gray-500 number">01</div>
        <div>
          <h2 className="text-3xl font-bold title">Web Geliştirme</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            consequat, faucibus et, et.
          </p>
        </div>
        <div className="absolute top-4 right-4 arrow-box">
          <i className="fas fa-arrow-right text-2xl text-gray-900 bg-white p-4 rounded-full transform rotate-45 arrow" />
        </div>
      </div>
      <div className="relative flex flex-col space-y-6 p-8 bg-gray-800 rounded-lg service-box">
        <div className="text-5xl font-bold text-gray-500 number">02</div>
        <div>
          <h2 className="text-3xl font-bold title">UI/UX Tasarımı</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            consequat, faucibus et, et.
          </p>
        </div>
        <div className="absolute top-4 right-4 arrow-box">
          <i className="fas fa-arrow-right text-2xl text-gray-900 bg-white p-4 rounded-full transform rotate-45 arrow" />
        </div>
      </div>
      <div className="relative flex flex-col space-y-6 p-8 bg-gray-800 rounded-lg service-box">
        <div className="text-5xl font-bold text-gray-500 number">03</div>
        <div>
          <h2 className="text-3xl font-bold title">Logo Tasarımı</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            consequat, faucibus et, et.
          </p>
        </div>
        <div className="absolute top-4 right-4 arrow-box">
          <i className="fas fa-arrow-right text-2xl text-gray-900 bg-white p-4 rounded-full transform rotate-45 arrow" />
        </div>
      </div>
      <div className="relative flex flex-col space-y-6 p-8 bg-gray-800 rounded-lg service-box">
        <div className="text-5xl font-bold text-gray-500 number">04</div>
        <div>
          <h2 className="text-3xl font-bold title">SEO</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            consequat, faucibus et, et.
          </p>
        </div>
        <div className="absolute top-4 right-4 arrow-box">
          <i className="fas fa-arrow-right text-2xl text-gray-900 bg-white p-4 rounded-full transform rotate-45 arrow" />
        </div>
      </div>
    </div>
  </main>
</>

  )
}

export default page
