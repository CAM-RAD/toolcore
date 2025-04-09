import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Toolcore</title>
        <meta name="description" content="Store, share, and run AI prompt cores effortlessly." />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center p-10 text-center bg-white dark:bg-black text-gray-900 dark:text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">🚀 Welcome to Toolcore</h1>
        <p className="text-lg max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
          Your lightweight home for AI prompt cores. Store, share, and reference prompts with clean links and zero friction.
        </p>

        <div className="mt-10">
          <a
            href="https://github.com/CAM-RAD/toolcore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-sm font-semibold hover:opacity-80 transition"
          >
            View on GitHub
          </a>
        </div>
      </main>
    </>
  );
}
