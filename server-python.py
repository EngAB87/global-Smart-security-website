# Chatbase Server - Python
# يحتاج تثبيت: pip install flask flask-cors pyjwt

from flask import Flask, request, jsonify
from flask_cors import CORS
import jwt
import os
from datetime import datetime, timedelta

app = Flask(__name__)
CORS(app)

# Secret key من Chatbase (يجب حفظه في environment variable)
CHATBOT_IDENTITY_SECRET = os.getenv('CHATBOT_IDENTITY_SECRET', 'your-secret-key-here')

@app.route('/api/chatbase/token', methods=['POST'])
def get_chatbase_token():
    try:
        # احصل على بيانات المستخدم من session أو database
        user = get_signed_in_user(request)  # دالة يجب إنشاؤها
        
        if not user:
            return jsonify({'error': 'Unauthorized'}), 401

        # إنشاء JWT token
        payload = {
            'user_id': user['id'],
            'email': user['email'],
            'stripe_accounts': user.get('stripe_accounts', []),
            'exp': datetime.utcnow() + timedelta(hours=1)
        }
        
        token = jwt.encode(payload, CHATBOT_IDENTITY_SECRET, algorithm='HS256')
        
        return jsonify({'token': token})
    except Exception as e:
        print(f'Error generating token: {e}')
        return jsonify({'error': 'Internal server error'}), 500

# دالة للحصول على المستخدم (يجب تعديلها حسب نظامك)
def get_signed_in_user(req):
    # مثال: من session أو JWT token في header
    # session_token = req.headers.get('Authorization')
    # return get_user_from_session(session_token)
    
    # للاختبار فقط - يجب حذف هذا
    return {
        'id': 'user123',
        'email': 'user@example.com',
        'stripe_accounts': []
    }

if __name__ == '__main__':
    app.run(port=3001, debug=True)

