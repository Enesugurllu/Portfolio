"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    function animateValue(id, start, end, duration) {
      const obj = document.getElementById(id);
      const range = end - start;
      const minTimer = 50;
      const stepTime = Math.abs(Math.floor(duration / range));
      const startTime = new Date().getTime();
      const endTime = startTime + duration;
      let timer;

      function run() {
        const now = new Date().getTime();
        const remaining = Math.max((endTime - now) / duration, 0);
        const value = Math.round(end - remaining * range);
        obj.innerHTML = value;
        if (value === end) {
          clearInterval(timer); 
        }
      }

      timer = setInterval(run, stepTime);
      run();
    }

    // Call animateValue on page load
    animateValue("years", 0, 12, 2000);
    animateValue("projects", 0, 26, 2000);
    animateValue("technologies", 0, 8, 2000);
    animateValue("commits", 0, 500, 2000);

    // Mobile menu toggle logic
    const menuButton = document.getElementById("menu-btn");
    menuButton.addEventListener("click", () => {
      const menu = document.getElementById("mobile-menu");
      menu.classList.toggle("hidden");
    });

    // Cleanup the event listener when the component unmounts
    return () => {
      menuButton.removeEventListener("click", () => {
        const menu = document.getElementById("mobile-menu");
        menu.classList.toggle("hidden");
      });
    };
  }, []);

  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Luke Coleman</title>
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
          __html: `
            body {
                font-family: 'Roboto', sans-serif;
                background-color: #0d0d0d;
                color: #ffffff;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            .spin {
                animation: spin 10s linear infinite;
            }
            .dashed-border {
                border-style: dashed;
                border-width: 4px;
                border-color: #22c55e;
                border-radius: 50%;
                border-spacing: 20px;
            }
          `,
        }}
      />
      <header className="flex justify-between items-center p-6 mx-4 md:mx-16">
        <div className="text-3xl font-bold text-white ">
          Luke
          <span className="text-green-500">.</span>
        </div>
        <nav className="hidden md:flex flex-1 justify-end space-x-8 mr-8">
          <a className="text-green-500" href="#">
            Home
          </a>
          <a className="hover:text-green-500" href="#">
            Services
          </a>
          <a className="hover:text-green-500" href="#">
            Resume
          </a>
          <a className="hover:text-green-500" href="#">
            Work
          </a>
          <a className="hover:text-green-500" href="#">
            Contact
          </a>
        </nav>
        <a
          className="hidden md:block bg-green-500 text-black px-4 py-2 rounded-full"
          href="#"
        >
          Hire me
        </a>
        <div className="md:hidden">
          <button id="menu-btn" className="text-white focus:outline-none">
            <i className="fas fa-bars fa-2x" />
          </button>
        </div>
      </header>
      <div id="mobile-menu" className="hidden md:hidden">
        <nav className="flex flex-col items-center space-y-4 mt-4">
          <a className="text-green-500" href="#">
            Home
          </a>
          <a className="hover:text-green-500" href="#">
            Services
          </a>
          <a className="hover:text-green-500" href="#">
            Resume
          </a>
          <a className="hover:text-green-500" href="#">
            Work
          </a>
          <a className="hover:text-green-500" href="#">
            Contact
          </a>
          <a className="bg-green-500 text-black px-4 py-2 rounded-full" href="#">
            Hire me
          </a>
        </nav>
      </div>
      <main className="flex flex-col md:flex-row items-center text-center md:text-left mt-10 px-4 md:px-16">
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <div className="text-sm uppercase tracking-widest">
            Software Developer
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mt-4">
            Hello I m
            <span className="text-green-500"> Luke Coleman</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl">
            I excel at crafting elegant digital experiences and I am proficient in
            various programming languages and technologies.
          </p>
          <div className="flex items-center mt-8 space-x-4">
            <a
              className="bg-transparent border border-green-500 text-green-500 px-6 py-3 rounded-full inline-flex items-center"
              href="#"
            >
              Download CV
              <i className="fas fa-download ml-2"></i>
            </a>
            <div className="flex space-x-4">
              <a className="text-green-500" href="#">
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a className="text-green-500" href="#">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a className="text-green-500" href="#">
                <i className="fab fa-youtube fa-2x"></i>
              </a>
              <a className="text-green-500" href="#">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:w-1/2 flex justify-center md:justify-end relative ">
          <div className="w-80 h-80 border-4 border-green-500 rounded-full spin dashed-border absolute flex justify-center items-center"></div>
          <img
            alt="Portrait of Luke Coleman"
            className="rounded-full relative z-S10 mt-2 mr-2"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/rBWFJlfUD0RQGirJsDozgL12xzXrhk0ZsWuIRUMFCOkejJzTA.jpg"
            width={300}
          />
        </div>
      </main>
      <footer className="mt-20 mb-10 mx-4 md:mx-16">
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16">
          <div className="text-center">
            <div className="text-4xl font-bold" id="years">
              0
            </div>
            <div className="text-gray-400">Years of experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold" id="projects">
              0
            </div>
            <div className="text-gray-400">Projects completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold" id="technologies">
              0
            </div>
            <div className="text-gray-400">Technologies mastered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold" id="commits">
              0
            </div>
            <div className="text-gray-400">Code commits</div>
          </div>
        </div>
      </footer>
    </>
  );
}
