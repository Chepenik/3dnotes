// import Image from "next/image";
// import Link from "next/link";

// export default function ProductPage() {
//   return (
//     <div className="flex flex-col items-center min-h-screen p-8">
//       <Header
//         title="3D Printed Bitcoin Block"
//         subtitle="Stack sats, Stack Legos, Stack both :D"
//       />
//       <main className="max-w-md">
//         <ProductDetails
//           imgSrc="https://image.nostr.build/74d24b8d12cbcd00034efbc3ae0c31910b722ff73966a0cc13f414c71c10978b.jpg"
//           imgAlt="3D Printed Bitcoin Block"
//           description="This 3D print comes with a personalized handwritten quote and is made with love, a deep love for the orange coin. Only BTC accepted."
//           priceDetails={{
//             price: "2,100 sats",
//             shipping: "2,100 sats",
//             total: "4,200 sats",
//           }}
//           purchaseLink="https://app.paywithflash.com/checkout-page/91"
//         />
//         <ImageGallery />
//       </main>
//     </div>
//   );
// }

// function Header({ title, subtitle }: { title: string; subtitle: string }) {
//   return (
//     <header className="text-center mb-10">
//       <h1 className="text-4xl font-bold mb-4">{title}</h1>
//       <p className="text-lg text-gray-600">{subtitle}</p>
//     </header>
//   );
// }

// function ProductDetails({
//   imgSrc,
//   imgAlt,
//   description,
//   priceDetails,
//   purchaseLink,
// }: {
//   imgSrc: string;
//   imgAlt: string;
//   description: string;
//   priceDetails: {
//     price: string;
//     shipping: string;
//     total: string;
//   };
//   purchaseLink: string;
// }) {
//   return (
//     <>
//       <Image
//         src={imgSrc}
//         alt={imgAlt}
//         width={400}
//         height={300}
//         className="rounded-lg mb-4"
//       />
//       <p className="text-gray-600 mb-4">{description}</p>
//       <p className="text-xl font-bold mb-6">
//         Price: <span className="text-green-500">{priceDetails.price}</span> for
//         the print +{" "}
//         <span className="text-green-500">{priceDetails.shipping}</span> for
//         shipping and handling. <br />
//         Total: <span className="text-green-600">{priceDetails.total}</span>
//       </p>
//       <Link
//         href={purchaseLink}
//         className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
//       >
//         Purchase
//       </Link>
//     </>
//   );
// }

// function ImageGallery() {
//   const blocks = [
//     {
//       src: "https://i.nostr.build/8lkgnrgKEm4tsUHM.jpg",
//       alt: "Black Block Grey Bitcoin",
//       title: "Black with Grey Bitcoin",
//     },
//     {
//       src: "https://i.nostr.build/tSveWEQUZXKMfAu1.jpg",
//       alt: "Black Block Orange Bitcoin",
//       title: "Black with Orange Bitcoin",
//     },
//     {
//       src: "https://i.nostr.build/GOhC8yde0UUG5goi.jpg",
//       alt: "Orange Block Black Bitcoin",
//       title: "Orange with Black Bitcoin",
//     },
//     {
//       src: "https://i.nostr.build/96eTuQ5me6h8Xd1q.jpg",
//       alt: "Orange Block Grey Bitcoin",
//       title: "Orange with Grey Bitcoin",
//     },
//     {
//       src: "https://i.nostr.build/u1d6Wvpx5b9jhK4G.jpg",
//       alt: "Grey Block Black Bitcoin",
//       title: "Grey with Black Bitcoin",
//     },
//     {
//       src: "https://i.nostr.build/Lh1eZRxx0yDwxXwm.jpg",
//       alt: "Grey Block Orange Bitcoin",
//       title: "Grey with Orange Bitcoin",
//     },
//   ];

//   return (
//     <div className="mt-10">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Explore Colors</h2>
//       <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
//         {blocks.map((block, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center w-48 shrink-0"
//           >
//             <Image
//               src={block.src}
//               alt={block.alt}
//               width={150}
//               height={150}
//               className="rounded-lg"
//             />
//             <p className="text-center text-sm mt-2">{block.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
