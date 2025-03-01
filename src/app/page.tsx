import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="fixed w-full bg-background/95 backdrop-blur-md z-50 border-b border-black/[.08] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <a href="#" className="flex items-center group">
              <Image
                src="/wheel.webp"
                alt="Mockazzo Logo"
                width={32}
                height={32}
                className="transition duration-700 ease-in-out group-hover:rotate-180"
              />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Mockazzo
              </span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="relative flex items-center gap-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-indigo-600 after:transition-transform hover:after:scale-x-100"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                Features
              </a>
              <a
                target="_blank"
                href="https://github.com/werlan200/mockazzo"
                className="relative flex items-center gap-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-indigo-600 after:transition-transform hover:after:scale-x-100"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </a>
              <a
                href="https://chromewebstore.google.com/detail/mockazzo/kfigleagfkhlodapdpajkbkbnplimmoj"
                className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition-all bg-indigo-600 rounded-lg group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-violet-600 group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2 0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 019.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 015.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 00-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z" />
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                  Add to Chrome
                </span>
                <span className="relative invisible">Add to Chrome</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero section with full viewport height */}
        <section className="h-[100vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative">
          {/* Full-width background that extends beyond the content container */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Modern mesh gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50"></div>

            {/* Animated blurred circles - positioned relative to viewport */}
            <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl animate-pulse hidden md:block"></div>
            <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-violet-400/20 rounded-full blur-3xl animate-pulse delay-700 hidden md:block"></div>
            <div className="absolute top-[40%] right-[25%] w-48 h-48 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000 hidden md:block"></div>
            <div className="absolute bottom-[30%] left-[20%] w-72 h-72 bg-indigo-300/10 rounded-full blur-3xl animate-pulse delay-500 hidden md:block"></div>
            <div className="absolute top-[60%] left-[70%] w-56 h-56 bg-violet-300/15 rounded-full blur-3xl animate-pulse delay-1500 hidden md:block"></div>

            {/* Simplified mobile background elements */}
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl animate-pulse md:hidden"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-violet-400/20 rounded-full blur-3xl animate-pulse delay-700 md:hidden"></div>

            {/* Grid pattern overlay - simplified on mobile */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.06) 1px, transparent 0)",
                backgroundSize: "clamp(20px, 5vw, 40px) clamp(20px, 5vw, 40px)",
              }}
            ></div>

            {/* Floating elements - hidden on mobile */}
            <div className="absolute top-[15%] left-[8%] animate-float opacity-70 hidden md:block">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z"
                  fill="rgba(99, 102, 241, 0.4)"
                />
              </svg>
            </div>
            <div className="absolute top-[25%] right-[15%] animate-float-delayed opacity-70 hidden md:block">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                  fill="rgba(139, 92, 246, 0.4)"
                />
              </svg>
            </div>
            <div className="absolute bottom-[25%] left-[30%] animate-float-reverse opacity-70 hidden md:block">
              <svg
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
                  fill="rgba(99, 102, 241, 0.4)"
                />
              </svg>
            </div>
            <div className="absolute top-[45%] right-[40%] animate-float opacity-70 hidden md:block">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="rgba(99, 102, 241, 0.3)"
                />
              </svg>
            </div>

            {/* Code-like elements to represent mock server concept */}
            <div className="absolute bottom-[20%] right-[5%] bg-white/80 backdrop-blur-sm p-2 rounded-md shadow-sm border border-indigo-100 transform rotate-6 animate-float-slow hidden md:block">
              <pre className="text-xs text-left text-indigo-600/70">
                <code>{`GET /api/data\n  → 200 OK`}</code>
              </pre>
            </div>
            <div className="absolute top-[30%] left-[5%] bg-white/80 backdrop-blur-sm p-2 rounded-md shadow-sm border border-violet-100 transform -rotate-3 animate-float-slow-delayed hidden md:block">
              <pre className="text-xs text-left text-violet-600/70">
                <code>{`{"status":"success"}`}</code>
              </pre>
            </div>
            <div className="absolute top-[60%] right-[20%] bg-white/80 backdrop-blur-sm p-2 rounded-md shadow-sm border border-indigo-100 transform rotate-2 animate-float-slow hidden md:block">
              <pre className="text-xs text-left text-indigo-600/70">
                <code>{`POST /api/users\n  → 201 Created`}</code>
              </pre>
            </div>
          </div>

          {/* Content container remains centered */}
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="space-y-6">
              <h1 className="relative text-4xl sm:text-5xl font-bold mb-6 overflow-hidden">
                <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in-up">
                  Serverless Mock Server
                </span>
                <span className="hidden sm:block bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in-up delay-[200ms]">
                  for Modern Development
                </span>
              </h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up delay-[400ms]">
                Intercept and mock service requests. Share your collection with
                your team. All possible without an actual server.
              </p>

              <div className="animate-fade-in-up delay-[600ms]">
                <a
                  className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-indigo-600 border-2 border-indigo-600 rounded-lg hover:text-white"
                  href="https://chromewebstore.google.com/detail/mockazzo/kfigleagfkhlodapdpajkbkbnplimmoj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="relative flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2 0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 019.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 015.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 00-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z" />
                    </svg>
                    Add to Chrome
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Subtle scroll indicator */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center animate-pulse">
            <a
              href="#features"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/40 hover:bg-white/60 transition-all duration-300"
            >
              <svg
                className="w-4 h-4 text-indigo-600/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </a>
          </div>
        </section>

        {/* Features section completely separate from hero */}
        <section
          id="features"
          className="relative py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-[calc(100%-2rem)] bg-white border-t border-indigo-100"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Why Choose Mockazzo?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "100% Free",
                description:
                  "No hidden costs or premium features. Everything is available for free.",
                icon: (
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "No Server Required",
                description:
                  "Works completely client-side without the need for a backend server.",
                icon: (
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Team Sharing",
                description:
                  "Easily share your mock collections with your team members.",
                icon: (
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Clean Codebase",
                description:
                  "No TODOs or mocks in your codebase. Keep it clean and organized.",
                icon: (
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Easy to Use",
                description:
                  "Simple interface for creating and managing mock responses.",
                icon: (
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
              {
                title: "No Package Management",
                description:
                  "No need to manage additional dependencies in your project.",
                icon: (
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-background/50 p-6 rounded-lg border border-black/[.08] transition-all duration-300 hover:border-indigo-600/50 hover:shadow-[0_0_15px_rgba(79,70,229,0.1)] hover:-translate-y-1"
              >
                <div className="flex flex-col items-start">
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative border-t border-indigo-100 bg-gradient-to-b from-white to-indigo-50/30 pt-8 pb-6 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-violet-400/5 rounded-full blur-3xl"></div>
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.2) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Footer content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Brand column */}
            <div className="flex flex-col items-center md:items-start">
              <a href="#" className="flex items-center group mb-4">
                <Image
                  src="/wheel.webp"
                  alt="Mockazzo Logo"
                  width={28}
                  height={28}
                  className="transition duration-700 ease-in-out group-hover:rotate-180"
                />
                <span className="ml-2 text-lg font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Mockazzo
                </span>
              </a>
              <p className="text-sm text-gray-600 max-w-md text-center md:text-left mb-4">
                Intercept and mock service requests without an actual server.
                The perfect tool for modern development.
              </p>
            </div>

            {/* Right side with GitHub and attribution */}
            <div className="flex flex-col items-center md:items-end gap-4">
              <a
                href="https://github.com/werlan200/mockazzo"
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm">View on GitHub</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <p className="text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Mockazzo. All rights reserved.
              </p>
              <a
                href="https://github.com/werlan200"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                <span className="text-xs text-gray-500 flex items-center">
                  Created by <span className="mx-1">🧙</span>
                </span>
                <span className="text-indigo-600 font-medium">@werlan200</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
