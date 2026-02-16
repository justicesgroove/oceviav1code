import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#020617] p-4 text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] bg-blue-600/10 blur-[100px] rounded-full" />
      </div>
      
      <Card className="w-full max-w-md bg-white/[0.02] border-white/10 backdrop-blur-xl shadow-2xl">
        <CardContent className="pt-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
              <AlertCircle className="h-10 w-10 text-blue-400" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-3 font-display">Page Not Found</h1>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Sorry, the page that you are looking for is currently not available.
          </p>

          <Link href="/">
            <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl h-12">
              <Home className="mr-2 h-5 w-5" />
              Return Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
