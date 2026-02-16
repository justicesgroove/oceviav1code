import { SiDiscord, SiGithub, SiX } from "react-icons/si";
import { useCreateLead } from "@/hooks/use-leads";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const { mutate: subscribe, isPending } = useCreateLead();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    subscribe({ email }, {
      onSuccess: () => setEmail("")
    });
  };

  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="https://images-ext-1.discordapp.net/external/GsPQubs_PlDpDHHXKA4n3eRSPvhXxfIpfZ5yCM3_Ywk/%3Fsize%3D512/https/cdn.discordapp.com/icons/1434687085943459840/6a3dbb90b81aeeaaa97a0219eab5d337.webp?format=webp&width=332&height=332" alt="Logo" className="w-6 h-6" />
              <span className="text-xl font-bold font-display text-white">Ocevia Systems</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              The ultimate bridge between Discord and Roblox. Manage your community with precision and automate your workflows.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<SiDiscord className="w-5 h-5" />} />
              <SocialLink icon={<SiX className="w-5 h-5" />} />
              <SocialLink icon={<SiGithub className="w-5 h-5" />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Product</h4>
            <ul className="space-y-4">
              <li><FooterLink href="#">Features</FooterLink></li>
              <li><FooterLink href="#">Integrations</FooterLink></li>
              <li><FooterLink href="#">Pricing</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display">Stay Updated</h4>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 w-full"
              />
              <button
                type="submit"
                disabled={isPending}
                className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-4 py-2 transition-all disabled:opacity-50"
              >
                {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : "→"}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Ocevia Systems. All rights reserved.</p>
          <div className="flex gap-8">
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Terms</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a href={href} className="text-sm text-slate-400 hover:text-white transition-colors">
      {children}
    </a>
  );
}
