'use client';

import { useEffect } from 'react';

export default function WowInitializer() {
  useEffect(() => {
    // تحميل المكتبة ديناميكيًا لضمان تشغيلها فقط على جانب العميل
    import('wow.js').then(({ default: WOW }) => {
        console.log('WOW', WOW);
        
      new WOW().init();
    }).catch((error) => {
      console.error('Error loading WOW.js:', error);
    });
  }, []);

  return null;
}
