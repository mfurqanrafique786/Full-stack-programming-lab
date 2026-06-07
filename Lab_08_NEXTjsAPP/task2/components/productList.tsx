import Link from "next/link";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
}

const products: Product[] = [
  { id: "1", title: "Gaming Mouse", description: "High precision wireless mouse.", price: "$55" },
  { id: "2", title: "Mechanical Keyboard", description: "Blue switch clicky keyboard.", price: "$120" },
  { id: "3", title: "Studio Headphones", description: "Noise canceling over-ear.", price: "$200" },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div key={p.id} className="border p-5 rounded-xl shadow hover:shadow-lg transition bg-white">
          <h2 className="text-2xl font-semibold mb-2">{p.title}</h2>
          <p className="text-gray-500 mb-4">{p.description}</p>
          <p className="text-green-600 font-bold text-lg mb-4">{p.price}</p>
          <Link href={`/products/${p.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-md block text-center hover:bg-blue-700">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}