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
            <a className="text-[#aabf56]" href="#home">Home</a>
            <a className="hover:text-[#aabf56]" href="#services">Services</a>
            <a className="hover:text-[#aabf56]" href="#projects">Projects</a>
            <a className="hover:text-[#aabf56]" href="#photography">Photography</a>
            <a className="hover:text-[#aabf56]" href="#about">About</a>
            <a className="hover:text-[#aabf56]" href="#contact">Contact</a>
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
          <div className="flex flex-col items-start">
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

            <h2 className="text-lg md:text-2xl uppercase tracking-[0.18em] text-[#aabf56] font-semibold mb-8">
              Specialist Natural Resource Management
              <br />
              & Ecological Services
           
