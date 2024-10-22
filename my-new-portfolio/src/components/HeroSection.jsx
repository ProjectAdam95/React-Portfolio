// HeroSection component: Represents the hero banner of the website, introducing the developer
function HeroSection() {
  return (
    <section className="py-20 flex flex-col items-center">
      {/* Main text container */}
      <div className="text-center">
        {/* Title text displaying the name */}
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Design by, Adam Todorovic
        </h1>
        
        {/* Subtitle providing the role of the developer */}
        <p className="text-2xl text-gray-600">
          Web Developer & Collaborator
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
