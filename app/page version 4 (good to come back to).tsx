export default function HomePage() {
  const services = [
    {
      icon: "🌿",
      title: "Pest Plant & Animal Control",
      text: "Targeted control in sensitive ecosystems and around threatened species.",
    },
    {
      icon: "🪴",
      title: "Native Plant Propagation",
      text: "Specialised small batch production up to 10,000 plants, including wetland species.",
    },
    {
      icon: "📷",
      title: "Wildlife & Landscape Photography",
      text: "Professional imagery of wildlife, landscapes and public/nature interactions.",
    },
    {
      icon: "🦎",
      title: "Wildlife Surveys",
      text: "Surveys with a focus on reptiles and amphibians, but not limited to them.",
    },
    {
      icon: "🎓",
      title: "Ecological Mentoring",
      text: "Training and mentoring junior land managers and field staff.",
    },
    {
      icon: "🔧",
      title: "Park & Public Space Maintenance",
      text: "Basic repairs and maintenance of parks, tracks and public spaces.",
    },
  ];

  const fieldCards = [
    {
      title: "Coxswain / Boat Operator",
      text: "Experienced vessel operator for ecological surveys, monitoring and field work.",
      image: "/images/card-1.jpg",
    },
    {
      title: "Remote Field Operations",
      text: "4WD, hiking and remote camping experience in diverse and challenging environments.",
      image: "/images/card-2.jpg",
    },
    {
      title: "Reptile & Amphibian Specialist",
      text: "Extensive knowledge and experience identifying, surveying and managing reptiles and amphibians.",
      image: "/images/card-3.jpg",
    },
    {
      title: "Wetland & Habitat Management",
      text: "Wetland species expertise and habitat assessment, restoration and management.",
      image: "/images/card-4.jpg",
    },
  ];

  const heroPoints = [
    {
      title: "Ecological Expertise",
      text: "Specialising in reptiles, amphibians & wetlands",
    },
    {
      title: "Practical & Reliable",
      text: "Field proven, safety focused, results driven",
    },
    {
      title: "Remote & Regional",
      text: "Operating in diverse environments across Australia",
    },
    {
      title: "Conservation Minded",
      text: "Committed to protecting biodiversity for future generations",
    },
  ];

  return (
    <main className="min-h-screen bg-[#efe5d1] text-[#1f2417]">
      <nav className="bg-[#1c2614] text-stone-100 border-b border-[#6f7b3a]/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/images/logo.png"
              alt="Gidgee Mallee Enterprises logo"
              className="w-16 h-16 rounded-full object-cover bg-[#efe5d1]"
            />
            <div className="leading-tight">
              <div className="text-xl tracking-[0.2em] font-serif">
                GIDGEE MALLEE
              </div>
              <div className="text-xs tracking-[0.45em] text-stone-300">
                ENTERPRISES
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.16em]">
            <a className="text-[#aabf56]" href="#home">
              Home
            </a>
            <a className="hover:text-[#aabf56]" href="#services">
              Services
            </a>
            <a className="hover:text-[#aabf56]" href="#projects">
              Projects
            </a>
            <a className="hover:text-[#aabf56]" href="#photography">
              Photography
            </a>
            <a className="hover:text-[#aabf56]" href="#about">
              About
            </a>
            <a className="hover:text-[#aabf56]" href="#contact">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="hidden md:block border border-stone-300/70 px-6 py-3 text-xs uppercase tracking-[0.16em] hover:bg-[#aabf56] hover:text-[#1c2614]"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="relative min-h-[720px] bg-cover bg-center overflow-hidden torn-bottom"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/70" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 text-white items-center">
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/logo.png"
              alt="Gidgee Mallee Enterprises logo"
              className="w-72 md:w-[30rem] max-w-full object-contain mb-8 drop-shadow-2xl"
            />

            <h1 className="text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-[0.03em] mb-6 drop-shadow">
              Practical Solutions.
              <br />
              Healthy Landscapes.
            </h1>

            <h2 className="text-lg md:text-2xl uppercase tracking-[0.18em] text-[#aabf56] font-semibold mb-8 text-center">
              Specialist Natural Resource Management
              <br />
              & Ecological Services
            </h2>

            <p className="max-w-2xl text-lg leading-relaxed text-stone-100 mb-8 text-center">
              Gidgee Mallee Enterprises delivers professional ecological
              services across Australia with a focus on biodiversity, sensitive
              ecosystems and sustainable land management.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#services"
                className="bg-[#5f6f2d] hover:bg-[#76873a] px-6 py-4 uppercase text-xs font-bold tracking-[0.15em]"
              >
                Our Services →
              </a>

              <a
                href="#contact"
                className="border border-white/60 hover:bg-white hover:text-[#1c2614] px-6 py-4 uppercase text-xs font-bold tracking-[0.15em]"
              >
                Get in Touch →
              </a>
            </div>
          </div>

          <div className="space-y-7 self-center">
            {heroPoints.map((point) => (
              <div key={point.title} className="flex gap-4 items-start">
                <div className="w-14 h-14 shrink-0 rounded-full border border-[#aabf56] bg-[#5f6f2d]/40 flex items-center justify-center text-[#c6d879] font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="uppercase font-bold tracking-[0.08em]">
                    {point.title}
                  </h3>
                  <p className="text-stone-200 text-sm leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative z-10 max-w-7xl mx-auto px-6 py-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center bg-[#efe5d1]"
      >
        {services.map((service) => (
          <div key={service.title} className="px-2">
            <div className="text-4xl mb-3">{service.icon}</div>
            <h3 className="font-black uppercase text-sm leading-tight mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed">
              {service.text}
            </p>
          </div>
        ))}
      </section>

      <section
        id="projects"
        className="relative grid md:grid-cols-2 lg:grid-cols-4 torn-dark-bottom"
      >
        {fieldCards.map((card) => (
          <div
            key={card.title}
            className="relative min-h-[290px] bg-cover bg-center border-t border-[#7b6f4a]/40"
            style={{
              backgroundImage: `url('${card.image}')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            <div className="relative h-full min-h-[290px] p-7 flex flex-col justify-end text-white">
              <h3 className="uppercase font-black text-xl tracking-[0.06em] mb-2">
                {card.title}
              </h3>
              <p className="text-stone-200 text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section
        id="about"
        className="relative bg-[#1c2614] text-stone-100 px-6 pt-20 pb-16"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="text-center">
            <h3 className="uppercase font-bold tracking-[0.08em] mb-4">
              About Gidgee Mallee
            </h3>

            <p className="text-sm text-stone-300 leading-relaxed mb-4 max-w-sm mx-auto">
              Gidgee Mallee Enterprises is owned and operated by an experienced
              natural resource professional with a background in parks
              management, ecological surveys, threatened species management and
              environmental field operations.
            </p>

            <a
              href="#contact"
              className="inline-block border border-[#aabf56] px-5 py-3 uppercase text-xs tracking-[0.15em] text-[#d1df84]"
            >
              Learn More →
            </a>
          </div>

          <div>
            <h3 className="uppercase font-bold tracking-[0.08em] mb-4">
              Areas Serviced
            </h3>

            <div className="bg-[#efe5d1]/10 rounded-sm p-4 mb-4">
              <div className="text-5xl text-center">🇦🇺</div>
            </div>

            <ul className="text-sm text-stone-300 space-y-2">
              <li>• Victoria</li>
              <li>• New South Wales</li>
              <li>• South Australia</li>
              <li>• Remote Australia</li>
            </ul>

            <p className="text-[#d1df84] italic text-sm mt-4">
              Available Australia-wide for suitable projects
            </p>
          </div>

          <div>
            <h3 className="uppercase font-bold tracking-[0.08em] mb-4">
              Certifications & Capabilities
            </h3>

            <ul className="text-sm text-stone-300 space-y-2">
              <li>✓ Wildlife Survey & Research</li>
              <li>✓ Reptile & Amphibian Handling</li>
              <li>✓ Threatened Species Awareness</li>
              <li>✓ 4WD & Remote Area Operations</li>
              <li>✓ Coxswain / Vessel Operations</li>
              <li>✓ Field Team Mentoring</li>
              <li>✓ Public Land Operations</li>
            </ul>
          </div>

          <div id="contact">
            <h3 className="uppercase font-bold tracking-[0.08em] mb-4">
              Connect
            </h3>

            <div className="text-sm text-stone-300 space-y-3 mb-6">
              <p>Victoria, Australia</p>
              <p>info@gidgeemallee.com.au</p>
              <p>Photography portfolio available via Flickr</p>
            </div>

            <a
              href="https://www.flickr.com/photos/152336187@N08/"
              target="_blank"
              className="inline-block border border-[#aabf56] px-5 py-3 uppercase text-xs tracking-[0.15em] text-[#d1df84] hover:bg-[#aabf56] hover:text-[#1c2614]"
            >
              Flickr Portfolio →
            </a>

            <div className="flex gap-3 mt-6 text-[#d1df84]">
              <span className="w-8 h-8 border border-[#aabf56]/60 flex items-center justify-center text-xs">
                f
              </span>
              <span className="w-8 h-8 border border-[#aabf56]/60 flex items-center justify-center text-xs">
                ig
              </span>
              <span className="w-8 h-8 border border-[#aabf56]/60 flex items-center justify-center text-xs">
                in
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#2d331d] text-stone-300 text-xs">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-6 justify-between">
          <p>© 2026 Gidgee Mallee Enterprises</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Website by Gidgee Mallee Enterprises</p>
        </div>
      </footer>

      <section className="bg-[#efe5d1] px-6 py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src="/images/logo.png"
            alt="Gidgee Mallee Enterprises logo"
            className="w-56 md:w-72 object-contain"
          />

          <div className="text-center md:text-left">
            <div className="font-serif text-5xl md:text-6xl tracking-[0.18em] text-[#2d331d]">
              GIDGEE MALLEE
            </div>

            <div className="font-serif text-2xl tracking-[0.45em] text-[#2d331d] mt-2">
              ENTERPRISES
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
