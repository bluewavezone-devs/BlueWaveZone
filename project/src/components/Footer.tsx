import React from 'react';
import { Mail, MapPin, Microscope } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-gray-800)' }} className="text-white">
      <div className="container">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Microscope className="h-8 w-8" style={{ color: 'var(--color-teal)' }} />
              <span className="text-xl font-bold">BlueWave Zone</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Extracting bacteria from pure soil to create powerful tools for agriculture, 
              industry, and health applications.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--color-teal)' }}>Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-1" style={{ color: 'var(--color-teal)' }} />
                <div>
                  <p className="text-gray-300">admin@bluewavezone.co.za</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1" style={{ color: 'var(--color-teal)' }} />
                <div>
                  <p className="text-gray-300">
                    14 Neil Hare Road<br />
                    Atlantis, Western Cape<br />
                    South Africa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--color-teal)' }}>Research Areas</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Rhizosphere Bacteria</li>
              <li>Pure Soil Extraction</li>
              <li>Agricultural Applications</li>
              <li>Industrial Biotechnology</li>
              <li>Medical Research</li>
              <li>Gut Microbiota</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 BlueWave Zone. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-use" className="text-gray-400 hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="/code-of-conduct" className="text-gray-400 hover:text-white transition-colors">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;