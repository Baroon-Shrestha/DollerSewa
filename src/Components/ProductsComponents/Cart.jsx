import React, { useEffect, useState } from "react";
import { ShoppingCart, Trash2, MessageCircle, Package } from "lucide-react";
import useExchangeRate from "../Hook/useExchangeRate";
import toast from "react-hot-toast";
import { BiLeftArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [currency, setCurrency] = useState("USD");
  const { rate, loading } = useExchangeRate("USD", "NPR");
  const navigate = useNavigate(-1);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedCurrency = localStorage.getItem("currency");

    if (savedCart) setCartItems(JSON.parse(savedCart));
    if (savedCurrency) setCurrency(savedCurrency);
  }, []);

  const convertPrice = (price) => {
    if (currency === "USD") return `$${price}`;
    if (loading || !rate) return "Loading...";
    return `NRs ${(price * rate).toFixed(0)}`;
  };

  const calculateTotalValue = () => {
    const totalUSD = cartItems.reduce((sum, item) => sum + item.price, 0);
    if (currency === "USD") return totalUSD.toFixed(2);
    if (loading || !rate) return null;
    return (totalUSD * rate).toFixed(0);
  };

  const formattedTotal = () => {
    const total = calculateTotalValue();
    if (!total) return "Loading...";
    return currency === "USD" ? `$${total}` : `NRs ${total}`;
  };

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
    toast.success("Cart cleared successfully.");
  };

  const handleWhatsAppCheckout = () => {
    const total = calculateTotalValue();
    if (!total) return alert("Currency still loading...");

    const productLines = cartItems.map(
      (item, index) =>
        `${index + 1}. ${item.title} - ${convertPrice(item.price)}`
    );
    const message = `🛒 *Doller Sewa - Order Summary*\n\n${productLines.join(
      "\n"
    )}\n\n💵 *Total Amount (${currency}):* ${formattedTotal()}\n\nKindly confirm your order. We will proceed with the processing as soon as we receive your confirmation.\n\nThank you for choosing Doller Sewa.`;

    const phone = "9779818739823";
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
    handleClearCart();
  };

  const removeItem = (indexToRemove, title) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success(`${title} removed from cart.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1a1f34] via-[#0a0c17] to-[#1a1f34]">
      <div className="container mx-auto px-4 py-16">
        <div
          className="flex items-center text-white text-2xl font-extrabold "
          onClick={() => navigate(-1)}
        >
          <BiLeftArrow />
          <div>Back</div>
        </div>
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-500/20 p-4 rounded-full backdrop-blur-sm border border-blue-500/30">
              <ShoppingCart className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Your Cart
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Review your selected items and proceed to checkout
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 max-w-md mx-auto">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-2">
                Your cart is empty
              </h3>
              <p className="text-gray-400">
                Start shopping to add items to your cart
              </p>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <Package className="w-5 h-5 text-blue-400" />
                  Items in Cart ({cartItems.length})
                </h2>
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-6 bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-lg border border-white/20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-blue-400 text-lg font-medium">
                          {convertPrice(item.price)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(index, item.title)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white font-semibold text-lg">
                      {formattedTotal()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-400">Items</span>
                    <span className="text-white">{cartItems.length}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 text-xl font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-blue-400">{formattedTotal()}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="space-y-4">
                  <button
                    onClick={handleWhatsAppCheckout}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Continue to WhatsApp
                  </button>
                  <button
                    onClick={handleClearCart}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 backdrop-blur-sm border border-white/20 hover:border-white/30"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
