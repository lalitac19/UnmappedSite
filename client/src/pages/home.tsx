import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from "lucide-react";
import logoImage from "@assets/new logo_1753738743326.jpg";

export default function Home() {
  const handleJoinWaitlist = () => {
    window.open("https://airtable.com/app5Bdx2XiEq5SqXq/pag02eRWPoqXlgTEC/form", "_blank");
  };

  const handleSocialClick = (platform: string, url: string) => {
    console.log(`Social link clicked: ${platform}`);
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-brand-beige">
      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="Unmapped Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold text-black tracking-wide">UNMAPPED</span>
          </div>
          <Button 
            onClick={handleJoinWaitlist}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Join Waitlist
          </Button>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center py-16 lg:py-24">
          <h1 className="text-5xl lg:text-7xl font-bold text-black mb-8 leading-tight">
            Remote working,<br />
            <span className="text-red-600">With Benefits</span>
          </h1>
          <p className="text-xl lg:text-2xl text-black mb-12 max-w-3xl mx-auto leading-relaxed">
            Making WFH more interesting; one café at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={handleJoinWaitlist}
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px]"
            >
              Join Waitlist
            </Button>
            <span className="text-black text-sm">Be the first to know when we launch</span>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 text-center border-t border-gray-300">
          <h2 className="text-3xl font-bold text-black mb-8">Follow us</h2>
          <div className="flex justify-center space-x-8 flex-wrap gap-4">
            <button
              onClick={() => handleSocialClick('instagram', 'https://www.instagram.com/unmapped.club')}
              className="group flex items-center space-x-3 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 min-w-[180px]"
            >
              <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Instagram className="text-white w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-black font-semibold">Instagram</div>
                <div className="text-gray-600 text-sm">@unmapped.club</div>
              </div>
            </button>
            
            <button
              onClick={() => handleSocialClick('linkedin', 'https://www.linkedin.com/company/unmapped-community')}
              className="group flex items-center space-x-3 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 min-w-[180px]"
            >
              <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Linkedin className="text-white w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-black font-semibold">LinkedIn</div>
                <div className="text-gray-600 text-sm">Unmapped Community</div>
              </div>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
