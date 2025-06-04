import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Target, Eye, Lightbulb } from "lucide-react";

export default function Vision() {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-amiri font-bold text-islamic-green mb-6">
            رؤيتنا ورسالتنا
          </h1>
          <p className="text-xl text-gray-600 font-cairo max-w-3xl mx-auto">
            نحو مستقبل مشرق يرتكز على قيم الإسلام الخالدة
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg hover-lift">
            <CardHeader className="bg-islamic-green text-white">
              <CardTitle className="flex items-center text-2xl font-amiri">
                <Eye className="ml-3 h-8 w-8" />
                رؤيتنا
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-700 font-cairo leading-relaxed text-lg">
                أن نكون منارة العلم والإصلاح في العالم الإسلامي، ولبنة أساسية في صرح النهضة، 
                نضيء دروب التغيير الإيجابي في شتى مناحي الحياة المجتمعية، من خلال مناهج مبتكرة 
                وأساليب خلاقة ترتكز على تعاليم ديننا الحنيف.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover-lift">
            <CardHeader className="bg-ocean-blue text-white">
              <CardTitle className="flex items-center text-2xl font-amiri">
                <Target className="ml-3 h-8 w-8" />
                رسالتنا
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-700 font-cairo leading-relaxed text-lg">
                إثراء العقل المسلم بالمعرفة النافعة، وتغذية الروح بالقيم الإيمانية، 
                وتعزيز الثقافة الإسلامية الأصيلة، من خلال تطوير حلول تقنية مبتكرة 
                ومحتوى تعليمي هادف يخدم بناء مجتمع مسلم واعٍ ومثقف.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-islamic-green to-ocean-blue text-white">
            <CardTitle className="text-3xl font-amiri text-center">
              أهدافنا الاستراتيجية
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-reverse space-x-4">
                  <CheckCircle className="text-islamic-green flex-shrink-0 mt-1 h-6 w-6" />
                  <div>
                    <h4 className="font-tajawal font-semibold text-islamic-green mb-2">
                      التعليم الرقمي الإسلامي
                    </h4>
                    <p className="text-gray-600 font-cairo">
                      تطوير منصات تعليمية تفاعلية تجمع بين أحدث التقنيات والقيم الإسلامية الأصيلة
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-reverse space-x-4">
                  <CheckCircle className="text-islamic-green flex-shrink-0 mt-1 h-6 w-6" />
                  <div>
                    <h4 className="font-tajawal font-semibold text-islamic-green mb-2">
                      معالجة القضايا المجتمعية
                    </h4>
                    <p className="text-gray-600 font-cairo">
                      التصدي لتحديات العصر بحلول مستمدة من الشريعة الإسلامية والخبرة المعاصرة
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-reverse space-x-4">
                  <CheckCircle className="text-islamic-green flex-shrink-0 mt-1 h-6 w-6" />
                  <div>
                    <h4 className="font-tajawal font-semibold text-islamic-green mb-2">
                      تعزيز الهوية الإسلامية
                    </h4>
                    <p className="text-gray-600 font-cairo">
                      ترسيخ الإيمان والأخلاق الفاضلة في قلوب الأفراد من خلال المحتوى الهادف
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-reverse space-x-4">
                  <CheckCircle className="text-ocean-blue flex-shrink-0 mt-1 h-6 w-6" />
                  <div>
                    <h4 className="font-tajawal font-semibold text-ocean-blue mb-2">
                      نصرة قضايا الأمة
                    </h4>
                    <p className="text-gray-600 font-cairo">
                      العمل على نصرة قضايا الأمة الكبرى وتعزيز أواصر الوحدة والتآخي
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-reverse space-x-4">
                  <CheckCircle className="text-ocean-blue flex-shrink-0 mt-1 h-6 w-6" />
                  <div>
                    <h4 className="font-tajawal font-semibold text-ocean-blue mb-2">
                      الابتكار التقني
                    </h4>
                    <p className="text-gray-600 font-cairo">
                      استخدام التكنولوجيا المتقدمة لخدمة الأهداف التعليمية والدعوية
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-reverse space-x-4">
                  <CheckCircle className="text-ocean-blue flex-shrink-0 mt-1 h-6 w-6" />
                  <div>
                    <h4 className="font-tajawal font-semibold text-ocean-blue mb-2">
                      التأثير الإيجابي
                    </h4>
                    <p className="text-gray-600 font-cairo">
                      إحداث تأثير إيجابي ملموس في الواقع المعاش للمجتمعات المسلمة
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-golden/10 border-golden/30">
          <CardContent className="p-8 text-center">
            <Lightbulb className="h-16 w-16 text-golden mx-auto mb-6" />
            <h3 className="text-2xl font-amiri font-bold text-golden mb-4">
              القيم الأساسية
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-islamic-green rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-tajawal font-semibold text-islamic-green">الأصالة</h4>
                <p className="text-sm text-gray-600 font-cairo">التمسك بالقيم الإسلامية الثابتة</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-ocean-blue rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-tajawal font-semibold text-ocean-blue">الجودة</h4>
                <p className="text-sm text-gray-600 font-cairo">التميز في كل ما نقدمه</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-tajawal font-semibold text-golden">الشمولية</h4>
                <p className="text-sm text-gray-600 font-cairo">النظرة المتكاملة للإصلاح</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-fresh-green rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold">4</span>
                </div>
                <h4 className="font-tajawal font-semibold text-fresh-green">التعاون</h4>
                <p className="text-sm text-gray-600 font-cairo">العمل الجماعي المثمر</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
