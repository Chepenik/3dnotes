import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gradient-to-b from-blue-50 to-gray-50">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4 text-blue-700">Welcome to 3DNotes</h1>
        <p className="text-lg text-gray-600">
          Revolutionizing 3D printing with passion and purpose.
        </p>
      </header>
      <main className="flex flex-col items-center">
        {/* Main Image */}
        <div className="mb-6">
          <Image
            src="https://i.nostr.build/2soSNqRvhJ7WcL36.jpg"
            alt="Colorful Bitcoin-inspired Lego bricks"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Copy Section */}
        <section className="text-center max-w-2xl mb-6">
          <p className="text-xl text-gray-700 mb-4">
            At 3DNotes, we merge creativity and cutting-edge tech to craft Bitcoin-inspired Lego bricks. 
            Each piece celebrates freedom and innovation, empowering individuals to build a brighter future.
          </p>
          <p className="text-lg text-gray-600">
            Every order includes a unique handwritten quote to spread positivity 
            and inspire. It’s more than a product—it’s a message of hope.
          </p>
        </section>

        {/* Button */}
        <Link
          href="/product"
          className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 text-lg transition-transform transform hover:scale-105"
          aria-label="Explore our products"
        >
          Explore Products
        </Link>
      </main>
    </div>
  );
}
