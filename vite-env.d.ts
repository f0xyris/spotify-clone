/// <reference types="vite/client" />


interface ImportMetaEnv {
    readonly VITE_SPOTIFY_CLIENT_ID: string;
    readonly VITE_SPOTIFY_CLIENT_SECRET: string;
    readonly VITE_SPOTIFY_REDIRECT_URL: string;
    readonly VITE_SPOTIFY_AUTH_ENDPOINT: string;
    readonly VITE_YOUTUBE_API_KEY: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }