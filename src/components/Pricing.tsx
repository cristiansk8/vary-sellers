import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type Plan = {
  title: string;
  price: string;
  features: string[];
  buttonLabel: string;
  highlighted?: boolean;
  variant?: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost";
};

const plans: Plan[] = [
  {
    title: "Basico",
    price: "0",
    features: ["Landing page", "Informes basicos de datos", "Soporte por Email"],
    buttonLabel: "Empezar",
    variant: "outline"
  },
  {
    title: "Empresa",
    price: "50.000",
    features: ["Landing page administrable", "Informes avanzado de datos", "Soporte prioritario"],
    buttonLabel: "Empezar",
    highlighted: true,
    variant: "outline"
  },
  {
    title: "Pro",
    price: "ajustable",
    features: ["Landing page administrable", "Informes avanzado de datos", "Soporte 24/7", "Integraciones con terceros", "Capacitaciones", "Apoyo tecnologico"],
    buttonLabel: "Contactar equipo ventas",
    variant: "outline"
  }
];

export function Pricing() {
  return (
    <section className="bg-gray-50" id="pricing">
      <div className="py-12 md:py-24 w-full max-w-4xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Elije tu plan</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Selecciona el plan perfecto para tus necesidades. Puedes cambiar de plan en cualquier momento.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <Card key={index} className={`${plan.highlighted ? 'border-blue-600' : ''} hover:shadow-lg`}>
                <CardHeader>
                  <CardTitle className="text-gray-900">{plan.title}</CardTitle>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600">/mes</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <Check className="mr-2 h-4 w-4 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.variant || 'default'}>
                    {plan.buttonLabel}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}