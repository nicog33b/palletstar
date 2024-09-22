import { FaTruck } from "react-icons/fa";

export default function ShippingBanner() {
  return (
    <div className="bg-[#acae81] text-white py-3 px-4">
      <div className="container mx-auto flex justify-center items-center space-x-3">
        <FaTruck className="text-lg sm:text-xl md:text-2xl" aria-label="Shipping Icon" />
        <p className="text-sm sm:text-base md:text-lg font-semibold">
          Envíos en todo el pais directo a tu casa
        </p>
      </div>
    </div>
  );
}
