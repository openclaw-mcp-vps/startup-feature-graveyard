export default function Home() {
  const faqs = [
    {
      q: 'What kind of features are in the database?',
      a: 'Real features abandoned by real startups — from social feeds to AI assistants to gamification layers. Each entry includes the reason for abandonment, usage data, and founder lessons.'
    },
    {
      q: 'Can I submit my own failed feature?',
      a: 'Yes. Subscribers get access to the submission form. Your story helps other founders avoid the same mistakes.'
    },
    {
      q: 'Is this a one-time purchase or subscription?',
      a: 'Monthly subscription at $19/mo. Cancel anytime. Full access to the searchable database, filters, and analytics dashboard.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-mono px-3 py-1 rounded-full mb-6">
          startup-tools
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          The Startup Feature Graveyard
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          A searchable database of abandoned startup features — with real reasons, real usage stats, and hard-won lessons from the founders who built them.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get Access — $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Instant access.</p>
      </section>

      {/* Social proof strip */}
      <section className="grid grid-cols-3 gap-4 mb-20 text-center">
        {[['340+', 'Failed Features'], ['120+', 'Founder Stories'], ['18', 'Niches Covered']].map(([num, label]) => (
          <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">{num}</div>
            <div className="text-sm text-[#8b949e] mt-1">{label}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto">
          <div className="text-[#58a6ff] font-semibold text-sm mb-2">Full Access</div>
          <div className="text-4xl font-bold text-white mb-1">$19<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to research feature viability before you build.</p>
          <ul className="space-y-3 mb-8">
            {[
              'Searchable database of 340+ failed features',
              'Filter by industry, team size, and failure reason',
              'Founder-submitted lessons and post-mortems',
              'Analytics dashboard with trend data',
              'Submit your own failed features'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Start Subscription
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Startup Feature Graveyard. Built for founders who ship.
      </footer>
    </main>
  )
}
