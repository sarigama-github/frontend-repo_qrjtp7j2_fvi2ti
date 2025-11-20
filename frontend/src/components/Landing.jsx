import React from 'react';

const Landing = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-red-600 via-red-500 to-orange-400 text-white flex flex-col items-center relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-black/10 blur-3xl" />

      <header className="w-full max-w-sm px-5 pt-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center font-bold">Z</div>
          <span className="text-xl font-semibold tracking-wide">Zomato-ish</span>
        </div>
        <button
          onClick={onGetStarted}
          className="text-sm px-3 py-1.5 rounded-full bg-white text-red-600 font-semibold active:scale-95 transition"
        >
          Sign in
        </button>
      </header>

      <main className="flex-1 w-full max-w-sm px-5 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-extrabold leading-tight drop-shadow-md">
          Discover the best food and drinks in your city
        </h1>
        <p className="mt-3 text-white/90">
          Explore top restaurants, cafes and bars near you. Curated picks, instant search, and smooth ordering.
        </p>
        <div className="mt-10 w-full">
          <button
            onClick={onGetStarted}
            className="w-full py-4 rounded-2xl bg-black/80 text-white font-semibold shadow-lg shadow-black/20 active:scale-[0.98] transition transform"
          >
            Get Started
          </button>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 w-full">
          {["Pizza","Biryani","Burgers"].map((item, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-white/15 backdrop-blur border border-white/10">
              <div className="text-sm font-semibold">{item}</div>
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full max-w-sm px-5 pb-8 text-xs text-white/80">
        For demo purposes only. Not affiliated with Zomato.
      </footer>
    </div>
  );
};

export default Landing;
