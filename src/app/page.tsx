import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa"; 

export default function Home() {
  const blocks = [
    { src: "https://i.nostr.build/8lkgnrgKEm4tsUHM.jpg", alt: "Black with Grey Bitcoin", title: "Black with Grey Bitcoin" },
    { src: "https://i.nostr.build/tSveWEQUZXKMfAu1.jpg", alt: "Black with Orange Bitcoin", title: "Black with Orange Bitcoin" },
    { src: "https://i.nostr.build/GOhC8yde0UUG5goi.jpg", alt: "Orange with Black Bitcoin", title: "Orange with Black Bitcoin" },
    { src: "https://i.nostr.build/96eTuQ5me6h8Xd1q.jpg", alt: "Orange with Grey Bitcoin", title: "Orange with Grey Bitcoin" },
    { src: "https://i.nostr.build/u1d6Wvpx5b9jhK4G.jpg", alt: "Grey with Black Bitcoin", title: "Grey with Black Bitcoin" },
    { src: "https://i.nostr.build/Lh1eZRxx0yDwxXwm.jpg", alt: "Grey with Orange Bitcoin", title: "Grey with Orange Bitcoin" },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gradient-to-b from-indigo-100 to-purple-200 font-sans">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          3D Printed Bitcoin Bricks & Handwritten Notes
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Celebrate perfect money with tangible Bitcoin-inspired mementos.
        </p>
      </header>

      {/* Main Image */}
      <div className="mb-12">
        <Image
          src="https://i.nostr.build/2soSNqRvhJ7WcL36.jpg"
          alt="Colorful Bitcoin-inspired Lego bricks"
          width={600}
          height={400}
          className="rounded-xl shadow-xl"
        />
      </div>

      {/* About Section */}
      <section className="text-center max-w-3xl mb-16 space-y-8 px-6">
        <p className="text-xl text-gray-800 leading-relaxed">
          This project is my way of stacking sats while sharing the message of Bitcoin through meaningful mementos. Bitcoin is the best money in the world. It is a technology built on the principles of freedom and sovereignty. My hope is that these <strong>3D printed BTC bricks</strong> bring together the personal touch of physical keepsakes with the transformative power of a monetary system that is unstoppable and censorship-resistant.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Each brick includes a handwritten quote, one of my personal favorites, because in a world dominated by instant digital transactions, there’s something enduring about holding a tangible message made just for you. It’s a small reminder that while technology propels us forward, it’s our humanity and the connections we foster that give it purpose.
        </p>
        <p className="text-lg text-purple-700 font-medium leading-relaxed">
          Whether you’re stacking, gifting, or showcasing it on your desk, these bricks represent Bitcoin’s core principles: sovereignty, resilience, and the vision of a future where money serves humanity, not the other way around.
        </p>
      </section>

      {/* Product Details Section */}
      <section className="max-w-2xl mb-16 text-center space-y-8 px-4">
        <div>
          <Image
            src="https://image.nostr.build/74d24b8d12cbcd00034efbc3ae0c31910b722ff73966a0cc13f414c71c10978b.jpg"
            alt="3D Printed Bitcoin Block"
            width={400}
            height={300}
            className="rounded-lg mb-6 mx-auto shadow-lg"
          />
          <p className="text-gray-800 mb-4 leading-relaxed">
            Every piece is handcrafted with care and respect for the orange coin’s philosophy. Color schemes vary, ensuring a unique experience each time.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Price: <span className="text-green-600 font-bold">2,100 sats</span> for the brick + 
            <span className="text-green-600 font-bold"> 2,100 sats</span> for shipping and handling.
          </p>
          <p className="text-gray-800">
            Total: <span className="text-green-700 font-extrabold">4,200 sats</span>
          </p>
        </div>

        {/* Gallery Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Color Variations</h2>
          <div className="flex overflow-x-scroll space-x-4 scrollbar-hide pb-4">
            {blocks.map((block, index) => (
              <div key={index} className="flex flex-col items-center w-48 shrink-0">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={150}
                  height={150}
                  className="rounded-lg shadow-md"
                />
                <p className="text-center text-sm mt-2 text-gray-700">{block.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* Instructions and Info */}
  <section className="max-w-3xl text-center mb-16 space-y-6 px-4">
        <h2 className="text-2xl font-semibold text-gray-800">Key Information</h2>
        <ul className="text-gray-800 leading-relaxed list-inside list-disc">
          <li><strong>Shipping:</strong> US-only for now. International? DM me to discuss options.</li>
          <li><strong>Color Choice:</strong> While I can’t guarantee exact colors, you can specify preferences on the form.</li>
          <li><strong>Bulk Orders:</strong> DM me for special rates; single orders are the default.</li>
          <li><strong>Returns:</strong> No refunds after purchase. Items damaged during transit? Send a pic and I’ll replace it.</li>
        </ul>
      </section>

      {/* Payment & After-Purchase Section */}
      <section className="max-w-2xl text-center mb-16 space-y-6 px-4">
        <h2 className="text-2xl font-semibold text-gray-800">Ready to Purchase?</h2>
        <p className="text-gray-800 leading-relaxed">
          Payments are accepted via Bitcoin (Lightning only). For bulk orders, DM me on X or LinkedIn for on-chain arrangements. 
          After paying the invoice, you’ll be directed to a form for shipping details. I ship to all 50 states and PO Boxes.
        </p>
        <Link
          href="https://plebpay.com/4cff92c4-50ac-4ad3-bb2a-f4bd7df8a509"
          className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 text-lg transition-transform transform hover:scale-105 shadow-md"
          aria-label="Buy Now"
        >
          Buy Now
        </Link>
      </section>
      {/* Footer */}
      <footer className="text-center text-sm text-gray-700 mt-8 space-y-4">
        <p>© {new Date().getFullYear()} 3Dnotes. Created with passion, pen, and plastic.</p>
        <div className="flex justify-center space-x-8">
          <Link
            href="https://x.com/ConorChepenik"
            aria-label="X (formerly Twitter)"
            className="transition-transform transform hover:scale-110"
          >
            <FaXTwitter className="text-gray-600 w-8 h-8 transition-colors hover:text-[#1DA1F2]" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/conorchepenik/"
            aria-label="LinkedIn"
            className="transition-transform transform hover:scale-110"
          >
            <FaLinkedinIn className="text-gray-600 w-8 h-8 transition-colors hover:text-[#0077b5]" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
