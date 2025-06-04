import { Button } from "@/components/ui/button";
import { Play, Palette } from "lucide-react";
import { Link } from "wouter";
import { content } from "@/lib/content";

export default function HeroSection() {
  return (
    <section className="islamic-gradient text-white py-16 pattern-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-amiri font-bold mb-6 arabic-text-shadow">
          {content.hero.title}
        </h2>
        <p className="text-xl md:text-2xl mb-4 font-amiri opacity-90">
          {content.hero.subtitle}
        </p>
        <p className="text-lg md:text-xl mb-8 font-cairo opacity-90 max-w-4xl mx-auto leading-relaxed">
          {content.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/services">
            <Button className="bg-golden text-islamic-green px-8 py-4 rounded-xl text-lg font-tajawal font-semibold hover:bg-opacity-90 transition-all hover-lift shadow-lg">
              <Palette className="ml-2 h-5 w-5" />
              اكتشف مشاريعنا
            </Button>
          </Link>
          <Link href="/vision">
            <Button variant="outline" className="border-3 border-white bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-tajawal font-semibold hover:bg-white hover:text-islamic-green transition-all shadow-lg">
              <Play className="ml-2 h-5 w-5" />
              تعرف على رؤيتنا
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
