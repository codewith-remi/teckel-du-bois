import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Facebook, Instagram, Heart, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-teckel.jpg";

const Index = () => {
  const handlePhoneClick = () => {
    const phoneNumber = "33744101979";
    const message = "Bonjour, je suis intéressé(e) par vos teckels. Pouvez-vous me donner plus d'informations ?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:etablissementcanin66@gmail.com";
  };

  const features = [
    {
      icon: Heart,
      title: "Élevage Professionnel",
      description: "Nos chiots grandissent dans un environnement aimant et chaleureux"
    },
    {
      icon: Star,
      title: "Santé Garantie",
      description: "Tous nos chiots partent avec certificat vétérinaire et vaccins"
    },
    {
      icon: Users,
      title: "Accompagnement",
      description: "Support et conseils avant, pendant et après l'adoption"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Teckel du Bois" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-pulse-soft">
            Bienvenue chez<br />
            <span className="text-gold">Cany Express</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Adoptez un compagnon fidèle, plein d'amour et de caractère
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-80">
            Nous sommes passionnés par les Teckels et mettons tout notre cœur à élever 
            des chiots en bonne santé, bien socialisés et prêts à rejoindre leur nouvelle famille.
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 font-medium">
            Propriétaire : <span className="text-gold">Marie Laure Discala</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/puppies">
              <Button variant="warm" size="lg" className="text-lg px-8">
                <Heart className="h-5 w-5 mr-2" />
                Voir nos Chiots
              </Button>
            </Link>
            <Button 
              onClick={handlePhoneClick}
              variant="contact" 
              size="lg" 
              className="text-lg px-8 bg-white/20 hover:bg-white/30 text-white border-white/30"
            >
              <Phone className="h-5 w-5 mr-2" />
              Nous Contacter
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contactez-nous
            </h2>
            <p className="text-lg text-muted-foreground">
              Nous sommes à votre disposition pour répondre à toutes vos questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Phone */}
            <Card className="text-center hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-primary/20" onClick={handlePhoneClick}>
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Téléphone</h3>
                <p className="text-primary font-medium">+33 7 44 10 19 79</p>
                <p className="text-sm text-muted-foreground mt-1">Cliquez pour WhatsApp</p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="text-center hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-primary/20" onClick={handleEmailClick}>
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                <p className="text-primary font-medium text-sm">etablissementcanin66@gmail.com</p>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Adresse</h3>
                <p className="text-primary font-medium">Heugnes, France</p>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center space-x-2">
                  <a
                    href="https://www.facebook.com/share/1BTYX3FBmY/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <Facebook className="h-6 w-6 text-primary" />
                  </a>
                  <a
                    href="https://www.instagram.com/adoptionteckel?igsh=Y3Nhb3FoajYONmdm&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-primary" />
                  </a>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Réseaux Sociaux</h3>
                <p className="text-muted-foreground text-sm">Suivez-nous</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez ce qui fait de Candi Express le choix idéal pour votre future adoption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gradient-to-br from-primary/10 to-caramel/10 rounded-full">
                      <feature.icon className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
