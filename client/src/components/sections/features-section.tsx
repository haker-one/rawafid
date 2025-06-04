import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Heart, Globe } from "lucide-react";
import { content } from "@/lib/content";

const iconMap = {
  BookOpen,
  Users,
  Heart,
  Globe
};

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-amiri font-bold text-islamic-green mb-4">
            محاور عملنا الأساسية
          </h3>
          <p className="text-lg text-gray-600 font-cairo max-w-3xl mx-auto">
            نعمل على عدة محاور مترابطة لتحقيق رؤيتنا في بناء مجتمع مسلم واعٍ ومثقف
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            const colors = [
              "bg-gradient-to-br from-fresh-green/10 to-islamic-green/10 text-islamic-green",
              "bg-gradient-to-br from-ocean-blue/10 to-blue-600/10 text-ocean-blue",
              "bg-gradient-to-br from-red-500/10 to-pink-500/10 text-red-600",
              "bg-gradient-to-br from-golden/10 to-orange-500/10 text-golden"
            ];
            
            return (
              <Card key={index} className={`text-center p-6 rounded-xl hover-lift ${colors[index]}`}>
                <CardContent className="p-0">
                  <div className="bg-current text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 opacity-90">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-amiri font-bold mb-3">{feature.title}</h4>
                  <p className="text-gray-600 font-cairo leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
