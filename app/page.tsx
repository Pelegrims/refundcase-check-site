export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-2xl text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
          RefundCase Check
        </h1>

        <p className="text-zinc-400 text-lg mb-8">
          Confidential case assessment for online investment and crypto-related disputes.
        </p>

        <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition">
          Start Case Review
        </button>
      </div>
    </main>
  );
}
