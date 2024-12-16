import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-black/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Codewhare AI</h3>
            <p className="text-gray-400">Empowering businesses with intelligent AI solutions.</p>
          </div>
          <div className="md:text-right">
            <div className="space-x-4 mb-4">
              <Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link>
            </div>
            <p className="text-gray-400">Contact us: info@codewhare.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Codewhare AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}