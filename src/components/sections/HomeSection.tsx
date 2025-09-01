import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, TrendingUp, Heart } from "lucide-react";

const HomeSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Rozwój zespołów",
      description: "Budowanie kultury współpracy i efektywnej komunikacji w organizacjach każdej wielkości."
    },
    {
      icon: Target,
      title: "Konkretne rezultaty",
      description: "Skupiam się na praktycznych umiejętnościach, które od razu można zastosować w pracy."
    },
    {
      icon: TrendingUp,
      title: "Wzrost wydajności",
      description: "Moje szkolenia przekładają się na mierzalne korzyści biznesowe i osobiste sukcesy."
    },
    {
      icon: Heart,
      title: "Podejście z pasją",
      description: "Każde szkolenie prowadzę z autentycznym zaangażowaniem i troską o rozwój uczestników."
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              Dlaczego warto ze mną współpracować?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Od lat pomagam ludziom i firmom osiągać cele poprzez rozwój umiejętności miękkich, 
              liderskich i komunikacyjnych. Moje doświadczenie i indywidualne podejście 
              gwarantują efektywne i trwałe zmiany.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-primary">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;