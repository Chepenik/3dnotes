import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">3D Printed Bitcoin Block</h1>
        <p className="text-lg text-gray-600">Stack sats, Stack Legos, Stack both :D</p>
      </header>
      <main className="max-w-md">
        <Image
          src="https://image.nostr.build/74d24b8d12cbcd00034efbc3ae0c31910b722ff73966a0cc13f414c71c10978b.jpg"
          alt="3D Printer"
          width={400}
          height={300}
          className="rounded-lg mb-4"
        />
        <p className="text-gray-600 mb-4">
          This 3D print comes with a personalized handwritten quote and is made with love, a deep love for the orange coin. Only BTC accepted.
        </p>
        <p className="text-xl font-bold mb-6">
  Price: <span className="text-green-500">2,100 sats</span> for the print + <span className="text-green-500">2,100 sats</span> for shipping and handling. 
  <br />
  Total: <span className="text-green-600">4,200 sats</span>
</p>
        <Link
          href="https://app.paywithflash.com/checkout-page/91"
          className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
        >
          Purchase
        </Link>
      </main>
    </div>
  );
}
