import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { content } from "@/lib/content";

export default function About() {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-amiri font-bold text-islamic-green mb-6">
            من نحن
          </h1>
          <p className="text-xl text-gray-600 font-cairo">
            تعرف على قصة روافد ورحلتنا في خدمة الأمة الإسلامية
          </p>
        </div>

        <Card className="mb-8 shadow-lg">
          <CardHeader className="bg-islamic-gradient text-white rounded-t-lg">
            <CardTitle className="text-2xl font-amiri text-center">
              حول مشروع روافد
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none font-cairo leading-relaxed text-gray-700">
              {content.aboutText.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center hover-lift">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-islamic-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2024</span>
              </div>
              <h3 className="text-lg font-tajawal font-semibold text-islamic-green mb-2">
                بداية المشروع
              </h3>
              <p className="text-gray-600 font-cairo text-sm">
                انطلق المشروع برؤية طموحة لخدمة الأمة
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-ocean-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4+</span>
              </div>
              <h3 className="text-lg font-tajawal font-semibold text-ocean-blue mb-2">
                مشاريع نشطة
              </h3>
              <p className="text-gray-600 font-cairo text-sm">
                مشاريع متنوعة في التعليم والإعلام والمجتمع
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">∞</span>
              </div>
              <h3 className="text-lg font-tajawal font-semibold text-golden mb-2">
                أثر مستمر
              </h3>
              <p className="text-gray-600 font-cairo text-sm">
                تأثير إيجابي مستدام في المجتمع المسلم
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-islamic-green/5 border-islamic-green/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-amiri font-bold text-islamic-green mb-4">
              قيمنا الأساسية
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Badge className="bg-islamic-green text-white">الأصالة</Badge>
                <p className="text-sm font-cairo text-gray-600">التمسك بالقيم الإسلامية الأصيلة</p>
              </div>
              <div className="space-y-2">
                <Badge className="bg-ocean-blue text-white">الابتكار</Badge>
                <p className="text-sm font-cairo text-gray-600">استخدام أحدث التقنيات والأساليب</p>
              </div>
              <div className="space-y-2">
                <Badge className="bg-golden text-white">التعاون</Badge>
                <p className="text-sm font-cairo text-gray-600">العمل الجماعي لخدمة الأمة</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
