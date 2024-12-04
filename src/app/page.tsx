import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gray-50">
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
            alt="Bitcoin Lego Bricks"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Copy Section */}
        <div className="text-center max-w-2xl mb-6">
          <p className="text-xl text-gray-700 mb-4">
            At 3DNotes, we combine innovation and creativity to make Bitcoin-inspired Lego bricks. 
            Every piece is a tribute to freedom tech—empowering individuals and shaping a better world.
          </p>
          <p className="text-lg text-gray-600">
            We add a personal touch with handwritten quotes because we believe 
            a good quote can brighten anyone's day. Our mission is to spread positivity 
            and inspire with every creation.
          </p>
        </div>

        {/* Button */}
        <Link
          href="/product"
          className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 text-lg"
        >
          Explore Products
        </Link>
      </main>
    </div>
  );
}
