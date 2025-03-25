import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-24">
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold">
              RavanaOS
            </Link>
            <p className="text-neutral-400 text-sm max-w-xs mx-auto md:mx-0">
              Transforming the future of human-computer interaction through advanced<br /> AI technology.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/team" className="text-neutral-400 hover:text-white transition-colors">Team</Link></li>
              <li><Link to="/investors" className="text-neutral-400 hover:text-white transition-colors">Investors</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie" className="text-neutral-400 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-neutral-400 text-sm">
              © {currentYear} RavanaOS. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
              <button className="text-sm text-neutral-400 hover:text-white transition-colors">
                Language: English
              </button>
              <button className="text-sm text-neutral-400 hover:text-white transition-colors">
                Region: Global
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
