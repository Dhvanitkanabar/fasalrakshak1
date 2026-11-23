/**
 * FasalRakshak - Configuration Constants
 * Optimized for Render (Backend) and Netlify (Frontend) deployment.
 */

// If VITE_API_URL is not set in Netlify environment, fallback to localhost for development
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const APK_CONFIG = {
  downloadUrl:
    import.meta.env.VITE_APK_DOWNLOAD_URL ||
    'https://expo.dev/artifacts/eas/IK6aG5p8m8n9kugh9ZN72PQoIFssecNy9PB87sqCUVQ.apk',
  filename: 'FasalRakshak.apk',
  version: '1.0.0',
  packageId: 'com.fasalrakshak.app',
};

export const AI_CONFIG = {
  SOURCE_LABEL_CLOUD: "☁️ Cloud AI (Gemini)",
  SOURCE_LABEL_LOCAL: "💻 Device AI (Fast & Offline)",
  ACCURACY_THRESHOLD: 0.85
};
