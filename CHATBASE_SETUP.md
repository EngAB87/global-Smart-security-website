# دليل إعداد Chatbase

## الخطوات المطلوبة:

### 1. إعداد Server-Side

#### الخيار أ: Node.js Server
```bash
npm install express jsonwebtoken cors dotenv
```

- استخدم ملف `server.js` الموجود
- أنشئ ملف `.env` وأضف:
```
CHATBOT_IDENTITY_SECRET=your-chatbase-secret-key
```

#### الخيار ب: Python Server
```bash
pip install flask flask-cors pyjwt
```

- استخدم ملف `server-python.py` الموجود
- أضف environment variable:
```bash
export CHATBOT_IDENTITY_SECRET=your-chatbase-secret-key
```

### 2. تحديث HTML

في ملف `index.html`:
- استبدل `YOUR_CHATBASE_ID` بـ Chatbase ID الخاص بك

### 3. تحديث JavaScript

في ملف `script.js`:
- تم إضافة دالة `identifyChatbaseUser()`
- قم بتفعيلها عند تسجيل دخول المستخدم

### 4. تعديل دالة getSignedInUser

في ملف server (Node.js أو Python):
- قم بتعديل دالة `getSignedInUser()` لتعمل مع نظام authentication الخاص بك
- يجب أن ترجع بيانات المستخدم: `id`, `email`, `stripe_accounts`, إلخ

### 5. تشغيل Server

#### Node.js:
```bash
node server.js
```

#### Python:
```bash
python server-python.py
```

### 6. اختبار

1. افتح الموقع
2. سجل دخول كـ user
3. افتح Console في المتصفح
4. يجب أن ترى: "User identified in Chatbase"

## ملاحظات مهمة:

- ⚠️ **الأمان**: لا تضع `CHATBOT_IDENTITY_SECRET` في الكود مباشرة
- ⚠️ **Authentication**: يجب تعديل `getSignedInUser()` لتعمل مع نظامك
- ⚠️ **CORS**: تأكد من إعداد CORS بشكل صحيح إذا كان server على domain مختلف

