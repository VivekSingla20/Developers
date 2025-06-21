
import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, ExternalLink, Send, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About UIET', href: '/about' },
    { name: 'Academic Programs', href: '/academics' },
    { name: 'Admissions 2024', href: '/admissions' },
    { name: 'Research', href: '/research' },
    { name: 'Faculty', href: '/faculty' },
    { name: 'Student Life', href: '/students' },
    { name: 'Alumni Network', href: '/students#alumni' },
    { name: 'Employment', href: '/employment' }
  ];

  const departments = [
    { name: 'Computer Science & Engineering', href: '/departments/cse' },
    { name: 'Electronics & Communication', href: '/departments/ece' },
    { name: 'Electrical & Electronics', href: '/departments/eee' },
    { name: 'Information Technology', href: '/departments/it' },
    { name: 'Mechanical Engineering', href: '/departments/me' },
    { name: 'Biotechnology', href: '/departments/bt' },
    { name: 'Applied Sciences', href: '/departments/as' }
  ];

  const resources = [
    { name: 'Academic Calendar', href: '/academics#calendar' },
    { name: 'Previous Papers', href: '/previous-papers' },
    { name: 'Important Downloads', href: '/downloads' },
    { name: 'Student Portal', href: '/students#portal' },
    { name: 'Faculty Portal', href: '/faculty#portal' },
    { name: 'E-Learning Platform', href: '/academics#elearning' },
    { name: 'Library Resources', href: '/academics#library' },
    { name: 'Campus Map', href: '/about#location' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/uiet', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: 'https://twitter.com/uiet', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Linkedin, href: 'https://linkedin.com/company/uiet', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Instagram, href: 'https://instagram.com/uiet', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Youtube, href: 'https://youtube.com/uiet', label: 'YouTube', color: 'hover:bg-red-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* University Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">UIET</h3>
                <p className="text-sm text-gray-400">Panjab University</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              University Institute of Engineering & Technology, committed to excellence in 
              engineering education, research, and innovation since 2002. Building tomorrow's engineers today.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm group">
                <MapPin className="h-4 w-4 mr-3 text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
                <span className="group-hover:text-white transition-colors">Sector 25, Chandigarh - 160014, India</span>
              </div>
              <div className="flex items-center text-sm group">
                <Phone className="h-4 w-4 mr-3 text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
                <a href="tel:+91-172-2534816" className="hover:text-blue-400 transition-colors">
                  +91-172-2534816
                </a>
              </div>
              <div className="flex items-center text-sm group">
                <Mail className="h-4 w-4 mr-3 text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
                <a href="mailto:info@uiet.puchd.ac.in" className="hover:text-blue-400 transition-colors">
                  info@uiet.puchd.ac.in
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`h-10 w-10 flex items-center justify-center text-gray-400 hover:text-white rounded-lg transition-all duration-300 ${social.color} transform hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Departments</h3>
            <ul className="space-y-3">
              {departments.map((dept) => (
                <li key={dept.name}>
                  <Link
                    to={dept.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">{dept.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">{resource.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Stay Connected</h3>
              <p className="text-gray-300">Subscribe to our newsletter for latest updates, announcements, and opportunities.</p>
            </div>
            <div>
              <form onSubmit={handleNewsletterSubmit} className="flex space-x-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-6 flex items-center"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <>
                      <span className="text-sm">Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      <span className="hidden sm:inline">Subscribe</span>
                    </>
                  )}
                </Button>
              </form>
              {isSubscribed && (
                <p className="text-green-400 text-sm mt-2">Thank you for subscribing!</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2024 University Institute of Engineering & Technology, Panjab University. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/about#privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about#terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/about#cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link to="/about#accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
