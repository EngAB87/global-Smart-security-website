// Chatbase Server - Node.js
// يحتاج تثبيت: npm install express jsonwebtoken cors

const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config(); // للحصول على المتغيرات من .env

const app = express();
const PORT = 3001; // أو أي port تريده

app.use(cors());
app.use(express.json());

// Secret key من Chatbase (يجب حفظه في .env كـ secret)
// Your chatbase secret key (should be stored as a secret not in the code)
const secret = process.env.CHATBOT_IDENTITY_SECRET;

// API endpoint للحصول على token
app.post('/api/chatbase/token', async (req, res) => {
    try {
        // احصل على بيانات المستخدم من session أو database
        // هذا مثال - يجب تعديله حسب نظامك
        const user = await getSignedInUser(req); // دالة يجب إنشاؤها
        
        if (!user) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        // إنشاء JWT token
        const token = jwt.sign(
            { 
                user_id: user.id, // Your user's id
                email: user.email, // User's email
                stripe_accounts: user.stripe_accounts || [], // User's stripe accounts for stripe integration
                // ... other custom attributes
            }, 
            secret, 
            { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (error) {
        console.error('Error generating token:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// دالة للحصول على المستخدم (يجب تعديلها حسب نظامك)
// Get the current user signed in to your site
async function getSignedInUser(req) {
    // مثال: من session أو JWT token في header
    // const sessionToken = req.headers.authorization;
    // return await getUserFromSession(sessionToken);
    
    // للاختبار فقط - يجب حذف هذا واستبداله بدالة حقيقية
    // TODO: استبدل هذا بمنطق حقيقي للحصول على المستخدم المسجل دخول
    return {
        id: 'user123',
        email: 'user@example.com',
        stripe_accounts: []
    };
}

app.listen(PORT, () => {
    console.log(`Chatbase API server running on port ${PORT}`);
});

