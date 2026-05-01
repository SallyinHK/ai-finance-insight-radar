export default function HomePage() {
    return (
      <main className="bg-[#0A0F1C] text-[#E6EAF2] min-h-screen px-10 py-16">
        <div className="max-w-4xl mx-auto">
  
          {/* Title */}
          <h1 className="text-2xl font-semibold tracking-tight mb-4">
            AI Finance Insight Radar
          </h1>
  
          {/* Subtitle */}
          <p className="text-sm text-gray-400 mb-12 max-w-2xl">
            A workflow-based AI system designed to transform raw information into 
            structured financial insights and professional content.
          </p>
  
          {/* Modules */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  
            {/* Posts */}
            <a
              href="/posts"
              className="border border-gray-700 p-5 hover:bg-gray-900 transition"
            >
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Module 01
              </div>
              <h2 className="text-base font-medium mb-2">
                Insight Terminal
              </h2>
              <p className="text-xs text-gray-400">
                View AI-generated finance insights and LinkedIn-ready content.
              </p>
            </a>
  
            {/* Prompts */}
            <a
              href="/prompts"
              className="border border-gray-700 p-5 hover:bg-gray-900 transition"
            >
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Module 02
              </div>
              <h2 className="text-base font-medium mb-2">
                Prompt Registry
              </h2>
              <p className="text-xs text-gray-400">
                Explore structured prompt design and system logic.
              </p>
            </a>
  
            {/* Report */}
            <a
              href="/progress-report"
              className="border border-gray-700 p-5 hover:bg-gray-900 transition"
            >
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Module 03
              </div>
              <h2 className="text-base font-medium mb-2">
                Progress Report
              </h2>
              <p className="text-xs text-gray-400">
                Review architecture, workflow, and prompt optimization process.
              </p>
            </a>
  
          </div>
        </div>
      </main>
    );
  }