import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Users, Shield } from "lucide-react";
import { content } from "@/lib/content";

export default function Contact() {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-amiri font-bold text-islamic-green mb-6">
            تواصل معنا
          </h1>
          <p className="text-xl text-gray-600 font-cairo max-w-3xl mx-auto">
            {content.contactInfo.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader className="bg-islamic-green text-white">
                <CardTitle className="text-2xl font-amiri">
                  كن جزءاً من المشروع
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-reverse space-x-4">
                    <Users className="text-islamic-green flex-shrink-0 mt-1 h-6 w-6" />
                    <div>
                      <h4 className="font-tajawal font-semibold text-islamic-green mb-2">
                        انضم كمتطوع
                      </h4>
                      <p className="text-gray-600 font-cairo">
                        شارك في تطوير المشاريع وخدمة المجتمع حسب مهاراتك واهتماماتك
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-reverse space-x-4">
                    <MessageCircle className="text-ocean-blue flex-shrink-0 mt-1 h-6 w-6" />
                    <div>
                      <h4 className="font-tajawal font-semibold text-ocean-blue mb-2">
                        شارك اقتراحاً
                      </h4>
                      <p className="text-gray-600 font-cairo">
                        نرحب بأفكارك ومقترحاتك لتطوير المشاريع القائمة أو إضافة مشاريع جديدة
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-reverse space-x-4">
                    <Mail className="text-golden flex-shrink-0 mt-1 h-6 w-6" />
                    <div>
                      <h4 className="font-tajawal font-semibold text-golden mb-2">
                        تواصل مباشر
                      </h4>
                      <p className="text-gray-600 font-cairo">
                        للاستفسارات والشراكات والتعاون في المشاريع التطوعية
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-reverse space-x-3">
                  <Shield className="text-orange-600 flex-shrink-0 mt-1 h-6 w-6" />
                  <div>
                    <h4 className="font-tajawal font-semibold text-orange-800 mb-2">
                      ملاحظة أمنية مهمة
                    </h4>
                    <p className="text-orange-700 font-cairo text-sm leading-relaxed">
                      {content.contactInfo.note}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="bg-ocean-blue text-white">
              <CardTitle className="text-2xl font-amiri">
                أرسل رسالة
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-tajawal">الاسم الكامل</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="أدخل اسمك الكامل"
                    className="font-cairo"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-tajawal">البريد الإلكتروني</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="example@email.com"
                    className="font-cairo"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-tajawal">الموضوع</Label>
                  <Input 
                    id="subject" 
                    type="text" 
                    placeholder="موضوع الرسالة"
                    className="font-cairo"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-tajawal">الرسالة</Label>
                  <Textarea 
                    id="message" 
                    placeholder="اكتب رسالتك هنا..."
                    rows={6}
                    className="font-cairo"
                  />
                </div>

                <Button className="w-full bg-islamic-green hover:bg-islamic-green/90 text-white font-tajawal text-lg py-3">
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12 bg-islamic-gradient text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-3xl font-amiri font-bold mb-6">
              ساهم في بناء المستقبل
            </h3>
            <p className="text-xl mb-8 opacity-90 font-cairo max-w-3xl mx-auto">
              مشروع روافد هو مشروع أمة، ونجاحه يعتمد على مشاركة كل فرد حسب قدراته وإمكانياته. 
              انضم إلينا اليوم وكن جزءاً من التغيير الإيجابي.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-golden text-islamic-green hover:bg-golden/90 font-tajawal font-semibold px-8 py-3">
                انضم كمتطوع
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-islamic-green font-tajawal font-semibold px-8 py-3">
                تعرف على فرص التطوع
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
