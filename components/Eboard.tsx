const eboardMembers = [
  {
    position: 'President',
    name: 'Nadia Daly',
    major: 'Criminology and Criminal Justice',
    minor: 'Argumentation & Law, Law & Public Policy, Music Industry',
    interests: 'Intellectual Property and Entertainment Law',
  },
  {
    position: 'Vice President',
    name: 'Sarah Murphy',
    major: 'Criminology and Criminal Justice',
    minor: 'Law & Public Policy',
    interests: 'Public Interest Law',
  },
  {
    position: 'Secretary',
    name: 'Grace Cowell',
    major: 'Criminal Justice and Political Science with a Concentration in Comparative Politics',
    minor: 'Law & Public Policy',
    interests: 'Civil Rights Law',
  },
  {
    position: 'Marketing',
    name: 'Gloria Sanchez',
    major: 'Criminal Justice and Political Science',
    minor: 'Law & Public Policy',
    interests: 'Corporate/Tech and Family Law',
  },
  {
    position: 'Treasurer',
    name: 'Grace Ferretti',
    major: 'Business Administration with Concentration in Finance',
    minor: 'Law & Public Policy',
    interests: 'Still figuring it out!',
  },
];

export default function EboardSection() {
  return (
    <section id="eboard" className="w-full px-6 py-20 scroll-mt-24">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900 uppercase mb-12">
        Meet the E-Board
      </h2>

      <div className="flex flex-wrap justify-center gap-12 max-w-7xl mx-auto">
        {eboardMembers.map((member, index) => (
          <div
            key={index}
            className="w-full sm:w-[340px] bg-white border border-gray-200 rounded-xl p-8 text-center shadow-[0_2px_10px_rgba(236,72,153,0.1)] hover:shadow-[0_4px_20px_rgba(236,72,153,0.4)]"
          >

            <h3 className="text-gray-900 text-m uppercase font-light mb-1">
              {member.position}
            </h3>
            <p className="text-pink-600 text-xl font-semibold mb-4">
              {member.name}
            </p>
            <div className="text-base text-gray-700 space-y-3">
              <p>
                <strong className="text-gray-900">Major:</strong> {member.major}
              </p>
              <p>
                <strong className="text-gray-900">Minor:</strong> {member.minor}
              </p>
              <p>
                <strong className="text-gray-900">Interests:</strong> {member.interests}
              </p>
            </div>
          </div>

        ))}
      </div>
    </section>
  );
}
