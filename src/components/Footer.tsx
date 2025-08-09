import { Heart, Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-cream border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-primary">Cany Express</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Élevage professionel de Teckels à Heugnes. Nous élevons nos chiots avec passion 
              pour vous offrir des compagnons fidèles et en bonne santé.
            </p>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📞 +33 7 44 10 19 79</p>
              <p>📧 etablissementcanin66@gmail.com</p>
              <p>📍 Heugnes, France</p>
            </div>
          </div>

          {/* Social media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1BTYX3FBmY/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/adoptionteckel?igsh=Y3Nhb3FoajYONmdm&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Cany Express. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};