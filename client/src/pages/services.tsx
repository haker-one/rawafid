import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Users, Tv, FileText, Globe } from "lucide-react";
import { Link } from "wouter";
import { content } from "@/lib/content";

const serviceIcons = {
  "برنامج رفيق": BookOpen,
  "مشروع تعافي": Heart,
  "مشروع قضايا": Users,
  "مشروع هذه سبيلي": Globe
};

export default function Services() {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-amiri font-bold text-islamic-green mb-6">
            خدماتنا ومشاريعنا
          </h1>
          <p className="text-xl text-gray-600 font-cairo max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات والمشاريع التي تهدف إلى خدمة المجتمع المسلم في مختلف المجالات
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {content.services.map((service, index) => {
            const IconComponent = serviceIcons[service.title as keyof typeof serviceIcons] || Globe;
            
            return (
              <Card key={index} className="hover-lift bg-white shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="bg-islamic-green text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
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
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-cairo leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link href={`/project/${service.slug}`}>
                    <Button className="w-full bg-islamic-green hover:bg-islamic-green/90 text-white font-tajawal">
                      اعرف المزيد
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-islamic-gradient text-white">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-3xl font-amiri font-bold mb-6">
                مشاريع قادمة
              </h3>
              <p className="text-xl mb-8 opacity-90 font-cairo">
                نعمل بجد لتطوير المزيد من المشاريع التي تخدم أمتنا الإسلامية
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 rounded-lg p-6">
                  <Users className="h-12 w-12 mx-auto mb-4" />
                  <h4 className="font-tajawal font-semibold mb-2">منصة التعاون المجتمعي</h4>
                  <p className="text-sm opacity-90 font-cairo">ربط المتطوعين بالمؤسسات الخيرية</p>
                </div>
                <div className="bg-white/20 rounded-lg p-6">
                  <BookOpen className="h-12 w-12 mx-auto mb-4" />
                  <h4 className="font-tajawal font-semibold mb-2">مكتبة المعرفة الإسلامية</h4>
                  <p className="text-sm opacity-90 font-cairo">مصادر موثقة للعلوم الشرعية</p>
                </div>
                <div className="bg-white/20 rounded-lg p-6">
                  <Globe className="h-12 w-12 mx-auto mb-4" />
                  <h4 className="font-tajawal font-semibold mb-2">شبكة الأمة العالمية</h4>
                  <p className="text-sm opacity-90 font-cairo">تواصل المسلمين حول العالم</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
