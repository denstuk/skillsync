/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AI_API_TOKEN: string;
  readonly VITE_IS_MOCKED: boolean;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
