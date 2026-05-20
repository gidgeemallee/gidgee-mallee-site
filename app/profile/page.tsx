export default function ProfilePage() {
  const strengths = [
    "Ecological surveys, field validation and biodiversity monitoring",
    "Reptiles, amphibians, wetlands and threatened species habitat",
    "Public land, parks, reserves and sensitive-site operations",
    "Remote area logistics, 4WD fieldwork and vessel-based capability",
    "Pest plant and animal control in environmentally sensitive areas",
    "Clear field documentation, reporting and environmental photography",
  ];

  const experience = [
    {
      title: "Ecological Field Practice",
      text: "Jeremy brings practical field experience across ecological surveys, habitat assessment, species monitoring and environmental land management. His work is grounded in careful observation, field craft and a practical understanding of how landscapes function.",
    },
    {
      title: "Public Land & Operations",
      text: "With a background in parks and public land management, Jeremy understands the operational realities of working in reserves, wetlands, coastal landscapes, forests and high-value conservation areas.",
    },
    {
      title: "Threatened Species & Habitat",
      text: "Jeremy has a strong interest in threatened species management, particularly where field-based knowledge, habitat interpretation and practical land management need to come together.",
    },
    {
      title: "Remote Field Capability",
      text: "Gidgee Mallee Enterprises is built around practical field capability, including remote-area access, 4WD logistics, vessel-based work, sensitive-site operations and problem solving in challenging conditions.",
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
            <a className="hover:text-[#aabf56]" href="/">
              Home
            </a>
            <a className="hover:text-[#aabf56]" href="/#services">
              Services
            </a>
            <a className="hover:text-[#aabf56]" href="/#capability">
              Capability
            </a>
            <a className="text-[#aabf56]" href="/profile">
              Profile
            </a>
            <a className="hover:text-[#aabf56]" href="/#contact">
              Contact
            </a>
          </div>

          <a
            href="/#contact"
            className="hidden md:block border border-stone-300/70 px-6 py-3 text-xs uppercase tracking-[0.16em] hover:bg-[#aabf56] hover:text-[#1c2614]"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      <section
        className="relative min-h-[620px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/70" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-[1fr_0.85fr] gap-12 items-center text-white">
          <div>
            <p className="uppercase tracking-[0.28em] text-[#d1df84] font-bold text-sm mb-5">
              Ecological Profile
            </p>

            <h1 className="text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-[0.03em] mb-8">
              Jeremy Tscharke
            </h1>

            <h2 className="text-xl md:text-2xl uppercase tracking-[0.14em] text-stone-100 font-semibold mb-8">
              Ecological Field Specialist
            </h2>

            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-stone-100">
              Jeremy Tscharke is an experienced natural resource and ecological
              field practitioner with a practical background spanning parks and
              public land management, ecological surveys, threatened species
              habitat, wetland systems, pest plant and animal control, and
              remote environmental field operations.
            </p>
          </div>

          <div className="bg-[#efe5d1]/10 border border-[#aabf56]/30 p-8 backdrop-blur-sm">
            <p className="text-[#d1df84] uppercase tracking-[0.18em] text-xs font-bold mb-5">
              Field Focus
            </p>

            <ul className="space-y-4 text-stone-100">
              {strengths.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <span className="text-[#d1df84] font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-[#efe5d1]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
          <div>
            <p className="uppercase tracking-[0.25em] text-[#5f6f2d] font-bold text-sm mb-4">
              Practical Experience
            </p>

            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide mb-6">
              Field Knowledge Backed by Operational Capability
            </h2>

            <p className="text-stone-700 text-lg leading-relaxed mb-6">
              Jeremy’s work combines ecological awareness with practical field
              delivery. He is comfortable working in complex environments where
              conservation values, site access, public land operations, safety,
              logistics and clear communication all matter.
            </p>

            <p className="text-stone-700 text-lg leading-relaxed">
              His approach is direct, observant and field-based: understand the
              site, identify the ecological values, work carefully, document
              clearly, and deliver practical outcomes for clients and land
              managers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((item) => (
              <div
                key={item.title}
                className="bg-white/70 border border-[#7b6f4a]/20 p-7 shadow-lg"
              >
                <h3 className="uppercase font-black tracking-[0.08em] text-xl mb-4 text-[#2d331d]">
                  {item.title}
                </h3>

                <p className="text-stone-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1c2614] text-stone-100 px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-[#d1df84] font-bold text-sm mb-4">
              Specialist Interests
            </p>

            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide mb-6">
              Reptiles, Amphibians, Wetlands & Threatened Species Habitat
            </h2>

            <p className="text-stone-300 text-lg leading-relaxed mb-6">
              Jeremy has a strong personal and professional interest in reptiles,
              amphibians, wetland ecology and difficult-to-detect species. This
              specialist interest supports careful field observation, habitat
              interpretation and targeted survey work.
            </p>

            <p className="text-stone-300 text-lg leading-relaxed">
              Gidgee Mallee Enterprises is particularly well suited to projects
              that need a practical ecological operator who can work across
              sensitive landscapes, remote sites, wetlands, reserves and public
              land settings.
            </p>
          </div>

          <div
            className="min-h-[420px] bg-cover bg-center shadow-2xl"
            style={{ backgroundImage: "url('/images/service-surveys-NEW.jpg')" }}
          />
        </div>
      </section>

      <section className="px-6 py-20 bg-[#efe5d1]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#5f6f2d] font-bold text-sm mb-4">
            Working Approach
          </p>

          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide mb-8">
            Practical. Observant. Reliable.
          </h2>

          <p className="text-stone-700 text-lg leading-relaxed mb-10">
            The strength of Gidgee Mallee Enterprises is the combination of
            ecological understanding and practical field delivery. Jeremy brings
            a calm, capable and grounded approach to environmental work, with an
            emphasis on clear communication, site awareness and useful outcomes.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#contact"
              className="bg-[#5f6f2d] hover:bg-[#76873a] text-white px-6 py-4 uppercase text-xs font-bold tracking-[0.15em]"
            >
              Discuss a Project →
            </a>

            <a
              href="https://www.flickr.com/photos/152336187@N08/albums/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#5f6f2d] text-[#2d331d] hover:bg-[#2d331d] hover:text-white px-6 py-4 uppercase text-xs font-bold tracking-[0.15em]"
            >
              View Field Photography →
            </a>
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
    </main>
  );
}