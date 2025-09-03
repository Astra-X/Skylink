"use client"
import { useState } from "react";
import Script from "next/script";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwB0rRsHLfgg0dpOd393nlCgvdIdH5xfE8YyYZYCPqQsf5MCeRK-8PaJIPodU5WPobm/exec";

export default function Skylink() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    state: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() }),
      });
      alert("Thank you! Your inquiry has been submitted successfully.");
      setFormData({ name: "", email: "", state: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Sorry, there was an error submitting your form. Please try again later or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      
      <header className="max-w-7xl mx-auto bg-black backdrop-blur-md  sticky top-0 z-50">
        <div className="container mx-auto px-6 ">
          <div className="flex justify-between items-center py-4">
            <a href="/" className="text-2xl font-serif bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              SKYLINK
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-white/90 text-sm font-serif hover:text-white transition-colors duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#proper" className="text-white/90 text-sm font-serif hover:text-white transition-colors duration-300 relative group">
                Property
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#inqu" className="text-white/90  font-serif hover:text-white transition-colors duration-300 relative group">
                Inquiry
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>
            
            <div className="md:hidden">
              <button className="text-white p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced 3D Spline Viewer */}
      <section className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10"></div>
        <Script 
          src="https://unpkg.com/@splinetool/viewer@1.0.62/build/spline-viewer.js" 
          strategy="beforeInteractive"
        />
        {/* @ts-ignore */}
        <spline-viewer 
          url="https://prod.spline.design/50mzmvURiJyT8t94/scene.splinecode" 
          className="w-full h-full"
        />
        
      
        
      </section>

      
      <section id="proper" className="py-16 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-3">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Properties</span>
            </h2>
            <p className="text-white/60 font-serif">
              Elegant living spaces designed for modern lifestyles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Rectangle Capsule */}
            <div className="group bg-gradient-to-br from-gray-900 to-black rounded-xl font-serif p-6 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="rect.jpeg" 
                  alt="Rectangle Capsule" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h3 className="text-xl font-bold text-white">Rectangle Capsule</h3>
                  <p className="text-blue-300">10x30 ft</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-white/70">
                {["Premium family unit", "Modern interiors", "Spacious design"].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-3 h-3 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Boat Model */}
            <div className="group bg-gradient-to-br from-gray-900 to-black rounded-xl font-serif p-6 border border-gray-800 hover:border-green-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="boat.jpeg" 
                  alt="Boat Model" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h3 className="text-xl font-bold text-white">Boat Model</h3>
                  <p className="text-green-300">10x24 ft</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-white/70">
                {["Waterfront design", "Serene environment", "Stylish access"].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-3 h-3 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Standard Capsule */}
            <div className="group bg-gradient-to-br from-gray-900 to-black rounded-xl font-serif p-6 border border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="stan.jpg" 
                  alt="Standard Capsule" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h3 className="text-xl font-bold text-white">Standard Capsule</h3>
                  <p className="text-purple-300">10x20 ft</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-white/70">
                {["Compact design", "Perfect for couples", "Modern comfort"].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-3 h-3 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Inquiry Section */}
      <section id="inqu" className="py-12 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-4xl font-serif text-white mb-2">
              Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-md font-serif text-white/70">
              Ready to explore your future living space? Let's connect!
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black font-sans backdrop-blur-lg rounded-3xl p-6 md:p-10 border border-white/20 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:space-x-12">
              {/* Contact Info */}
              <div className="lg:w-1/3 mb-8 lg:mb-0">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-950 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/90 font-semibold">Email Response</p>
                      <p className="text-white/60 text-sm">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-950 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/90 font-semibold">Phone Follow-up</p>
                      <p className="text-white/60 text-sm">Quick response</p>
                    </div>
                  </div>
                </div>  
              </div>

              {/* Enhanced Form */}
              <div className="lg:w-2/3">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-white/80 font-semibold mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-white/80 font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-white/80 font-semibold mb-2">State</label>
                      <input
                        type="text"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        placeholder="Enter your state"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-white/80 font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-white/80 font-semibold mb-2">Your Message</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
                      placeholder="Tell us about your requirements or any questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 transform ${
                      isSubmitting 
                        ? "bg-gray-600 cursor-not-allowed" 
                        : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </div>
                  </button>
                </form>

                <p className="mt-6 text-center text-white/60 text-sm">
                  🔒 Your information is secure and will only be used to respond to your inquiry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50  py-8">
        <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-serif">&copy; {new Date().getFullYear()} SkyLink. All rights reserved.</p>
        </div>
      </footer>

      <Script
        src="https://unpkg.com/@splinetool/viewer@1.10.52/build/spline-viewer.js"
        strategy="beforeInteractive"
      />
    </div>
  );
}
