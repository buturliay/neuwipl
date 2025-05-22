import { Instagram, Linkedin } from 'lucide-react';

export default function SocialsSection() {
  return (
    <section id="socials" className="w-full px-6 py-20 scroll-mt-24 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 uppercase mb-8">
          Follow Our Socials
        </h2>

        <div className="flex justify-center gap-10 text-pink-600">
          <a
            href="https://www.instagram.com/women.inprelaw/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-pink-800 transition-colors"
          >
            <Instagram className="w-8 h-8 mb-1" />
            <span className="text-base font-medium">Instagram</span>
          </a>

          <a
            href="https://www.linkedin.com/company/women-in-pre-law/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-pink-800 transition-colors"
          >
            <Linkedin className="w-8 h-8 mb-1" />
            <span className="text-base font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
