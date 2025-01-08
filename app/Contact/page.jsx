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
  <title>İletişim</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            background-color: #0d0d0d;\n            color: #ffffff;\n        }\n    \n        body {\n        }\n        .spin-slow {\n            animation: spin 3s linear infinite;\n        }\n        @keyframes spin {\n            from {\n                transform: rotate(0deg);\n            }\n            to {\n                transform: rotate(360deg);\n            }\n        }\n        .nav-link {\n            position: relative;\n        }\n        .nav-link.active::after {\n            content: '';\n            position: absolute;\n            width: 100%;\n            height: 2px;\n            background-color: #22c55e; /* Tailwind's green-500 */\n            bottom: -4px;\n            left: 0;\n        }\n        .nav-link:hover {\n            color: #22c55e; /* Tailwind's green-500 */\n        }\n        .mobile-menu {\n            display: none;\n        }\n        @media (max-width: 1024px) {\n            .desktop-menu {\n                display: none;\n            }\n            .mobile-menu {\n                display: block;\n            }\n        }\n        .overlay {\n            display: none;\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: rgba(0, 0, 0, 0.8);\n            z-index: 10;\n            justify-content: center;\n            align-items: center;\n        }\n        .overlay.active {\n            display: flex;\n        }\n        .overlay .close-button {\n            position: absolute;\n            top: 1rem;\n            right: 1rem;\n        }\n    "
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
      <a className="nav-link hover:text-green-500" href="/Resume">
        Öz Geçmiş
      </a>
      <a className="nav-link hover:text-green-500" href="/Work">
        Çalışma
      </a>
      <a className="text-green-500 nav-link active" href="/Contact">
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
      <a className="nav-link hover:text-green-500" href="/Services">
        Hizmetler
      </a>
      <a className="nav-link hover:text-green-500" href="/Resume">
        Öz Geçmiş
      </a>
      <a className="nav-link hover:text-green-500" href="/Work">
        Çalışma
      </a>
      <a className="text-green-500 nav-link active" href="/Contact">
        İletişim
      </a>
      <a className="bg-green-500 text-black px-4 py-2 rounded-full" href="/Contact">
        Beni İşe Al
      </a>
    </div>
  </div>
  <main className="flex flex-col md:flex-row items-center justify-center w-full p-6">
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full md:w-2/5 mb-8 md:mb-0 md:mr-8">
      <h2 className="text-2xl text-green-500 mb-4">Birlikte çalışalım</h2>
      <p className="text-gray-400 mb-6">
        Bizimle iletişime geçmek için lütfen alt kısmıdaki kutucukları doğru bir şekilde doldurunuz.
      </p>
      <form className="space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Ad"
            className="w-1/2 p-2 bg-gray-800 text-white rounded"
          />
          <input
            type="text"
            placeholder="Soyad"
            className="w-1/2 p-2 bg-gray-800 text-white rounded"
          />
        </div>
        <div className="flex space-x-4">
          <input
            type="email"
            placeholder="Email Adresi"
            className="w-1/2 p-2 bg-gray-800 text-white rounded"
          />
          <input
            type="text"
            placeholder="Telefon Numarası"
            className="w-1/2 p-2 bg-gray-800 text-white rounded"
          />
        </div>
        <select className="w-full p-2 bg-gray-800 text-white rounded">
          <option>Bir Servis Seçin</option>
          <option>Web Geliştirme</option>
          <option>UI/UX Tasarımı</option>
          <option>Logo Tasarımı</option>
        </select>
        <textarea
          placeholder="Mesajınızı Yazınız..."
          className="w-full p-2 bg-gray-800 text-white rounded h-32"
          defaultValue={""}
        />
        <button
          type="submit"
          className="w-full p-2 bg-green-500 text-black rounded hover:bg-green-600"
        >
          Mesajı Gönder
        </button>
      </form>
    </div>
    <div className="space-y-4 text-gray-400">
      <div className="flex items-center space-x-4">
        <i className="fas fa-phone-alt text-green-500" />
        <div>
          <p>Telefon</p>
          <p className="text-white">(+90) 555 555 55 55</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <i className="fas fa-envelope text-green-500" />
        <div>
          <p>Email</p>
          <p className="text-white">youremail@email.com</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <i className="fas fa-map-marker-alt text-green-500" />
        <div>
          <p>Adres</p>
          <p className="text-white">MSE Teknoloji</p>
        </div>
      </div>
    </div>
  </main>
</>

  )
}

export default page
