import React from 'react'

const Menu = () => {
  return (
    <div>
       <header>
    <h1>Select your favourite poetry </h1>
  </header>

  <section className="services">
    <div className="service-card">
      <h2>محبت</h2>
      <p>محبت وہ نرم بندھن ہے جو دلوں کو جوڑتا ہے، وقت اور فاصلے سے ماورا ہے۔</p>
      <a href="./love" className="btn">Learn More</a>
    </div>
    <div className="service-card">
      <h2>اداسی</h2>
      <p>فریب جھوٹ کو باندھتا ہے جو اعتماد میں خیانت کرتا ہے اور سچائی کو بادل دیتا ہے۔</p>
      <a href="./udasi" className="btn">Learn More</a>
    </div>
    <div className="service-card">
      <h2>محبت میں دھوکہ
      </h2>
      <p>محبت میں دھوکہ ایک نازک وہم پیدا کرتا ہے، ظاہر ہونے پر اعتماد کو توڑ دیتا ہے۔</p>
      <a href="./dhoka" className="btn">Learn More</a>
    </div>
  </section>
  <section className="services">
    <div className="service-card">
      <h2>ماں کی محبت
      </h2>
      <p>ماں کی محبت غیر مشروط، بے حد، اور ہمیشہ کے لیے پرورش پانے والی ہوتی ہے۔</p>
      <a href="./maa" className="btn">Learn More</a>
    </div>
    <div className="service-card">
      <h2>اسلام</h2>
      <p>اسلام امن، اللہ کے سامنے سر تسلیم خم کرنے اور سب کے لیے ہمدردی کا عقیدہ ہے۔
      </p>
      <a href="./islam" className="btn">Learn More</a>
    </div>
    <div className="service-card">
      <h2>حوصلہ افزائی
      </h2>
      <p>حوصلہ افزائی رکاوٹوں پر قابو پانے اور ہمارے خوابوں کو حاصل کرنے کی مہم کو بھڑکاتی ہے۔</p>
      <a href="./motivate" className="btn">Learn More</a>
    </div>
  </section>

  <section className="adsense">
    <h3>Sponsored Ads</h3>
    <div className="adsense-space">
      <p>Ad Space: Google AdSense Here</p>
    </div>
  </section>

  <footer>
    <p>&copy; 2025 Company Name. All rights reserved.</p>
    <br />
  
    
  </footer>
    </div>
  )
}

export default Menu;
