import { notFound } from "next/navigation";
import StoreApps from "@/components/StoreApps";
import StaffMembers from "@/components/StaffMembers";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

// Dummy data for stores
const stores = [
  {
    id: 1,
    name: "Fashion Store",
    url: "fashion-store.myshopify.com",
    apps: ["Shopify POS", "Mailchimp", "Privy"],
    staff: [
      { id: 1, email: "owner@fashionstore.com", role: "Owner" },
      { id: 2, email: "manager@fashionstore.com", role: "Manager" },
    ],
  },
];

export default function StorePage({ params }: { params: { id: string } }) {
  const store = stores.find((s) => s.id === Number.parseInt(params.id));

  if (!store) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to stores
        </Link>
        <h1 className="text-2xl font-semibold mb-2">{store.name}</h1>
        <p className="text-gray-600">{store.url}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <StaffMembers storeId={store.id} initialStaff={store.staff} />
        <StoreApps apps={store.apps} />
      </div>
    </div>
  );
}
