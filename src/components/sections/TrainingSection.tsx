import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Clock, Users, CheckCircle } from "lucide-react";

interface TrainingSectionProps {
  onContactFormOpen: () => void;
}

const TrainingSection = ({ onContactFormOpen }: TrainingSectionProps) => {
  const trainings = [
    {
      title: "Skuteczna komunikacja w zespole",
      duration: "2 dni",
      participants: "8-12 osób",
      category: "Komunikacja",
      description: "Rozwój umiejętności komunikacyjnych, aktywnego słuchania i konstruktywnego przekazywania informacji zwrotnej.",
      benefits: [
        "Lepsza współpraca w zespole",
        "Redukcja konfliktów",
        "Efektywniejsze spotkania",
        "Wzrost zaufania między pracownikami"
      ]
    },
    {
      title: "Przywództwo i motywowanie zespołu",
      duration: "3 dni",
      participants: "6-10 osób",
      category: "Liderstwo",
      description: "Kształtowanie kompetencji liderskich, techniki motywowania i budowania zaangażowania zespołu.",
      benefits: [
        "Silniejsze przywództwo",
        "Wyższa motywacja pracowników",
        "Lepsze zarządzanie zmianą",
        "Rozwój kultury organizacyjnej"
      ]
    },
    {
      title: "Zarządzanie czasem i priorytetami",
      duration: "1 dzień",
      participants: "10-15 osób",
      category: "Efektywność",
      description: "Praktyczne techniki planowania, ustalania priorytetów i zwiększania produktywności osobistej.",
      benefits: [
        "Lepsza organizacja pracy",
        "Redukcja stresu",
        "Wyższa produktywność",
        "Work-life balance"
      ]
    },
    {
      title: "Budowanie relacji z klientem",
      duration: "2 dni",
      participants: "8-12 osób",
      category: "Sprzedaż",
      description: "Umiejętności budowania długotrwałych relacji biznesowych i profesjonalnej obsługi klienta.",
      benefits: [
        "Wyższa satysfakcja klientów",
        "Lepsze wyniki sprzedaży",
        "Silniejsze relacje biznesowe",
        "Profesjonalny wizerunek firmy"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              Oferta szkoleń
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Każde szkolenie dostosowuję do specyfiki Twojej organizacji. 
              Łączę teorię z praktyką, zapewniając konkretne narzędzia do codziennego zastosowania.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainings.map((training, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {training.category}
                    </Badge>
                    <div className="flex gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {training.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {training.participants}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-serif">
                    {training.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {training.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-primary">Korzyści dla uczestników:</h4>
                    <ul className="space-y-2">
                      {training.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button 
                      onClick={onContactFormOpen}
                      className="flex-1"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Zapisz się
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => window.location.href = 'tel:+48602269495'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Zadzwoń
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 p-8 bg-muted/30 rounded-lg">
            <h3 className="text-xl font-serif font-semibold text-primary mb-4">
              Potrzebujesz szkolenia dostosowanego do Twoich potrzeb?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Oprócz standardowej oferty, tworzę również szkolenia na zamówienie, 
              idealnie dopasowane do specyfiki Twojej branży i celów organizacji.
            </p>
            <Button size="lg" onClick={onContactFormOpen}>
              Skontaktuj się w sprawie indywidualnej oferty
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;