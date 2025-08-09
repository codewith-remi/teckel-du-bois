import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Shield, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Notre amour pour les Teckels guide chacune de nos actions."
    },
    {
      icon: Users,
      title: "Famille",
      description: "Nos chiots grandissent dans un environnement familial chaleureux."
    },
    {
      icon: Shield,
      title: "Santé",
      description: "Nous garantissons la santé et le bien-être de nos chiots."
    },
    {
      icon: Award,
      title: "Qualité",
      description: "Nous sélectionnons avec soin nos reproducteurs."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Qui sommes-nous ?
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Candi Express est un élevage professionel situé à Heugnes. Nos chiots grandissent 
                dans un environnement aimant et sécurisé. Notre objectif est d'offrir à chaque 
                famille un chiot équilibré, joyeux et en bonne santé. Nous sommes disponibles 
                pour vous accompagner avant, pendant et après l'adoption.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Depuis plusieurs années, nous partageons notre vie avec ces merveilleux 
                  compagnons que sont les Teckels. Ce qui a commencé comme une passion 
                  personnelle est devenu notre mission : élever des chiots en bonne santé 
                  et bien socialisés.
                </p>
                <p>
                  Chaque chiot est élevé avec amour dans notre foyer professionel. Ils sont 
                  habitués aux bruits de la maison, aux enfants, et bénéficient d'une 
                  socialisation précoce qui les prépare parfaitement à leur nouvelle vie.
                </p>
                <p>
                  Nous suivons rigoureusement les protocoles vétérinaires et nos chiots 
                  partent avec tous leurs vaccins, vermifuges, et un certificat de bonne santé.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cream to-secondary rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-cream via-secondary to-accent flex items-center justify-center">
                  <Heart className="h-24 w-24 text-primary/30" />
                </div>
              </div>
            </div>
          </div>

          {/* Commitment Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-cream to-secondary border-2 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Notre Engagement
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Nous nous engageons à vous accompagner tout au long de la vie de votre 
                  compagnon. N'hésitez pas à nous contacter pour des conseils ou des questions, 
                  même après l'adoption. Votre satisfaction et le bien-être de nos chiots 
                  sont notre priorité absolue.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;