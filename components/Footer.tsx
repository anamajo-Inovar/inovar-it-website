export default function Footer() {
  return (
    <footer
      className="bg-[#0B0B23] text-white py-16 px-6 md:px-10"
      id="contact"
    >
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-3">Inovar It</h3>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Email</li>
            <li>Phone</li>
            <li>Address</li>
            <li>Social Media</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded bg-white text-[#0B0B23] text-sm"
          />
        </div>
      </div>

      <p className="text-center text-gray-400 text-xs mt-10">
        © {new Date().getFullYear()} Inovar IT — All Rights Reserved.
      </p>
    </footer>
  );
}
