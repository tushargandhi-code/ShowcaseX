// app/about/page.tsx
export const metadata = { title: 'About | ShowcaseX' };

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-white via-purple-50 to-purple-100 min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-8 text-center">
        <h1 className="text-4xl font-extrabold text-purple-700">About ShowcaseX</h1>

        <p className="text-gray-700 leading-relaxed">
          ShowcaseX is a lightweight demo web-app built with Next.js, React and Tailwind CSS.
          It demonstrates a clean product-listing flow with filtering, sorting,
          cart context, and responsive design—all in a neat purple theme.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The goal is to showcase frontend skills: component architecture,
          state management, optimistic UX, and accessibility best practices.
          No real checkout here—just mock JSON and localStorage to keep things simple!
        </p>

        <p className="text-gray-700 leading-relaxed">
          Have feedback or want to collaborate? Head over to the&nbsp;
          <span className="font-semibold text-purple-700">Contact</span> page and drop a message.
        </p>
      </section>
    </main>
  );
}
