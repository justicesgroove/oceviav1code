import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SiDiscord } from "react-icons/si";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 bg-[#0d0d0d00]">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer group">
                <img src="https://images-ext-1.discordapp.net/external/GsPQubs_PlDpDHHXKA4n3eRSPvhXxfIpfZ5yCM3_Ywk/%3Fsize%3D512/https/cdn.discordapp.com/icons/1434687085943459840/6a3dbb90b81aeeaaa97a0219eab5d337.webp?format=webp&width=332&height=332" alt="Logo" className="w-8 h-8 rounded-lg" />
                <span className="text-xl font-bold tracking-tight text-white font-display">Ocevia Systems</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Features</Link>
            <Link href="#pricing" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Pricing</Link>
            <Link href="#docs" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Documentation</Link>
            <Link href="#network" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Network</Link>
            <Link href="#team" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Team</Link>
          </div>

          <div className="flex items-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all rounded-xl px-6">
              <SiDiscord className="mr-2 h-4 w-4" />
              Login with Discord
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
