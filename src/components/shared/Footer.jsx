import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-400 px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-black">
            StudyNook
          </h1>
          <p className="mt-4 max-w-xl">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Newsletter */}
          <div>
            <h3 className="text-white mb-3 tracking-wide">NEWSLETTER</h3>
            <p className="mb-4 text-sm">
              Subscribe for exclusive travel deals and inspiration.
            </p>

            <div className="flex shadow-xl items-center bg-orange-300 px-4 py-3">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent text-white outline-none flex-1 text-sm"
              />
              <span className="text-white text-lg">↗</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-orange-500 font-bold mb-3 tracking-wide">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-orange-300 cursor-pointer">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:text-orange-300 cursor-pointer">
                <Link href={"/rooms"}>Rooms</Link>
              </li>
              <li className="hover:text-orange-300 cursor-pointer">
                <Link href={"/add-room"}>Add Room</Link>
              </li>
              <li className="hover:text-orange-300 cursor-pointer">
                <Link href={"/my-bookings"}> My Bookings</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-orange-500 font-bold mb-3 tracking-wide">
              SUPPORT
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-orange-300 cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-orange-300 cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-orange-300 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-orange-500 mb-3 tracking-wide">CONTACT US</h3>
            <ul className="space-y-2">
              <li>786 901 1622</li>
              <li>info@studynook.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className=" border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2026 Wanderlust. All rights reserved.</p>

          <div className="flex gap-5 mt-4 md:mt-0 text-black text-lg">
            <span className="cursor-pointer">X</span>
            <span className="cursor-pointer">in</span>
            <span className="cursor-pointer">◎</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
