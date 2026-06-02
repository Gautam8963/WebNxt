import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Menu,
  Play,
  Search,
  Star,
  Ticket,
  X,
} from "lucide-react";
import { useState } from "react";

const asset = (file) => `/assets/${file}`;

const navItems = ["Home", "Movies", "Theatres", "Releases"];

const movies = [
  {
    title: "Alita Battle Angel 4k 2019 Movies",
    meta: "2019 - Action, Adventure - 2h 8m",
    image: "wp4926059 1.png",
  },
  {
    title: "Alita Battle Angel 4k 2019 Movies",
    meta: "2019 - Action, Adventure - 2h 8m",
    image: "wp4280803 1.png",
  },
  {
    title: "Alita Battle Angel 4k 2019 Movies",
    meta: "2019 - Action, Adventure - 2h 8m",
    image: "wp4926059 3.png",
  },
  {
    title: "Alita Battle Angel 4k 2019 Movies",
    meta: "2019 - Action, Adventure - 2h 8m",
    image: "wp9049770 1.png",
  },
  {
    title: "Alita Battle Angel 4k 2019 Movies",
    meta: "2019 - Action, Adventure - 2h 8m",
    image: "wp9049779 1.png",
  },
  {
    title: "Alita Battle Angel 4k 2019 Movies",
    meta: "2019 - Action, Adventure - 2h 8m",
    image: "wp4926059 1.png",
  },
  {
    title: "Alita Battle Angel 4k 2019 Movies",
    meta: "2019 - Action, Adventure - 2h 8m",
    image: "wp4280803 1.png",
  },
  {
    title: "Alita Battle Angel 4k 2019 Movies",
    meta: "2019 - Action, Adventure - 2h 8m",
    image: "wp4926059 3.png",
  },
];

const trailers = [
  "wp4926059 1.png",
  "wp7653796 1.png",
  "wp9049807 1.png", 
  "wp9049781 1.png",
  "wp9049788 1.png", 
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#030406]/25 backdrop-blur-md">
      <div className="site-container flex h-16 items-center justify-between">
        <a href="#home" aria-label="QuickShow home" className="focus-ring rounded">
          <img src={asset("icon.png")} alt="QuickShow" className="h-[27px] w-[145px]" />
        </a>

        <nav className="hidden rounded-full border border-white/5 bg-white/10 px-2 py-1.5 text-[11px] font-medium text-white/85 shadow-lg shadow-black/20 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="focus-ring rounded-full px-5 py-2 transition hover:bg-white/10 hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <button aria-label="Search" className="focus-ring rounded-full p-2 text-white/90 transition hover:bg-white/10">
            <Search size={18} strokeWidth={2} />
          </button>
          <a
            href="#login"
            className="focus-ring rounded-full bg-[#ff3f68] px-6 py-2.5 text-[11px] font-bold text-white shadow-glow transition hover:bg-[#ff5579]"
          >
            Log In
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring rounded-full bg-white/10 p-2 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#07080b]/95 md:hidden">
          <div className="site-container flex flex-col py-4 text-sm">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="focus-ring rounded px-2 py-3 text-white/85"
              >
                {item}
              </a>
            ))}
            <a
              href="#login"
              onClick={() => setOpen(false)}
              className="focus-ring mt-3 rounded-full bg-[#ff3f68] px-5 py-3 text-center text-sm font-bold"
            >
              Log In
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[620px] overflow-hidden bg-cover bg-center sm:min-h-[690px] lg:min-h-[715px]"
      style={{ backgroundImage: `url("${asset("hero-guardians.png")}")` }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,4,6,0.92)_0%,rgba(3,4,6,0.6)_38%,rgba(3,4,6,0.2)_70%),linear-gradient(0deg,#030406_0%,rgba(3,4,6,0.12)_36%)]" />
      <div className="site-container relative z-10 flex min-h-[620px] items-center pt-20 sm:min-h-[690px] lg:min-h-[715px]">
        <div className="max-w-[390px] pt-14">
          <img src={asset("marvelLogo.svg")} alt="Marvel Studios" className="mb-5 h-auto w-36 sm:w-40" />
          <h1 className="text-[44px] font-black leading-[1.05] tracking-normal text-white sm:text-[58px]">
            Guardians of the Galaxy
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-[12px] font-medium text-white/75">
            <span>Action | Adventure | Sci-Fi</span>
            <span className="flex items-center gap-1.5">
              <CalendarDays size={14} /> 2018
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 size={14} /> 2h 8m
            </span>
          </div>
          <p className="mt-5 text-sm leading-6 text-white/72">
            In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.
          </p>
          <a
            href="#movies"
            className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff3f68] px-6 py-3 text-[12px] font-bold text-white shadow-glow transition hover:bg-[#ff5579]"
          >
            Explore Movies <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

function MovieCard({ movie }) {
  return (
    <article className="rounded-lg bg-[#121821] p-2.5 shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#17202c]">
      <img src={asset(movie.image)} alt={movie.title} className="aspect-[243/161] w-full rounded-md object-cover" />
      <div className="px-1.5 pb-1 pt-3">
        <h3 className="line-clamp-2 min-h-[34px] text-[12px] font-bold leading-[1.35] text-white">
          {movie.title}
        </h3>
        <p className="mt-1.5 truncate text-[10px] font-medium text-white/45">{movie.meta}</p>
        <div className="mt-4 flex items-center justify-between">
          <button className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-[#ff3f68] px-3.5 py-2 text-[10px] font-bold text-white transition hover:bg-[#ff5579]">
            <Ticket size={12} /> Buy Ticket
          </button>
          <span className="flex items-center gap-1 text-[11px] font-semibold text-white/55">
            <Star size={12} className="fill-[#ff3f68] text-[#ff3f68]" /> 4.5
          </span>
        </div>
      </div>
    </article>
  );
}

function MoviesSection() {
  return (
    <section id="movies" className="site-container py-16 sm:py-20">
      <div className="mb-7 flex items-center justify-between">
        <h2 className="text-base font-bold text-white">Now Showing</h2>
        <a
          href="#releases"
          className="focus-ring inline-flex items-center gap-1 rounded-full px-3 py-2 text-[11px] font-semibold text-white/65 transition hover:bg-white/5 hover:text-white"
        >
          View All <ArrowRight size={13} />
        </a>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {movies.map((movie, index) => (
          <MovieCard key={`${movie.image}-${index}`} movie={movie} />
        ))}
      </div>
      <div className="mt-14 text-center">
        <button className="focus-ring rounded-md bg-[#ff3f68] px-9 py-3 text-[11px] font-bold text-white shadow-glow transition hover:bg-[#ff5579]">
          Show more
        </button>
      </div>
    </section>
  );
}

function TrailersSection() {
  return (
    <section id="releases" className="site-container py-14 sm:py-20">
      <h2 className="mb-7 text-base font-bold text-white">Trailers</h2>
      <div className="mx-auto max-w-[670px]">
        <button
          aria-label="Play featured trailer"
          className="focus-ring group relative block w-full overflow-hidden rounded-lg"
        >
          <img
            src={asset("wp9049747 1.png")}
            alt="Featured Marvel trailer"
            className="aspect-[922/398] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-black/20 transition group-hover:bg-black/10" />
          <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-black/20 text-white shadow-2xl backdrop-blur-sm transition group-hover:scale-110">
            <Play size={24} className="ml-1 fill-white" />
          </span>
        </button>
        <div className="mt-9 grid grid-cols-5 gap-3 sm:gap-5">
          {trailers.map((image, index) => (
            <button
              key={image}
              aria-label={`Trailer ${index + 1}`}
              className="focus-ring group overflow-hidden rounded-md border border-transparent bg-white/5 p-1 transition hover:border-[#ff3f68]"
            >
              <span className="relative block overflow-hidden rounded">
                <img
                  src={asset(image)}
                  alt=""
                  className="aspect-square w-full object-cover transition duration-300 group-hover:scale-110"
                />
                <span className="absolute inset-0 grid place-items-center bg-black/25 opacity-90">
                  {index === 0 ? (
                    <img src={asset("Icon-paus e.png")} alt="" className="h-7 w-7" />
                  ) : (
                    <Play size={16} className="fill-white text-white" />
                  )}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="theatres" className="mt-28 border-t border-white/10 bg-[#050609] pb-8 pt-14">
      <div className="site-container grid gap-10 md:grid-cols-[1fr_180px_180px]">
        <div>
          <img src={asset("icon.png")} alt="QuickShow" className="h-[27px] w-[145px]" />
          <p className="mt-5 max-w-[390px] text-[12px] leading-5 text-white/58">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href="#google-play" className="focus-ring rounded">
              <img
                src={asset("Google Play.c5689d4f9b55e58a8076b39af11d5ab9 1.png")}
                alt="Get it on Google Play"
                className="h-9 w-auto"
              />
            </a>
            <a href="#app-store" className="focus-ring rounded">
              <img
                src={asset("App Store.537219f079dde0437e2c8e0e3ec2162d 1.png")}
                alt="Download on the App Store"
                className="h-9 w-auto"
              />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-[12px] font-bold text-white">Company</h3>
          <ul className="space-y-3 text-[11px] text-white/58">
            {["Home", "About us", "Contact us", "Privacy policy"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="focus-ring rounded transition hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-[12px] font-bold text-white">Get in touch</h3>
          <ul className="space-y-3 text-[11px] text-white/58">
            <li>+91 81694 51215</li>
            <li>gautamdhodi02@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="site-container mt-10 border-t border-white/10 pt-6 text-center text-[11px] text-white/38">
        Copyright 2026 © Gautam Dhodi. All Right Reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <MoviesSection />
      <TrailersSection />
      <Footer />
    </main>
  );
}
