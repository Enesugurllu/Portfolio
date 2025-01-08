"use client";
import React, { useEffect } from "react";

const Page = () => {
    function showSection(section) {
        document.getElementById('experience').classList.add('hidden');
        document.getElementById('education').classList.add('hidden');
        document.getElementById('skills').classList.add('hidden');
        document.getElementById('about').classList.add('hidden');
        document.getElementById(section).classList.remove('hidden');

        document.getElementById('btn-experience').classList.remove('bg-green-500', 'text-black');
        document.getElementById('btn-education').classList.remove('bg-green-500', 'text-black');
        document.getElementById('btn-skills').classList.remove('bg-green-500', 'text-black');
        document.getElementById('btn-about').classList.remove('bg-green-500', 'text-black');

        document.getElementById('btn-experience').classList.add('bg-gray-800', 'text-white');
        document.getElementById('btn-education').classList.add('bg-gray-800', 'text-white');
        document.getElementById('btn-skills').classList.add('bg-gray-800', 'text-white');
        document.getElementById('btn-about').classList.add('bg-gray-800', 'text-white');

        document.getElementById('btn-' + section).classList.add('bg-green-500', 'text-black');
    }

    useEffect(() => {
        // Sayfa yüklendiğinde varsayılan olarak "experience" bölümünü göster
        showSection('experience');
    }, []);


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
            <title>Öz Geçmiş</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        body {\n        }\n        .hidden {\n            display: none;\n        }\n    \n        body {\n        }\n        .spin-slow {\n            animation: spin 3s linear infinite;\n        }\n        @keyframes spin {\n            from {\n                transform: rotate(0deg);\n            }\n            to {\n                transform: rotate(360deg);\n            }\n        }\n        .nav-link {\n            position: relative;\n        }\n        .nav-link.active::after {\n            content: '';\n            position: absolute;\n            width: 100%;\n            height: 2px;\n            background-color: #22c55e; /* Tailwind's green-500 */\n            bottom: -4px;\n            left: 0;\n        }\n        .nav-link:hover {\n            color: #22c55e; /* Tailwind's green-500 */\n        }\n        .mobile-menu {\n            display: none;\n        }\n        @media (max-width: 1024px) {\n            .desktop-menu {\n                display: none;\n            }\n            .mobile-menu {\n                display: block;\n            }\n        }\n        .overlay {\n            display: none;\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: rgba(0, 0, 0, 0.8);\n            z-index: 10;\n            justify-content: center;\n            align-items: center;\n        }\n        .overlay.active {\n            display: flex;\n        }\n        .overlay .close-button {\n            position: absolute;\n            top: 1rem;\n            right: 1rem;\n        }\n    "
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
      <a className="text-green-500 nav-link active" href="/Resume">
        Öz Geçmiş
      </a>
      <a className="nav-link hover:text-green-500" href="/Work">
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
      <a className="nav-link hover:text-green-500" href="/Services">
        Hizmetler
      </a>
      <a className="text-green-500 nav-link active" href="/Resume">
        Öz Geçmiş
      </a>
      <a className="nav-link hover:text-green-500" href="/Work">
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
            <main className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 flex flex-col items-center md:items-start">
                        <h2 className="text-4xl font-bold mb-4 text-center md:text-left">
                        Neden beni işe almalısınız?
                        </h2>
                        <p className="mb-6 text-center md:text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className="space-y-4 w-full flex flex-col items-center md:items-start">
                            <button
                                id="btn-experience"
                                className="w-3/4 bg-green-500 text-black py-2 rounded-lg"
                                onClick={() => showSection('experience')}
                            >
                                Deneyim
                            </button>
                            <button
                                id="btn-education"
                                className="w-3/4 bg-gray-800 py-2 rounded-lg"
                                onClick ={() => showSection('education')}
                            >
                                Eğitim
                            </button>
                            <button
                                id="btn-skills"
                                className="w-3/4 bg-gray-800 py-2 rounded-lg"
                                onClick={() => showSection('skills')}
                            >
                                Özellikler
                            </button>
                            <button
                                id="btn-about"
                                className="w-3/4 bg-gray-800 py-2 rounded-lg"
                                onClick={() => showSection('about')}
                            >
                                Hakkımda
                            </button>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <div id="experience">
                            <h2 className="text-4xl font-bold mb-4">Deneyimim</h2>
                            <p className="mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
                                consequat, faucibus et, et.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-800 p-6 rounded-lg h-48 overflow-hidden">
                                    <h3 className="text-green-500">2025 - Günümüz</h3>
                                    <h4 className="text-xl font-bold">Tam Yığın Geliştirici</h4>
                                    <p>Teknoloji Çözümleri A.Ş.</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg h-48 overflow-hidden">
                                    <h3 className="text-green-500">Yaz 2024</h3>
                                    <h4 className="text-xl font-bold">Ön Uç Geliştirici Stajyeri</h4>
                                    <p>Web Tasarım Stüdyosu</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg h-48 overflow-hidden">
                                    <h3 className="text-green-500">2020 - 2021</h3>
                                    <h4 className="text-xl font-bold">Serbest Web Geliştiricisi</h4>
                                    <p>E-Ticaret Girişimi</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg h-48 overflow-hidden">
                                    <h3 className="text-green-500">2019 - 2020</h3>
                                    <h4 className="text-xl font-bold">Öğretim Asistanı</h4>
                                    <p>Teknoloji Akademisi</p>
                                </div>
                            </div>
                        </div>
                        <div id="education" className="hidden">
                            <h2 className="text-4xl font-bold mb-4">Eğitimim</h2>
                            <p className="mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
                                consequat, faucibus et, et.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-800 p-6 rounded-lg h-48 overflow-hidden">
                                    <h3 className="text-green-500">2024 - 2025</h3>
                                    <h4 className="text-xl font-bold">
                                    Lise Staj
                                    </h4>
                                    <p>Staj</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg h-48 overflow-hidden">
                                    <h3 className="text-green-500">2021 - 2025</h3>
                                    <h4 className="text-xl font-bold">
                                    Lise
                                    </h4>
                                    <p>Lise</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg h-48 overflow-hidden">
                                    <h3 className="text-green-500">2016 - 2021</h3>
                                    <h4 className="text-xl font-bold">Ortaokul</h4>
                                    <p>Ortaokul</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg h-48 overflow-hidden">
                                    <h3 className="text-green-500">2012 - 2016</h3>
                                    <h4 className="text-xl font-bold">İlkokul</h4>
                                    <p>İlkokul</p>
                                </div>
                            </div>
                        </div>
                        <div id="skills" className="hidden">
                            <h2 className="text-4xl font-bold mb-4">Özelliklerim</h2>
                            <p className="mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-800 p-6 rounded-lg h-48 overflow-hidden">
                                    <h4 className="text-xl font-bold">Programlama Dilleri</h4>
                                    <p>JavaScript, Python, Java, C++</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg h-48 overflow-hidden">
                                    <h4 className="text-xl font-bold">Web Teknolojileri</h4>
                                    <p>HTML, CSS, React, Node.js</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg h-48 overflow-hidden">
                                    <h4 className="text-xl font-bold">Veritabanları</h4>
                                    <p>MySQL, PHPAdmin</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg h-48 overflow-hidden">
                                    <h4 className="text-xl font-bold">Araçlar ve Platformlar</h4>
                                    <p>Git, Docker, AWS</p>
                                </div>
                            </div>
                        </div>
                        <div id="about" className="hidden">
                            <h2 className="text-4xl font-bold mb-4">Hakkımda</h2>
                            <p className="mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
                                consequat, faucibus et, et.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-800 p-6 rounded-lg h-48 overflow-hidden">
                                    <h4 className="text-xl font-bold">Kişisel Beyan</h4>
                                    <p>
                                    Yenilikçi çözümler yaratmayı seven tutkulu bir geliştiriciyim. 
                                    Hem ön uç hem de arka uç geliştirmede güçlü bir geçmişe sahip olarak, 
                                    kusursuz ve verimli uygulamalar oluşturmaya adanmış durumdayım.
                                    </p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg h-48 overflow-hidden">
                                    <h4 className="text-xl font-bold">Hobiler</h4>
                                    <p>Futbol, Seyahat, Kodlama, Müzik</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg h-48 overflow-hidden">
                                    <h4 className="text-xl font-bold">Diller</h4>
                                    <p>Türkçe, İngilizce, Arapça</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg h-48 overflow-hidden">
                                    <h4 className="text-xl font-bold">Gönüllü Çalışma</h4>
                                    <p>Toplum Hizmeti, Çocuklara Kodlama Öğretmek</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Page;