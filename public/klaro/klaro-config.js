var klaroConfig = {
    version: 1,
    elementID: 'klaro',
    storageMethod: 'localStorage',
    cookieName: 'klaro-consent',
    htmlTexts: true,
    acceptAll: true,
    hideDeclineAll: false,
    mustConsent: true,
    lang: 'de',
    translations: {
      de: {
        privacyPolicyUrl: '/datenschutz',
        consentModal: {
          title: 'Datenschutz-Einstellungen',
          description: 'Hier kannst du auswählen, welche Dienste du erlauben möchtest.',
        },
        consentNotice: {
          description: 'Diese Website verwendet Cookies und Dienste von Drittanbietern. Du kannst deine Einstellungen jederzeit anpassen.',
          learnMore: 'Einstellungen',
        },
        purposes: {
          analytics: 'Besucher-Statistiken & Tracking',
        },
        services: {
          ga: {
            description: 'Google Analytics zur Besucheranalyse.',
          },
        },
      },
    },
    services: [
      {
        name: 'ga',
        title: 'Google Analytics',
        purposes: ['analytics'],
        cookies: [/^_ga/, /^_gid/, /^_gat/],
        required: false,
        default: false,
        onlyOnce: true,
        callback: function(consent, service) {
          if (consent) {
            // Nur wenn der Nutzer zugestimmt hat, laden wir GA
            var script = document.createElement('script');
            script.setAttribute('async', true);
            script.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=G-NHQGX51TPL');
            document.head.appendChild(script);
  
            script.onload = function () {
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'G-NHQGX51TPL',{debug_mode: true}); // <-- DEINE GA4-ID HIER EINTRAGEN
            };
          }
        },
      },
    ],
  };

