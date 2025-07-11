import React from "react";

const FeaturesSection = () => {
  return (
    <section className="dark:bg-gray-100 bg-zinc-800 dark:text-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Amazing Features of <span className="text-blue-500">Magic Face</span>
        </h2>
        <p className="text-lg mb-12">
          Upload, Process and Transform faces like never before with AI.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 dark:bg-white bg-zinc-900 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Face Swap</h3>
            <p>Real-time, high-quality face transformation using advanced AI models.</p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 dark:bg-white bg-zinc-900 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p>Your uploaded data is secure. We never store personal images.</p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 dark:bg-white bg-zinc-900 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
            <p>AI magic happens in seconds — no long waits, no delays.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
