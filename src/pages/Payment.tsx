import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Shield, MessageCircle, CheckCircle } from "lucide-react";

const Payment = () => {
  const handleContact = () => {
    const phoneNumber = "33744101979";
    const message = "Bonjour, j'aimerais avoir des informations sur les modalités de paiement pour l'adoption d'un chiot.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const paymentSteps = [
    {
      step: "1",
      title: "Réservation",
      description: "Contactez-nous pour réserver votre chiot"
    },
    {
      step: "2",
      title: "Acompte",
      description: "Versement de l'acompte pour confirmer la réservation"
    },
    {
      step: "3",
      title: "Solde",
      description: "Paiement du solde avant la remise du chiot"
    },
    {
      step: "4",
      title: "Adoption",
      description: "Remise de votre nouveau compagnon"
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
              Méthodes de Paiement
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Le paiement s'effectue par virement bancaire. Une fois la réservation confirmée, 
              les informations de paiement vous seront envoyées par email ou WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid gap-8 mb-16">
            {/* Payment Information */}
            {/* <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <CreditCard className="h-6 w-6 text-primary" />
                  Informations Bancaires
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-cream rounded-lg p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground">BÉNÉFICIAIRE</p>
                    <p className="text-lg font-bold text-foreground">Ange Anahis</p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground">IBAN</p>
                    <p className="text-lg font-mono text-foreground break-all">
                      FR76 1723 8000 0100 2846 7243 250
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground">BIC</p>
                    <p className="text-lg font-mono text-foreground">SCSYFRP2</p>
                  </div>
                </div>

                <div className="text-center">
                  <Button onClick={handleContact} variant="contact" className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contacter pour plus d'informations
                  </Button>
                </div>
              </CardContent>
            </Card> */}

            {/* Security & Process */}
            <div className="space-y-6">
              <Card className="border-2 border-primary/20">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2 text-xl">
                    <Shield className="h-6 w-6 text-primary" />
                    Sécurité & Confiance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Paiement sécurisé par virement bancaire
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Reçu officiel fourni pour chaque transaction
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Contrat d'adoption en bonne et due forme
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Garantie santé et support post-adoption
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Payment Process */}
          <Card className="bg-gradient-to-r from-cream to-secondary border-2 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">
                Processus d'Adoption
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {paymentSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="flex flex-col items-center mb-4">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-2">
                        {step.step}
                      </div>
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Questions sur le Paiement ?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Notre équipe est disponible pour répondre à toutes vos questions 
                  concernant les modalités de paiement et le processus d'adoption.
                </p>
                <Button onClick={handleContact} variant="warm" size="lg">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Nous Contacter
                </Button>
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

export default Payment;