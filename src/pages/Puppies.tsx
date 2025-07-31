import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PuppyCard } from "@/components/PuppyCard";

const Puppies = () => {
  const puppies = [
    {
      name: "Alex",
      type: "Teckel Standard",
      price: "1500€",
      image: "/images/chiens/alex-teckel.jpeg"
    },
    {
      name: "Vanelle",
      type: "Teckel Nain",
      price: "1800€",
      image: "/images/chiens/vanelle-teckel.jpeg"
    },
    {
      name: "Joe",
      type: "Teckel Standard",
      price: "1700€",
      image: "/images/chiens/joe-teckel.jpeg"
    },
    {
      name: "Dumbo",
      type: "Kanichen",
      price: "1800€",
      image: "/images/chiens/dumbo-teckel.jpeg"
    },
    {
      name: "Leandra",
      type: "Kanichen",
      price: "1500€",
      image: "/images/chiens/leandra-teckel.jpeg"
    },
    {
      name: "Naelle",
      type: "Kanichen",
      price: "1800€",
      image: "/images/chiens/naelle-teckel.jpeg"
    },
    {
      name: "Max",
      type: "Teckel Nain",
      price: "1500€",
      image: "/images/chiens/max-teckel.jpeg"
    },
    {
      name: "Portée de nains disponible",
      type: "Teckel Nain",
      price: "1600€",
      isReservation: true,
      reservationPrice: "600€",
      image: "/images/chiens/portee-nains.jpeg"
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
              Nos adorables Teckels disponibles
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos chiots Teckels élevés avec amour. Chaque chiot est unique, 
              socialisé et prêt à rejoindre sa nouvelle famille. Contactez-nous pour 
              en savoir plus sur nos compagnons disponibles.
            </p>
          </div>

          {/* Puppies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {puppies.map((puppy, index) => (
              <PuppyCard
                key={index}
                name={puppy.name}
                type={puppy.type}
                price={puppy.price}
                image={puppy.image}
                isReservation={puppy.isReservation}
                reservationPrice={puppy.reservationPrice}
              />
            ))}
          </div>

          {/* Information Section */}
          <div className="mt-16 bg-cream rounded-lg p-8 border-2 border-primary/10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Informations Importantes
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Tous nos chiots partent avec leurs vaccins à jour, vermifuges, 
                  certificat de bonne santé vétérinaire et leur carnet de santé.
                </p>
                <p>
                  Une période d'adaptation est incluse avec chaque adoption. 
                  Nous restons disponibles pour vous conseiller et vous accompagner.
                </p>
                <p className="font-semibold text-primary">
                  N'hésitez pas à nous contacter pour organiser une visite 
                  ou obtenir plus d'informations sur nos compagnons !
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Puppies;
