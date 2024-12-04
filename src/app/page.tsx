import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to 3DNotes</h1>
        <p className="text-lg text-gray-600">
          Premium 3D prints with a personal touch.
        </p>
      </header>
      <main className="grid gap-8 sm:grid-cols-2">
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <Image
            src="/printer.jpg"
            alt="3D Printer"
            width={300}
            height={200}
            className="mx-auto mb-4"
          />
          <h2 className="text-xl font-bold">Top-notch 3D Printer</h2>
          <p className="text-gray-600 mb-4">
            Comes with a handwritten note to brighten your day.
          </p>
          <Link
            href="/product"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Shop Now
          </Link>
        </div>
      </main>
    </div>
  );
}
