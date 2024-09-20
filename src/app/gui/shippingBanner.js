import { FaTruck } from "react-icons/fa"

export default function ShippingBanner() {
  return (
    <div className="bg-[#acae81] text-white py-2 px-4">
      <div className="container mx-auto flex justify-center items-center space-x-2">
        <FaTruck className=" animate-pulse" />
        <p className="text-sm font-medium">ENVÍOS A TODO EL PAÍS</p>
  
      </div>
    </div>
  )
}