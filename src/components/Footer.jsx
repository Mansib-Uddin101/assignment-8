

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Contact Us</h3>
          <p className="mb-2">📍 123 Library Lane, Book Town, NY</p>
          <p className="mb-2">📧 support@nextread.com</p>
          <p>📞 +1 (555) 000-BOOK</p>
        </div>

        <div className="md:text-right">
          <h3 className="text-white text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex md:justify-end space-x-6 text-2xl">
            <a href="https://facebook.com"  target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <i className="fab fa-facebook"></i>
              <span className="text-sm block md:inline ml-1">Facebook</span>
            </a>
            <a href="https://instagram.com"  target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              <i className="fab fa-instagram"></i>
              <span className="text-sm block md:inline ml-1">Instagram</span>
            </a>
            <a href="https://snapchat.com"  target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
              <i className="fab fa-twitter"></i>
              <span className="text-sm block md:inline ml-1">Snapchat</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} NextRead. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
