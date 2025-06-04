import { useRoute } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Target, Star } from "lucide-react";
import { content } from "@/lib/content";
import { Link } from "wouter";

export default function Project() {
  const [, params] = useRoute("/project/:slug");
  const project = content.services.find(p => p.slug === params?.slug);

  if (!project) {
    return (
      <main className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-amiri font-bold text-red-600 mb-6">
            المشروع غير موجود
          </h1>
          <p className="text-lg text-gray-600 font-cairo mb-8">
            عذراً، المشروع المطلوب غير متوفر أو تم حذفه.
          </p>
          <Link href="/services">
            <Button className="bg-islamic-green hover:bg-islamic-green/90 text-white font-tajawal">
              العودة للخدمات
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center space-x-reverse space-x-2 text-sm font-cairo">
            <Link href="/" className="text-islamic-green hover:underline">الرئيسية</Link>
            <ArrowRight className="h-4 w-4 text-gray-400" />
            <Link href="/services" className="text-islamic-green hover:underline">الخدمات</Link>
            <ArrowRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600">{project.title}</span>
          </nav>
        </div>

        {/* Project Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl font-amiri font-bold text-islamic-green">
              {project.title}
            </h1>
            <Badge 
              variant={project.status === "نشط" ? "default" : "secondary"}
              className={`text-lg px-4 py-2 ${project.status === "نشط" ? "bg-fresh-green" : ""}`}
            >
              {project.status}
            </Badge>
          </div>
          <Badge variant="outline" className="text-base px-6 py-2 mb-6">
            {project.category}
          </Badge>
          <p className="text-xl text-gray-600 font-cairo max-w-3xl mx-auto leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Description */}
            <Card className="shadow-lg">
              <CardHeader className="bg-islamic-green text-white">
                <CardTitle className="text-2xl font-amiri">نبذة عن المشروع</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none font-cairo leading-relaxed text-gray-700">
                  <p className="text-lg">{project.fullDescription}</p>
                </div>
              </CardContent>
            </Card>

            {/* Project Goals */}
            <Card className="shadow-lg">
              <CardHeader className="bg-ocean-blue text-white">
                <CardTitle className="flex items-center text-2xl font-amiri">
                  <Target className="ml-3 h-8 w-8" />
                  أهداف المشروع
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {project.goals.map((goal, index) => (
                    <div key={index} className="flex items-start space-x-reverse space-x-4">
                      <CheckCircle className="text-ocean-blue flex-shrink-0 mt-1 h-6 w-6" />
                      <p className="text-gray-700 font-cairo text-lg">{goal}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Achievements */}
            <Card className="shadow-lg">
              <CardHeader className="bg-golden text-white">
                <CardTitle className="flex items-center text-2xl font-amiri">
                  <Star className="ml-3 h-8 w-8" />
                  إنجازات المشروع
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {project.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-reverse space-x-4">
                      <CheckCircle className="text-golden flex-shrink-0 mt-1 h-6 w-6" />
                      <p className="text-gray-700 font-cairo text-lg">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info Card */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gray-800 text-white">
                <CardTitle className="text-xl font-amiri">معلومات المشروع</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-tajawal font-semibold text-gray-800 mb-2">التصنيف</h4>
                    <Badge variant="outline" className="text-base px-3 py-1">
                      {project.category}
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-tajawal font-semibold text-gray-800 mb-2">الحالة</h4>
                    <Badge 
                      variant={project.status === "نشط" ? "default" : "secondary"}
                      className={`text-base px-3 py-1 ${project.status === "نشط" ? "bg-fresh-green" : ""}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Projects */}
            <Card className="shadow-lg">
              <CardHeader className="bg-islamic-green text-white">
                <CardTitle className="text-xl font-amiri">مشاريع أخرى</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {content.services
                    .filter(p => p.id !== project.id)
                    .slice(0, 3)
                    .map((relatedProject) => (
                    <Link key={relatedProject.id} href={`/project/${relatedProject.slug}`}>
                      <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                        <h5 className="font-tajawal font-semibold text-islamic-green mb-2">
                          {relatedProject.title}
                        </h5>
                        <p className="text-sm text-gray-600 font-cairo line-clamp-2">
                          {relatedProject.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-islamic-gradient text-white">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-amiri font-bold mb-4">
                  ساهم في المشروع
                </h4>
                <p className="mb-6 font-cairo opacity-90">
                  انضم إلينا وساهم في تطوير هذا المشروع المبارك
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-golden text-islamic-green hover:bg-golden/90 font-tajawal font-semibold">
                    تواصل معنا
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}