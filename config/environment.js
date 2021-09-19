'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'ember-quickstart',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  ENV.firebase = {
    // add firebase config here
    apiKey: 'AIzaSyBC-O35eSEjl5EfKX9DCXvHIwm3wOE2px4',
    authDomain: 'clarus-79410.firebaseapp.com',
    projectId: 'clarus-79410',
    storageBucket: 'clarus-79410.appspot.com',
    messagingSenderId: '306287492207',
    appId: '1:306287492207:web:aef739abf1a162ea32219a',
    measurementId: 'G-Z7PBXFK8WE',
  };

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
