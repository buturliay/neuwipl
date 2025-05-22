export default function ContactSection() {
    return (
      <section id="contact" className="w-full px-6 py-10 scroll-mt-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 uppercase mb-6">
            Contact Us
          </h2>
  
          <p className="text-lg sm:text-xl text-gray-700 mb-4">
            <strong>Email:</strong>{' '}
            <a
              href="mailto:northeasternwomeninprelaw@gmail.com"
              className="text-pink-600 hover:underline"
            >
              northeasternwomeninprelaw@gmail.com
            </a>
          </p>
  
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
            <strong>New Members:</strong> Join the Slack through our LinkTree!
          </p>
        </div>
      </section>
    );
  }
  