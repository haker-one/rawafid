# دليل رفع موقع روافد على GitHub

## الخطوة الأولى: إنشاء repository على GitHub

1. اذهب إلى [github.com](https://github.com)
2. اضغط على الزر الأخضر "New" أو أيقونة "+" في أعلى الصفحة
3. اختر "New repository"
4. املأ تفاصيل المشروع:
   - **Repository name**: `rawafed-website` (أو أي اسم تفضله)
   - **Description**: `موقع مؤسسة روافد الإسلامية - منصة تعريفية شاملة`
   - اختر **Public** أو **Private** حسب رغبتك
   - **لا تضع علامة** على "Add a README file" (لأن لدينا README بالفعل)
5. اضغط "Create repository"

## الخطوة الثانية: رفع الملفات من Terminal

افتح Terminal أو Command Prompt في مجلد المشروع وقم بتنفيذ الأوامر التالية:

### 1. إعداد معلومات Git (إذا لم تكن مُعدة من قبل):
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 2. إعداد المشروع:
```bash
# إضافة جميع الملفات للتتبع
git add .

# إنشاء أول commit
git commit -m "إضافة موقع مؤسسة روافد الإسلامية"

# ربط المشروع بـ GitHub (استبدل USERNAME و REPOSITORY_NAME بقيمك الحقيقية)
git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git

# رفع الملفات إلى GitHub
git push -u origin main
```

## الخطوة الثالثة: إعداد GitHub Pages (نشر الموقع مجاناً)

### الطريقة الأولى: النشر التلقائي
1. اذهب إلى صفحة المشروع على GitHub
2. اضغط على تبويب "Settings"
3. انزل إلى قسم "Pages" في القائمة الجانبية
4. في "Source" اختر "GitHub Actions"
5. الموقع سيُنشر تلقائياً عند كل push جديد

### الطريقة الثانية: النشر اليدوي
1. في قسم "Pages"
2. في "Source" اختر "Deploy from a branch"
3. اختر branch "main" و folder "/ (root)"
4. اضغط "Save"

## روابط مهمة بعد النشر

بعد النشر الناجح، ستحصل على:
- **رابط الموقع**: `https://USERNAME.github.io/REPOSITORY_NAME`
- **صفحة المشروع**: `https://github.com/USERNAME/REPOSITORY_NAME`

## تحديث الموقع لاحقاً

لتحديث الموقع في المستقبل:
```bash
# إضافة التغييرات الجديدة
git add .

# إنشاء commit جديد
git commit -m "وصف التحديث"

# رفع التحديثات
git push origin main
```

## حل مشاكل محتملة

### مشكلة: "repository already exists"
```bash
git remote remove origin
git remote add origin https://github.com/USERNAME/NEW_REPOSITORY_NAME.git
```

### مشكلة: "failed to push"
```bash
git pull origin main --allow-unrelated-histories
git push origin main
```

### مشكلة: الموقع لا يظهر
- انتظر 5-10 دقائق بعد النشر
- تحقق من تبويب "Actions" للتأكد من نجاح البناء
- تأكد من أن الفرع الصحيح محدد في إعدادات Pages

## مميزات النشر على GitHub

- **مجاني تماماً**
- **SSL مدمج** (https://)
- **تحديث تلقائي** عند كل push
- **سرعة عالية** (CDN عالمي)
- **نطاق فرعي مجاني** (.github.io)

## استخدام نطاق مخصص (اختياري)

إذا كان لديك نطاق خاص:
1. أضف ملف `CNAME` في جذر المشروع
2. اكتب بداخله اسم النطاق: `www.rawafed.org`
3. أضف DNS records في إعدادات النطاق:
   ```
   CNAME www USERNAME.github.io
   A @ 185.199.108.153
   A @ 185.199.109.153
   A @ 185.199.110.153
   A @ 185.199.111.153
   ```

---

**ملاحظة**: تم إعداد workflow تلقائي للنشر، لذا الموقع سيُحدث تلقائياً عند كل تغيير في الكود.