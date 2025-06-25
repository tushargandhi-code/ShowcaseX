
'use client';

import { useState } from 'react';


export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);                       // demo-only success
  };

  return (
    <main className="bg-gradient-to-br from-white via-purple-50 to-purple-100 min-h-screen">
      <section className="max-w-lg mx-auto px-6 py-20">
        <h1 className="text-3xl font-extrabold text-center text-purple-700 mb-8">
          Contact Us
        </h1>

        {sent ? (
          <p className="bg-white p-6 rounded-xl shadow text-center text-purple-700 font-semibold">
            Thanks! Your message was sent 🚀
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 rounded-xl shadow"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                required
                className="w-full border rounded px-3 py-2"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full border rounded px-3 py-2"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                required
                rows={4}
                className="w-full border rounded px-3 py-2"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </main>
  );
}