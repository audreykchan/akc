function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="max-w-[60ch] mx-auto w-full p-8 flex-1 flex flex-col">
        <div className="space-y-12 pt-12">
          <section>
            <h1 className="font-medium text-gray-800 tracking-tight leading-snug">
              Hi, I'm Audrey
            </h1>
            <p className="text-gray-800 tracking-tight leading-snug mt-4">
              Building communities and products while exploring the intersection of startups, VC, and tech. Currently studying industrial engineering at Columbia.
            </p>
            <p className="text-gray-800 tracking-tight leading-snug mt-4">
              <span className="italic">contact</span>: <a href="mailto:akc2209@columbia.edu" target="_blank" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">akc2209@columbia.edu</a>
            </p>
          </section>

          <hr className="border-gray-300" />

          <section className="mt-8">
            <h2 className="font-medium text-gray-800 tracking-tight leading-snug mb-3">
              Currently working on:
            </h2>
            <div className="space-y-8">
              <div>
                <p className="text-gray-800 tracking-tight leading-snug">
                  <span className="italic">BoldVoice</span> (YC S21): AI that can <a href="https://accent-explorer.boldvoice.com/" target="_blank" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">hear accents</a> and improve pronunciation. Running <a href="https://boldvoice.com/" target="_blank" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">product</a> (3M+ downloads), <a href="https://www.socialgrowthengineers.com/the-return-of-crying-194-7m-views-for-og-ai-learning-tool" target="_blank" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">growth strategy</a> (200M+ views), <a href="https://start.boldvoice.com/accent-oracle" target="_blank" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">viral games</a> (2.5M+ plays within 1st week of release).
                </p>
              </div>
              <div>
                <p className="text-gray-800 tracking-tight leading-snug">
                  <span className="italic">Foundess</span>: Gender-inclusive founder community (30K+ globally) backed by Notion, Silicon Valley Bank, Anthropic++. Hosting sponsored <a href="https://www.instagram.com/joinfoundess" target="_blank" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">events</a> (5K+ attendees), <a href="https://substack.com/home/post/p-180811973" target="_blank" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">job boards</a> for female-led startups, inaugural founder <a href="https://www.foundess.com/list" target="_blank" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">honoree list</a> ($210M+ capital raised collectively).
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="font-medium text-gray-800 tracking-tight leading-snug mb-3">
              Previously:
            </h2>
            <div className="space-y-8">
              <div>
                <p className="text-gray-800 tracking-tight leading-snug">
                  <span className="italic">Rubicon Robotics</span>: Autonomous robots for real-time swim analysis. Completed the production BOM (100+ components) and built supply chain backbone (9 custom parts).
                </p>
              </div>
              <div>
                <p className="text-gray-800 tracking-tight leading-snug">
                  <span className="italic">Alumni Engagement Strategy</span>: Drived <a href="https://givingday.columbia.edu/pages/columbia-giving-day-home" target="_blank" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">fundraising</a> ($24M in 24 hrs) and <a href="https://www.alumni.columbia.edu/news/revisiting-leaders-experience-2025" target="_blank" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">global events</a> (600 attendees from 25 countries)
                </p>
              </div>
            </div>
          </section>

          <footer className="mt-auto pt-12 flex justify-center gap-8 text-gray-400">
            <a href="https://twitter.com" target="_blank" className="hover:text-blue-500 transition-colors duration-200">twitter</a>
            <a href="https://www.linkedin.com/in/audrey-chan-2b6992247/" target="_blank" className="hover:text-blue-500 transition-colors duration-200">linkedin</a>
            <a href="https://substack.com" target="_blank" className="hover:text-blue-500 transition-colors duration-200">substack</a>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
