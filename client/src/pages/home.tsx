import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from "lucide-react";
import logoImage from "@assets/NEW UNMAPPED_1753819852900.png";

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
      <header className="w-full py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
        <nav className="max-w-7xl mx-auto flex justify-between items-center relative">
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="Unmapped Logo" 
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden sm:block">
            <span className="text-xl md:text-2xl font-bold brand-navy tracking-wide">UNMAPPED</span>
          </div>
          <Button 
            onClick={handleJoinWaitlist}
            className="bg-brand-red hover:opacity-90 text-white px-4 py-2 md:px-6 md:py-3 rounded-sm font-semibold text-sm md:text-base transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Join Waitlist
          </Button>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center py-8 sm:py-16 lg:py-24 px-4">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold brand-navy mb-6 sm:mb-8 leading-tight">
            Remote working,<br />
            <span className="brand-red">With Benefits</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl brand-navy mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed secondary-font px-4">
            Making WFH more interesting; one café at a time.
          </p>
          <div className="flex justify-center mb-8 sm:mb-16">
            <Button 
              onClick={handleJoinWaitlist}
              className="bg-brand-red hover:opacity-90 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-sm text-base sm:text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Join Waitlist
            </Button>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-8 sm:py-16 text-center border-t brand-charcoal border-opacity-20">
          <h2 className="text-2xl sm:text-3xl font-bold brand-navy mb-6 sm:mb-8">Follow us</h2>
          <div className="flex justify-center space-x-8 sm:space-x-12">
            <button
              onClick={() => handleSocialClick('instagram', 'https://www.instagram.com/unmapped.club')}
              className="group transition-all duration-200 hover:scale-110 p-2"
            >
              <Instagram className="w-6 h-6 sm:w-8 sm:h-8 brand-red stroke-2 hover:opacity-80 transition-all duration-200" style={{ strokeLinejoin: 'miter', strokeLinecap: 'square' }} />
            </button>
            
            <button
              onClick={() => handleSocialClick('linkedin', 'https://www.linkedin.com/company/unmapped-community')}
              className="group transition-all duration-200 hover:scale-110 p-2"
            >
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 brand-red stroke-2 hover:opacity-80 transition-all duration-200" style={{ strokeLinejoin: 'miter', strokeLinecap: 'square' }} />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 mt-12 border-t border-brand-navy/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brand-charcoal/70 text-sm">
            © 2025, Unmapped. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
