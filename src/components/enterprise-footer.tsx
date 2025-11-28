"use client";

export const EnterpriseFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 py-12 px-4 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-light text-white tracking-tight mb-2">
              AgenticOS
            </h3>
            <p className="text-zinc-500 text-sm font-light">
              Autonomous Enterprise Infrastructure
            </p>
          </div>

          <div className="flex gap-8 text-sm text-zinc-500 font-light">
            <a href="#" className="hover:text-white transition-colors">
              Documentation
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-900 text-center text-zinc-600 text-sm font-light">
          © {currentYear} AgenticOS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};