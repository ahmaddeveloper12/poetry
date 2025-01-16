import React from 'react';
import Script from 'next/script';

const Love = () => {
  return (
    <div>
       <header>
       <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9583800882921435"
     crossOrigin="anonymous"></script>
        <div className="logo">
            <h1>محبت</h1>
        </div>
    </header>
    
    <section className="service-section">
        <div className="service-card">
            <div className="service-icon">
                <i className="fas fa-cogs"></i>
            </div>
            <div className="service-content">
                <h3>محبت</h3>
                <p>محبت ایک ایسا جذبہ ہے جو دل کی گہرائیوں سے نکل کر روح تک پہنچتا ہے۔</p>
            </div>
        </div>
       
        
        <div className="service-card">
            <div className="service-icon">
                <i className="fas fa-users"></i>
            </div>
            <div className="service-content">
                <h3>محبت</h3>
                <p>محبت دل کی وہ زبان ہے جو کسی دوسرے کو صرف دل سے سمجھائی جا سکتی ہے۔</p>
            </div>
        </div>
    </section>

    <section className="service-section">
        <div className="service-card">
            <div className="service-icon">
                <i className="fas fa-cloud"></i>
            </div>
            <div className="service-content">
                <h3>محبت</h3>
                <p>محبت کا اصل راز دل کی سچائی میں چھپا ہوتا ہے۔</p>
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
                <h3>محبت</h3>
                <p>محبت کا معنی صرف الفاظ نہیں ہوتے، بلکہ یہ عمل اور احساس میں چھپے ہوتے ہیں۔</p>
            </div>
        </div>
    </section>

    <div className="adsense-space">
        <p>AdSense Space</p>
    </div>

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

export default Love;
