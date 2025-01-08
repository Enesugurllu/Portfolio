"use client";
import React, { useEffect } from "react";

const Page = () => {
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
    animateValue("years", 0, 8, 2000);
    animateValue("projects", 0, 50, 2000);
    animateValue("technologies", 0, 12, 2000);
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
  <title>Ana Sayfa</title>
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
        "\n        body {\n        }\n        .spin-slow {\n            animation: spin 3s linear infinite;\n        }\n        @keyframes spin {\n            from {\n                transform: rotate(0deg);\n            }\n            to {\n                transform: rotate(360deg);\n            }\n        }\n        .nav-link {\n            position: relative;\n        }\n        .nav-link.active::after {\n            content: '';\n            position: absolute;\n            width: 100%;\n            height: 2px;\n            background-color: #22c55e; /* Tailwind's green-500 */\n            bottom: -4px;\n            left: 0;\n        }\n        .nav-link:hover {\n            color: #22c55e; /* Tailwind's green-500 */\n        }\n        .mobile-menu {\n            display: none;\n        }\n        @media (max-width: 1024px) {\n            .desktop-menu {\n                display: none;\n            }\n            .mobile-menu {\n                display: block;\n            }\n        }\n        .overlay {\n            display: none;\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: rgba(0, 0, 0, 0.8);\n            z-index: 10;\n            justify-content: center;\n            align-items: center;\n        }\n        .overlay.active {\n            display: flex;\n        }\n        .overlay .close-button {\n            position: absolute;\n            top: 1rem;\n            right: 1rem;\n        }\n    "
    }}
  />
  <header className="flex justify-between items-center p-6">
    <div className="text-3xl font-bold">
      Enes
      <span className="text-green-500">.</span>
    </div>
    <nav className="space-x-8 text-lg desktop-menu">
      <a className="text-green-500 nav-link active" href="/">
        Ana Sayfa
      </a>
      <a className="nav-link hover:text-green-500" href="./Services">
        Hizmetler
      </a>
      <a className="nav-link hover:text-green-500" href="./Resume">
        Öz Geçmiş
      </a>
      <a className="nav-link hover:text-green-500" href="./Work">
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
      <a className="text-green-500 nav-link active" href="/">
        Ana Sayfa
      </a>
      <a className="nav-link hover:text-green-500" href="/Services">
        Hizmetler
      </a>
      <a className="nav-link hover:text-green-500" href="./Resume">
        Öz Geçmiş
      </a>
      <a className="nav-link hover:text-green-500" href="./Work">
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
  <main className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between text-left mt-16 px-6 lg:px-24">
    <div className="lg:w-1/2 text-center lg:text-left">
      <p className="text-lg">Yazılım Geliştiricisi</p>
      <h1 className="text-6xl font-bold mt-4">Merhaba Ben</h1>
      <h1 className="text-6xl font-bold mt-2 text-green-500">Enes Uğurlu</h1>
      <p className="text-gray-400 mt-4 max-w-xl mx-auto lg:mx-0">
      Zarif dijital deneyimler oluşturmada üst düzeydeyim ve çeşitli programlama dilleri ve teknolojilerinde yetkinim.
      </p>
      <div className="flex items-center justify-center lg:justify-start space-x-4 mt-8">
        <button className="bg-transparent border border-green-500 text-green-500 px-6 py-2 rounded-full flex items-center space-x-2">
          <span>CV'yi İndir</span>
          <i className="fas fa-download" />
        </button>
        <div className="flex space-x-4">
          <a className="text-green-500" href="#">
            <i className="fab fa-github fa-2x" />
          </a>
          <a className="text-green-500" href="#">
            <i className="fab fa-instagram fa-2x" />
          </a>
          <a className="text-green-500" href="#">
            <i className="fab fa-youtube fa-2x" />
          </a>
          <a className="text-green-500" href="#">
            <i className="fab fa-facebook fa-2x" />
          </a>
        </div>
      </div>
    </div>
    <div className="relative mt-16 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
      <div className="relative w-80 h-80">
        <div className="absolute inset-0 border-4 border-green-500 rounded-full spin-slow" />
        <img
          alt="Portrait of Luke Coleman"
          className="rounded-full w-full h-full object-cover"
          height={400}
          src="https://storage.googleapis.com/a1aa/image/8TAYJaUwagpGOlQU0j1Wiypj8U1XV9JnCJm0PI9YzlBqlPAF.jpg"
          width={400}
        />
      </div>
    </div>
  </main>
  <div className="flex flex-col lg:flex-row justify-center lg:justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 mt-16 px-6 lg:px-24">
    <div className="text-center">
      <p className="text-4xl font-bold" id="years">
        0
      </p>
      <p className="text-gray-400 text-lg">Yılların Deneyimi</p>
    </div>
    <div className="text-center">
      <p className="text-4xl font-bold" id="projects">
        0
      </p>
      <p className="text-gray-400 text-lg">Tamamlanan Projeler</p>
    </div>
    <div className="text-center">
      <p className="text-4xl font-bold" id="technologies">
        0
      </p>
      <p className="text-gray-400 text-lg">Teknolojiler Ustalaştı</p>
    </div>
    <div className="text-center">
      <p className="text-4xl font-bold" id="commits">
        0
      </p>
      <p className="text-gray-400 text-lg">Teknolojiler Ustalaştı</p>
    </div>
  </div>
</>

  )
}

export default Page;
