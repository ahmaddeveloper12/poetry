import React from 'react';
import Script from 'next/script';

const Mt = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <h1>حوصلہ افزائی</h1>
        </div>
      </header>
    
      <section className="service-section">
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-cogs"></i>
          </div>
          <div className="service-content">
            <h3>حوصلہ افزائی</h3>
            <p>&quot;زندگی میں کامیابی حاصل کرنے کے لئے محنت ضروری ہے، خواب دیکھنا کافی نہیں۔&quot;</p>
          </div>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <div className="service-content">
            <h3>حوصلہ افزائی</h3>
            <p>&quot;جب تک تمہیں ناکامی کا خوف ہے، کامیابی تمہارے قریب نہیں آ سکتی۔&quot;</p>
          </div>
        </div>

        <div className="adsense-space">
          <p>AdSense Space</p>
        </div>
      </section>

      <section className="service-section">
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-cogs"></i>
          </div>
          <div className="service-content">
            <h3>حوصلہ افزائی</h3>
            <p>&quot;جو شخص خود پر یقین رکھتا ہے، وہ کبھی بھی شکست نہیں کھاتا۔&quot;</p>
          </div>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <div className="service-content">
            <h3>حوصلہ افزائی</h3>
            <p>&quot;مشکل وقت میں ہمت نہ ہارنا، کیونکہ سب سے بڑا سورج ہمیشہ اندھیری رات کے بعد چمکتا ہے۔&quot;</p>
          </div>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-cloud"></i>
          </div>
          <div className="service-content">
            <h3>حوصلہ افزائی</h3>
            <p>&quot;کامیابی کا راز مسلسل کوشش میں چھپا ہوا ہے۔&quot;</p>
          </div>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="service-content">
            <h3>حوصلہ افزائی</h3>
            <p>&quot;جو چیز آپ کے خوابوں کو حقیقت میں بدل دے، وہ محنت ہے۔&quot;</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Our Company. All Rights Reserved.</p>
      </footer>

      {/* Load FontAwesome script asynchronously */}
      <Script 
        src="https://kit.fontawesome.com/a076d05399.js" 
        strategy="afterInteractive" 
      />
    </div>
  );
}

export default Mt;
