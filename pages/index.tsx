import React from 'react';

const Index = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <h1>شاعری کارنر</h1>
        </div>
      </header>

      <main>
        <section className="hero">
          <h2>شاعری کارنر میں خوش آمدید</h2>
          <p>الفاظ کے ذریعے نئی دنیایں دریافت کریں۔ شاعری کے فن میں غرق ہو جائیں۔</p>
        </section>

        <section className="adsense">
          <div className="adsense-banner">
            <p>AdSense Banner (ads will appear here)</p>
          </div>
        </section>

        <section className="content">
          <div className="poem-preview">
            <h3>&quot;محنت کا کوئی متبادل نہیں ہوتا۔&quot;</h3>
            <p>&quot;There is no substitute for hard work.&quot;</p>
          </div>
          <div className="poem-preview">
            <h3>&quot;محبت سے بڑی کوئی طاقت نہیں ہوتی&quot;</h3>
            <p>&quot;There is no greater power than love.&quot;</p>
          </div>
        </section>

        <section className="content">
          <div className="poem-preview">
            <h3>&quot;گر تم حقیقت میں کامیاب ہونا چاہتے ہو، تو پہلے اپنی ناکامیوں کو گلے لگاؤ۔&quot;</h3>
            <p>&quot;If you truly want to succeed, first embrace your failures.&quot;</p>
          </div>
          <div className="poem-preview">
            <h3>&quot;دنیا میں سب سے بڑی خوشی یہ ہے کہ آپ کسی کو مسکرا کر دکھا سکیں۔&quot;</h3>
            <p>&quot;The greatest happiness in the world is to make someone smile.&quot;</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Poetry Corner | All Rights Reserved</p>
        <p>© 2025 شاعری کارنر | جملہ حقوق محفوظ ہیں۔</p>
        <br />
        <br />
        <a href="./menu" className="button">Next Page</a>
      </footer>
    </div>
  );
};

export default Index;
