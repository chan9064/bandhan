import React, { useEffect, useRef } from 'react';

// Extend the Window interface to include adsbygoogle for TypeScript
declare global {
  interface Window {
    adsbygoogle?: { [key: string]: unknown }[];
  }
}

const AdBanner: React.FC = () => {
  const adPushed = useRef(false);

  useEffect(() => {
    // Ensure the ad is only pushed once per component mount
    if (adPushed.current) {
      return;
    }

    const pushAd = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        adPushed.current = true;
      } catch (err) {
        console.error("AdSense error:", err);
      }
    };
    
    // Delay the ad push to give the container ample time to render and get its width.
    // Increasing from 100ms to 500ms for more reliability.
    const timeoutId = setTimeout(pushAd, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="w-full flex justify-center p-2 bg-gray-100" style={{ minHeight: '60px' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client="ca-app-pub-3445180656986380"
        data-ad-slot="9955260849"
        data-ad-format="auto"
        data-full-width-responsive="true"
        aria-label="Advertisement"
      ></ins>
    </div>
  );
};

export default AdBanner;
