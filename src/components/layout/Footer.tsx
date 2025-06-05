import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-primary-400" />
              <span className="text-xl font-heading font-bold text-white">
                Solok Selatan
              </span>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs">
              Portal resmi Solok Selatan. Menyediakan informasi lengkap tentang
              pariwisata, bisnis lokal, dan budaya khas daerah.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/wisata"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Destinasi Wisata
                </Link>
              </li>
              <li>
                <Link
                  to="/umkm"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Direktori UMKM
                </Link>
              </li>
              <li>
                <Link
                  to="/acara"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Agenda & Acara
                </Link>
              </li>
              <li>
                <Link
                  to="/tentang"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Informasi</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Pemerintahan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Layanan Publik
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Peluang Investasi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5" />
                <span className="text-gray-400">
                  Jl. Raya Padang-Solok KM 1, Solok Selatan, Sumatera Barat
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <a
                  href="mailto:info@solokselatan.go.id"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  info@solokselatan.go.id
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <a
                  href="tel:+6275398765"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  (0753) 98765
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Solok Selatan. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;