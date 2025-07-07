import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "react", // 명시적 React 소스 지정
      babel: {
        // React와 관련된 Babel 설정 최적화
        presets: [
          ['@babel/preset-react', { runtime: 'automatic' }]
        ],
        plugins: [
          ["@babel/plugin-transform-react-jsx", { runtime: "automatic" }]
        ]
      }
    }),
  ],
  resolve: {
    alias: {
      "react": path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  define: {
    // React 17 이상의 JSX 변환과 호환성 보장
    __React: "React"
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    minify: false, // 디버깅을 위해 일시적으로 비활성화
    sourcemap: true, // 소스맵 생성
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "client", "index.html"),
      },
      output: {
        // React와 관련된 모든 패키지를 단일 벤더 번들로 처리
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('scheduler')) {
              return 'react-vendor';
            }
            return 'vendor';
          }
        },
        // 모든 출력 파일에 예측 가능한 이름 지정
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      },
      external: [], // 외부 종속성 없음
    },
    cssCodeSplit: false, // 단일 CSS 파일로 결합
    assetsInlineLimit: 0, // 모든 에셋을 별도 파일로 처리
  },
  server: {
    port: 5173,
    strictPort: false,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
    hmr: false,
  },
});
