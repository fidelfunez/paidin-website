import { Link } from "wouter";
import { Bitcoin } from "lucide-react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import NewsletterSignup from "./NewsletterSignup";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/paidin-logo.svg" 
                alt="PaidIn Logo" 
                className="h-8 w-8"
              />
              <span className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="text-white">Paid</span><span className="text-bitcoin">In</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              The future of Bitcoin Operations for modern teams.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-bitcoin transition-colors duration-200"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-bitcoin transition-colors duration-200"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-bitcoin transition-colors duration-200"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/features" className="hover:text-white transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition-colors duration-200">
                  Security
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <a href="https://medium.com/@paidin" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-8">
          <NewsletterSignup />
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 PaidIn. All rights reserved. Built with 🧡 for the Bitcoin economy.</p>
          <p className="text-xs text-gray-500 mt-2 opacity-60">
            Fidel Fúnez C. — Sovereign Builder, Independent Dev, and Relentless Bitcoiner.
          </p>
          <p className="text-xs text-gray-500 mt-2 opacity-60">
            PaidIn was built between Roatán, Honduras 🇭🇳 and The Woodlands, Texas 🇺🇸.
          </p>
          <p className="text-xs text-gray-500 mt-1 opacity-60">
            Dedicated to the people of Honduras, to the builders rising from unlikely places, and to a freer world. ₿
          </p>
        </div>
      </div>
    </footer>
  );
}
