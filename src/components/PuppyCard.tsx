import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle } from "lucide-react";

interface PuppyCardProps {
  name: string;
  type: string;
  price: string;
  image?: string;
  isReservation?: boolean;
  reservationPrice?: string;
}

export const PuppyCard = ({ 
  name, 
  type, 
  price, 
  image, 
  isReservation = false, 
  reservationPrice 
}: PuppyCardProps) => {
  const handleContact = () => {
    const phoneNumber = "33745557441";
    const message = `Bonjour, je suis intéressé(e) par ${name} (${type}). Pouvez-vous me donner plus d'informations ?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 bg-card">
      <CardContent className="p-0">
        {/* Image placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-cream to-secondary rounded-t-lg overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-cream to-secondary flex items-center justify-center">
              <Heart className="h-12 w-12 text-primary/30" />
            </div>
          )}
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-background/80 text-primary">
              {type}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-primary">{price}</p>
              {isReservation && reservationPrice && (
                <p className="text-sm text-muted-foreground">
                  Réservation : {reservationPrice}
                </p>
              )}
            </div>
          </div>

          <Button 
            onClick={handleContact}
            variant="warm" 
            className="w-full"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Contacter
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};