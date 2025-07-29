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
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="Unmapped Logo" 
              className="w-16 h-16 object-contain"
            />
          </div>
          <Button 
            onClick={handleJoinWaitlist}
            className="bg-brand-red hover:opacity-90 text-white px-6 py-3 rounded-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Join Waitlist
          </Button>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center py-16 lg:py-24">
          <h1 className="text-5xl lg:text-7xl font-bold brand-navy mb-8 leading-tight">
            Remote working,<br />
            <span className="brand-red">With Benefits</span>
          </h1>
          <p className="text-xl lg:text-2xl brand-navy mb-12 max-w-3xl mx-auto leading-relaxed">
            Making WFH more interesting; one café at a time.
          </p>
          <div className="flex justify-center mb-16">
            <Button 
              onClick={handleJoinWaitlist}
              className="bg-brand-red hover:opacity-90 text-white px-10 py-4 rounded-sm text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Join Waitlist
            </Button>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 text-center border-t brand-charcoal border-opacity-20">
          <h2 className="text-3xl font-bold brand-navy mb-8">Follow us</h2>
          <div className="flex justify-center space-x-12">
            <button
              onClick={() => handleSocialClick('instagram', 'https://www.instagram.com/unmapped.club')}
              className="group transition-all duration-200 hover:scale-110"
            >
              <Instagram className="w-8 h-8 brand-navy stroke-2 hover:brand-red transition-colors duration-200" />
            </button>
            
            <button
              onClick={() => handleSocialClick('linkedin', 'https://www.linkedin.com/company/unmapped-community')}
              className="group transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="w-8 h-8 brand-navy stroke-2 hover:brand-red transition-colors duration-200" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
