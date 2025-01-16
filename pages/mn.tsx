import React from 'react';
import Script from 'next/script';

const Mn = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <h1>محبت میں دھوکہ</h1>
        </div>
      </header>
    
      <section className="service-section">
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-cogs"></i>
          </div>
          <div className="service-content">
            <h3>محبت میں دھوکہ</h3>
            <p>ٹوٹا ہوا دل ہمیشہ ادھورا لگتا ہے، جیسے کوئی خواب آدھورا رہ جائے۔</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <div className="service-content">
            <h3>محبت میں دھوکہ</h3>
            <p>جب دل ٹوٹتا ہے، تو اس کا درد جسم کے ہر حصے میں محسوس ہوتا ہے۔</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-cloud"></i>
          </div>
          <div className="service-content">
            <h3>محبت میں دھوکہ</h3>
            <p>ٹوٹے ہوئے دل کی آواز کبھی بھی صاف نہیں ہوتی، یہ ہمیشہ دل کی گہرائیوں میں گونجتی رہتی ہے۔</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="service-content">
            <h3>محبت میں دھوکہ</h3>
            <p>دل کا ٹوٹنا ایک ایسی اذیت ہے جو وقت کے ساتھ کم نہیں ہوتی، بلکہ بڑھتی ہے۔</p>
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
            <h3>محبت میں دھوکہ</h3>
            <p>جب دل ٹوٹتا ہے، تو احساس ہوتا ہے کہ پوری دنیا ہی سیاہ ہو گئی ہو۔</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <div className="service-content">
            <h3>محبت میں دھوکہ</h3>
            <p>ٹوٹے ہوئے دل کا ہر درز ایک کہانی سناتا ہے، جو کبھی مکمل نہیں ہوتی۔</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-cloud"></i>
          </div>
          <div className="service-content">
            <h3>محبت میں دھوکہ</h3>
            <p>دل کی تکلیف اس وقت تک نہیں کم ہوتی جب تک دل خود نہیں چاہتا۔</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="service-content">
            <h3>محبت میں دھوکہ</h3>
            <p>ٹوٹا ہوا دل ہمیشہ ایک خلا چھوڑ جاتا ہے، جسے پر کرنا مشکل ہوتا ہے۔</p>
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
            <h3>محبت میں دھوکہ</h3>
            <p>ٹوٹے ہوئے دل میں امید کا کوئی چراغ باقی نہیں رہتا، بس اندھیرا ہی اندھیرا ہوتا ہے۔</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <div className="service-content">
            <h3>محبت میں دھوکہ</h3>
            <p>دل کا ٹوٹنا ہمیشہ ایک یاد بن جاتا ہے، جو وقت کے ساتھ کبھی مٹتی نہیں۔</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-cloud"></i>
          </div>
          <div className="service-content">
            <h3>محبت میں دھوکہ</h3>
            <p>جب دل ٹوٹتا ہے، تو ہر پل بے سکون لگتا ہے، جیسے سکون کی کوئی گنجائش نہ ہو۔</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="service-content">
            <h3>محبت میں دھوکہ</h3>
            <p>ٹوٹے ہوئے دل میں امید کا کوئی چراغ باقی نہیں رہتا، بس اندھیرا ہی اندھیرا ہوتا ہے۔</p>
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
};

export default Mn;
