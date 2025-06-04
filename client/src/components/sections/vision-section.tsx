import { Card, CardContent } from "@/components/ui/card";
import { content } from "@/lib/content";

export default function VisionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-amiri font-bold text-islamic-green mb-6">
              {content.vision.title}
            </h3>
            <p className="text-lg text-gray-700 font-cairo leading-relaxed mb-8">
              {content.vision.content}
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-reverse space-x-3">
                <div className="w-2 h-2 bg-islamic-green rounded-full"></div>
                <p className="text-gray-600 font-cairo">بناء مجتمع مسلم واعٍ ومثقف</p>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <div className="w-2 h-2 bg-ocean-blue rounded-full"></div>
                <p className="text-gray-600 font-cairo">التغيير الإيجابي في المجتمع</p>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <div className="w-2 h-2 bg-golden rounded-full"></div>
                <p className="text-gray-600 font-cairo">خدمة الحضارة العربية الإسلامية</p>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-islamic-green/5 to-ocean-blue/5 border-islamic-green/20">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-islamic-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-amiri">روافد</span>
                </div>
                <h4 className="text-2xl font-amiri font-bold text-islamic-green mb-4">
                  الاسم والمعنى
                </h4>
                <p className="text-gray-700 font-cairo leading-relaxed">
                  "روافــد" جمع "رافد" الذي يعني النهر الصغير الذي يصب في نهر أكبر، 
                  يرمز إلى طموحنا بأن نكون بمثابة الأنهار المتدفقة بالعلم والمعرفة والحكمة، 
                  التي تجتمع لتشكل بحراً زاخراً بالخير والنور.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
