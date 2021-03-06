export default {
  FirebaseConfig: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
  },
  GoogleAnalyticsConfig: {
    trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
  },
};
