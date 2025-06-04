import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { content } from "@/lib/content";

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50 geometric-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-amiri font-bold text-islamic-green mb-4">
            مشاريعنا وخدماتنا
          </h3>
          <p className="text-lg text-gray-600 font-cairo max-w-3xl mx-auto">
            نقدم مجموعة متنوعة من المشاريع والخدمات التي تخدم المجتمع المسلم في مختلف المجالات
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {content.services.map((service, index) => (
            <Card key={index} className="hover-lift bg-white shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-amiri font-bold text-islamic-green">
                    {service.title}
                  </CardTitle>
                  <Badge 
                    variant={service.status === "نشط" ? "default" : "secondary"}
                    className={service.status === "نشط" ? "bg-fresh-green" : ""}
                  >
                    {service.status}
                  </Badge>
                </div>
                <Badge variant="outline" className="w-fit">
                  {service.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-cairo leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link href={`/project/${service.slug}`}>
                  <Button className="w-full bg-islamic-green hover:bg-islamic-green/90 text-white font-tajawal">
                    اعرف المزيد
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
