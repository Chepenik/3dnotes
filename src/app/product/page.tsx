import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <Header
        title="3D Printed Bitcoin Block"
        subtitle="Stack sats, Stack Legos, Stack both :D"
      />
      <main className="max-w-md">
        <ProductDetails
          imgSrc="https://image.nostr.build/74d24b8d12cbcd00034efbc3ae0c31910b722ff73966a0cc13f414c71c10978b.jpg"
          imgAlt="3D Printed Bitcoin Block"
          description="This 3D print comes with a personalized handwritten quote and is made with love, a deep love for the orange coin. Only BTC accepted."
          priceDetails={{
            price: "2,100 sats",
            shipping: "2,100 sats",
            total: "4,200 sats",
          }}
          purchaseLink="https://app.paywithflash.com/checkout-page/91"
        />
      </main>
    </div>
  );
}

function Header({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="text-center mb-10">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg text-gray-600">{subtitle}</p>
    </header>
  );
}

function ProductDetails({
  imgSrc,
  imgAlt,
  description,
  priceDetails,
  purchaseLink,
}: {
  imgSrc: string;
  imgAlt: string;
  description: string;
  priceDetails: {
    price: string;
    shipping: string;
    total: string;
  };
  purchaseLink: string;
}) {
  return (
    <>
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={400}
        height={300}
        className="rounded-lg mb-4"
      />
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-xl font-bold mb-6">
        Price: <span className="text-green-500">{priceDetails.price}</span> for
        the print +{" "}
        <span className="text-green-500">{priceDetails.shipping}</span> for
        shipping and handling. <br />
        Total: <span className="text-green-600">{priceDetails.total}</span>
      </p>
      <Link
        href={purchaseLink}
        className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
      >
        Purchase
      </Link>
    </>
  );
}
