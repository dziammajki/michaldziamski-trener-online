import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, Heart } from "lucide-react";
import michalImage from "@/assets/michal-dziamski.jpg";

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "15+ lat doświadczenia",
      description: "W szkoleniu kadry menedżerskiej i zespołów w różnych branżach"
    },
    {
      icon: BookOpen,
      title: "Ciągły rozwój",
      description: "Certyfikowane metody coachingowe i najnowsze trendy w rozwoju organizacji"
    },
    {
      icon: Users,
      title: "500+ uczestników",
      description: "Przeszkolonych profesjonalistów w małych i dużych organizacjach"
    },
    {
      icon: Heart,
      title: "Indywidualne podejście",
      description: "Każde szkolenie dostosowuję do unikalnych potrzeb uczestników"
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              O mnie
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Pozwól, że opowiem Ci o swojej drodze i podejściu do rozwoju ludzi i organizacji.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={michalImage} 
                  alt="Michał Dziamski - Trener biznesowy" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-primary">
                Pasja do rozwoju ludzi
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Od ponad 15 lat towarzyszę ludziom i organizacjom w ich rozwoju. 
                  Zaczynałem jako menedżer w korporacji, gdzie na własnej skórze 
                  doświadczyłem wyzwań związanych z budowaniem efektywnych zespołów.
                </p>
                
                <p>
                  Ta praktyczna wiedza stała się fundamentem mojego podejścia do szkoleń. 
                  Nie uczę teorii oderwanych od rzeczywistości – dzielę się sprawdzonymi 
                  metodami, które sam stosowałem i widziałem ich efekty.
                </p>
                
                <p>
                  Wierzę, że każda osoba ma w sobie potencjał do wzrostu. Moją rolą 
                  jest pomóc go odkryć i rozwinąć, tworząc bezpieczną przestrzeń 
                  do uczenia się i eksperymentowania.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-serif font-semibold text-primary">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 bg-muted/30">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-serif font-semibold text-primary">
                Moje podejście do szkoleń
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Każde szkolenie traktuję jako unikalną okazję do prawdziwej zmiany. 
                Łączę sprawdzone metody z elastycznym podejściem, dostosowując treści 
                do specyfiki grupy. Nie ma gotowych recept – jest autentyczna praca 
                nad rozwojem umiejętności, które rzeczywiście się przydadzą.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;