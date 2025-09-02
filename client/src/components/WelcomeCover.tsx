import React from 'react';

export default function WelcomeCover() {
  return (
    <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ maxWidth: 960, width: '100%', textAlign: 'center' }}>
        <img
          src="/judo.jpg"           // <— your file, no rename needed
          alt="Welcome"
          loading="eager"
          style={{
            maxHeight: 420,
            width: 'auto',
            borderRadius: 16,
            boxShadow: '0 10px 30px rgba(0,0,0,.15)',
          }}
        />
        <h1 style={{ marginTop: 16, fontSize: 24, fontWeight: 600 }}>Welcome!</h1>
        <p style={{ marginTop: 8, opacity: 0.75 }}>
          Ask anything about your customer calls. This cover disappears after your first message.
        </p>
      </div>
    </div>
  );
}
  
