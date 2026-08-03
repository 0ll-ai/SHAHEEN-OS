"use client";
import React, { useState } from 'react';

export default function ShaheenWelcome() {
  const [loading, setLoading] = useState(false);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#0a0f1d', // لون داكن فخم مستوحى من هويتك
      color: '#ffffff',
      fontFamily: 'sans-serif',
      padding: '20px'
    }}>
      {/* شعار الهوية البصرية */}
      <img src="/logo.png" alt="SHAHEEN Logo" style={{ width: '150px', height: '150px', marginBottom: '20px', borderRadius: '20px' }} />
      
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#38bdf8', marginBottom: '10px' }}>🦅 SHAHEEN-OS</h1>
      <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '30px', textAlign: 'center' }}>
        مرحباً بك في المنظومة الذكية المتكاملة لإدارة وبناء المحادثات العميقة.
      </p>

      {/* أزرار تفاعلية بتنسيق وتأثير قوي */}
      <div style={{ display: 'flex', gap: '15px' }}>
        <button 
          onClick={() => { setLoading(true); window.location.href = '/chat'; }}
          style={{
            padding: '12px 30px',
            fontSize: '1rem',
            fontWeight: '600',
            backgroundColor: '#0284c7',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 14px rgba(2, 132, 199, 0.4)'
          }}>
          {loading ? 'جاري الإقلاع...' : '⚡ دخول المنظومة'}
        </button>

        <button 
          onClick={() => alert('تم تطوير النظام بواسطة فريق SHAHEEN المطور.')}
          style={{
            padding: '12px 30px',
            fontSize: '1rem',
            fontWeight: '600',
            backgroundColor: 'transparent',
            color: '#38bdf8',
            border: '2px solid #38bdf8',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
          ℹ️ توثيق الملكية
        </button>
      </div>
    </div>
  );
}
