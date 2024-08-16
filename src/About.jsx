export function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        About Us
      </h1>
      <div className="text-lg leading-relaxed text-gray-700">
        <p className="mb-6 bgshadow rounded-lg p-0">
          <img
            src="/wmap.jpeg"
            alt="worldmap"
            className="w-full h-56 object-cover rounded-lg"
          />
        </p>
        <p className="mb-6">
          Our website offers a wealth of data on countries, including their
          population, area, capital cities, languages, currencies, and more. We
          aim to help you understand the complexities of the world, offering
          insights into both well-known and lesser-known regions. With our
          user-friendly interface, you can easily navigate through different
          countries and explore their unique attributes.
        </p>
        <p className="font-semibold text-center">
          Explore. Learn. Discover the World.
        </p>
      </div>
    </div>
  );
}
