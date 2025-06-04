import { Moon, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Moon className="text-golden text-2xl ml-2" />
              <h4 className="text-2xl font-amiri font-bold">روافــد</h4>
            </div>
            <p className="text-gray-400 font-cairo mb-4">
              مشروع نهضوي شامل لبناء مستقبل مشرق يرتكز على قيم الإسلام الخالدة
            </p>
            <div className="flex space-x-reverse space-x-4">
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-tajawal font-semibold mb-4">خدماتنا</h5>
            <ul className="space-y-2 font-cairo">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">برنامج رفيق</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">مشروع تعافي</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">البرامج التعليمية</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">المحتوى الرقمي</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-tajawal font-semibold mb-4">المؤسسة</h5>
            <ul className="space-y-2 font-cairo">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">رؤيتنا</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">أهدافنا</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-tajawal font-semibold mb-4">الدعم</h5>
            <ul className="space-y-2 font-cairo">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">كيف تساهم</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">التطوع</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">المساعدة</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-cairo">
            © 2024 روافد. جميع الحقوق محفوظة. | تم التطوير بـ 
            <span className="text-red-500 mx-1">♥</span>
            لخدمة الأمة الإسلامية
          </p>
        </div>
      </div>
    </footer>
  );
}
