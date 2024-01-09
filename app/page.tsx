export default function Home() {
  return (
    <main>
      <header className="flex items-center justify-center w-full h-24 border-b border-gray-200">
        <h1 className="text-4xl">Mechanic Services</h1>
      </header>

      <section className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h2 className="mt-6 text-2xl font-semibold text-gray-900">
          Welcome to our mechanic services
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          We provide the best services for your vehicle. Contact us for more
          information.
        </p>
      </section>

      <footer className="flex items-center justify-center w-full h-24 border-t border-gray-200">
        <p>© {new Date().getFullYear()} Mechanic Services</p>
      </footer>
    </main>
  );
}
