export default function HomePage() {
  const primaryServices = [
    {
      title: "Ecological Surveys & Monitoring",
      text: "Targeted fauna surveys, habitat assessments, biodiversity monitoring and field validation, with specialist strength in reptiles, amphibians and difficult-to-detect species.",
      image: "/images/service-surveys-NEW.jpg",
    },
    {
      title: "Wetland & Habitat Management",
      text: "Practical wetland, riparian and habitat management support, including restoration planning, ecological condition assessment and sensitive-site operations.",
      image: "/images/service-wetlands.jpg",
    },
    {
      title: "Pest Plant & Animal Control",
      text: "Targeted control programs in sensitive ecosystems, threatened species habitat, wetlands, reserves and public land settings where ecological awareness matters.",
      image: "/images/service-pestcontrol.jpg",
    },
    {
      title: "Remote Field Operations",
      text: "Reliable support for difficult-access projects, including 4WD logistics, remote area fieldwork, vessel operations, monitoring support and practical problem solving.",
      image: "/images/service-remote-NEW.jpg",
    },
  ];

  const heroPoints = [
    {
      title: "Specialist Field Knowledge",
      text: "Reptiles, amphibians, wetlands and threatened species habitat.",
    },
    {
      title: "Practical Land Management",
      text: "Operational experience across parks, reserves and public land.",
    },
    {
      title: "Remote Capability",
      text: "4WD, boat-based and difficult-access environmental work.",
    },
    {
      title: "Strong Documentation",
      text: "Professional photography and clear field reporting.",
    },
  ];

  const additionalServices = [
    {
      title: "Native Plant Propagation",
      text: "Specialist small-batch production through to large-scale wetland and restoration species supply.",
      image: "/images/support-1.jpg",
      link: "Learn More →",
    },
    {
      title: "Wildlife Photography",
      text: "Professional environmental imagery for reports, conservation projects, education and media.",
      image: "/images/support-2.jpg",
      link: "View Portfolio →",
    },
    {
      title: "Ecological Mentoring",
      text: "Practical mentoring and field training for land managers, volunteers and junior staff.",
      image: "/images/support-3.jpg",
      link: "Discuss Mentoring →",
    },
    {
      title: "Environmental Asset Maintenance",
      text: "Practical maintenance and repairs for tracks, parks, reserves and public environmental assets.",
      image: "/images/support-4.jpg",
      link: "Enquire →",
    },
  ];

  const capabilityCards = [
    {
      title: "Boat-Based Work",
      text: "Boat-Based Field Capability — Licensed Coxswain services for wetlands, rivers, estuaries and remote water-access environments.",
      image: "/images/card-1.jpg",
    },
    {
      title: "Remote & Regional Projects",
      text: "Reliable support for challenging field locations and difficult terrain.",
      image: "/images/card-2.jpg",
    },
    {
      title: "Reptile & Amphibian Knowledge",
      text: "Specialist wildlife knowledge supported by strong field observation and reporting skills.",
      image: "/images/card-3.jpg",
    },
    {
      title: "Habitat & Restoration Support",
      text: "Practical support for restoration, vegetation works and habitat improvement.",
      image: "/images/card-4.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#efe5d1] text-[#1f2417]">
      <nav className="bg-[#1c2614] text-stone-100 border-b border-[#6f7b3a]/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-4">
            <img
              src="/images/logo.png"
              alt="Gidgee Mallee Enterprises logo"
              className="w-16 h-16 rounded-full object-cover bg-[#efe5d1]"
            />

            <div className="flex flex-col leading-none">
              <div className="text-xl tracking-[0.2em] font-serif">
                GIDGEE MALLEE
              </div>

              <div className="w-full text-center">
                <span className="text-[10px] tracking-[0.38em] text-stone-300 mt-1 inline-block">
                  ENTERPRISES
                </span>
              </div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.16em]">
            <a className="text-[#aabf56]" href="#home">
              Home
            </a>
            <a className="hover:text-[#aabf56]" href="#services">
              Services
            </a>
            <a className="hover:text-[#aabf56]" href="#capability">
              Capability
            </a>
            <a className="hover:text-[#aabf56]" href="#about">
              About
            </a>
            <a className="hover:text-[#aabf56]" href="/profile">
              Profile
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
        className="relative min-h-[760px] bg-cover bg-center overflow-hidden torn-bottom"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/70" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1.12fr_0.88fr] gap-12 text-white items-center">
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/hero-logo-white.png"
              alt="Gidgee Mallee Enterprises hero logo"
              className="w-72 md:w-[30rem] max-w-full object-contain mb-8"
            />

            <h1 className="text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-[0.03em] mb-6 drop-shadow">
              Practical Solutions.
              <br />
              Natural Results.
            </h1>

            <h2 className="text-lg md:text-2xl uppercase tracking-[0.18em] text-[#aabf56] font-semibold mb-8 text-center">
              Specialist Ecological Field Services
            </h2>

            <p className="max-w-2xl text-lg leading-relaxed text-stone-100 mb-8 text-center">
              Gidgee Mallee Enterprises delivers practical environmental
              services for sensitive ecosystems, threatened species management,
              pest plant and animal control, including remote locations.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#services"
                className="bg-[#5f6f2d] hover:bg-[#76873a] px-6 py-4 uppercase text-xs font-bold tracking-[0.15em]"
              >
                View Services →
              </a>

              <a
                href="mailto:info@gidgeemallee.com.au?subject=Project%20Enquiry%20-%20Gidgee%20Mallee%20Enterprises"
                className="border border-white/60 hover:bg-white hover:text-[#1c2614] px-6 py-4 uppercase text-xs font-bold tracking-[0.15em]"
              >
                Discuss a Project →
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

      <section id="services" className="relative z-10 bg-[#efe5d1] px-6 py-20">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <p className="uppercase tracking-[0.25em] text-[#5f6f2d] font-bold text-sm mb-4">
            Core Services
          </p>

          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide mb-6">
            Specialist Environmental Capability
          </h2>

          <p className="max-w-3xl mx-auto text-stone-700 text-lg leading-relaxed">
            Focused services for clients who need practical ecological
            knowledge, field reliability, strong documentation and careful work
            in sensitive landscapes.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {primaryServices.map((service) => (
            <div
              key={service.title}
              className="relative min-h-[360px] overflow-hidden rounded-sm bg-cover bg-center shadow-2xl group"
              style={{ backgroundImage: `url('${service.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 group-hover:from-black/95 transition" />

              <div className="relative h-full min-h-[360px] p-8 flex flex-col justify-end text-white">
                <p className="uppercase tracking-[0.2em] text-[#c6d879] text-xs font-bold mb-3">
                  Primary Service
                </p>

                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-wide mb-4">
                  {service.title}
                </h3>

                <p className="text-stone-200 leading-relaxed text-lg max-w-xl mb-6">
                  {service.text}
                </p>

                <a
                  href="#contact"
                  className="inline-block w-fit border border-[#aabf56] text-[#d1df84] hover:bg-[#aabf56] hover:text-[#1c2614] px-5 py-3 uppercase text-xs tracking-[0.15em] font-bold"
                >
                  Enquire About This →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1c2614] text-stone-100 px-6 py-20 torn-bottom">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <p className="uppercase tracking-[0.25em] text-[#d1df84] font-bold text-sm mb-4">
            Additional Services
          </p>

          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide">
            Specialist Support Capability
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service) => (
            <div
              key={service.title}
              className="relative min-h-[320px] overflow-hidden group bg-cover bg-center"
              style={{ backgroundImage: `url('${service.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 group-hover:from-black/95 transition" />

              <div className="relative h-full p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-black uppercase tracking-wide mb-3 text-[#d1df84]">
                  {service.title}
                </h3>

                <p className="text-stone-200 text-sm leading-relaxed mb-5">
                  {service.text}
                </p>

                <a
                  href="#contact"
                  className="text-xs uppercase tracking-[0.16em] text-[#d1df84] font-bold"
                >
                  {service.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="capability"
        className="relative grid md:grid-cols-2 lg:grid-cols-4 torn-dark-bottom"
      >
        {capabilityCards.map((card) => (
          <div
            key={card.title}
            className="relative min-h-[300px] bg-cover bg-center border-t border-[#7b6f4a]/40"
            style={{ backgroundImage: `url('${card.image}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="relative h-full min-h-[300px] p-7 flex flex-col justify-end text-white">
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
              href="/profile"
              className="inline-block border border-[#aabf56] px-5 py-3 uppercase text-xs tracking-[0.15em] text-[#d1df84] hover:bg-[#aabf56] hover:text-[#1c2614] transition"
            >
              Learn More →
            </a>
          </div>

          <div>
            <h3 className="uppercase font-bold tracking-[0.08em] mb-4">
              Areas Serviced
            </h3>

            <div className="bg-[#efe5d1]/10 rounded-sm p-5 mb-4 flex justify-center">
              <img
                src="/images/australia-map.png"
                alt="Map of Australia"
                className="w-44 h-auto object-contain opacity-90"
              />
            </div>

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

            <div className="space-y-4 text-sm text-stone-300 mb-8">
              <div className="border-b border-[#aabf56]/20 pb-3">
                <p className="uppercase tracking-[0.16em] text-[#d1df84] text-xs mb-1">
                  Phone
                </p>
                <p className="text-base">0494 332 409</p>
              </div>

              <div className="border-b border-[#aabf56]/20 pb-3">
                <p className="uppercase tracking-[0.16em] text-[#d1df84] text-xs mb-1">
                  Email
                </p>
                <p className="text-base">info@gidgeemallee.com.au</p>
              </div>

              <div className="border-b border-[#aabf56]/20 pb-3">
                <p className="uppercase tracking-[0.16em] text-[#d1df84] text-xs mb-1">
                  Postal Address
                </p>
                <p className="leading-relaxed">
                  PO Box 521
                  <br />
                  Bairnsdale VIC 3875
                </p>
              </div>

              <div className="border-b border-[#aabf56]/20 pb-3">
                <p className="uppercase tracking-[0.16em] text-[#d1df84] text-xs mb-1">
                  ABN
                </p>
                <p>79 406 653 244</p>
              </div>

              <div>
                <p className="uppercase tracking-[0.16em] text-[#d1df84] text-xs mb-1">
                  Photography
                </p>
                <p>
                  Wildlife & ecological photography portfolio available via
                  Flickr
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@gidgeemallee.com.au"
                className="inline-block text-center border border-[#aabf56] px-5 py-3 uppercase text-xs tracking-[0.15em] text-[#d1df84] hover:bg-[#aabf56] hover:text-[#1c2614] transition"
              >
                Email Gidgee Mallee →
              </a>

              <a
                href="https://www.flickr.com/photos/152336187@N08/albums/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center border border-stone-400/40 px-5 py-3 uppercase text-xs tracking-[0.15em] text-stone-200 hover:bg-stone-100 hover:text-[#1c2614] transition"
              >
                View Flickr Portfolio →
              </a>
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

      <section className="bg-white px-6 py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src="/images/logo.png"
            alt="Gidgee Mallee Enterprises logo"
            className="w-56 md:w-72 object-contain"
          />

          <div className="flex flex-col items-center text-center">
            <div className="font-serif text-5xl md:text-6xl tracking-[0.18em] text-[#2d331d]">
              GIDGEE MALLEE
            </div>

            <div className="font-serif text-2xl tracking-[0.35em] text-[#2d331d] mt-2">
              ENTERPRISES
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
