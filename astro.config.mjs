// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://9bow.github.io',
  base: '/learn-web-for-ai-devs',
  integrations: [
    starlight({
      head: [
        {
          tag: 'script',
          attrs: { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-QW1W5VBVNF' },
        },
        {
          tag: 'script',
          content: `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-QW1W5VBVNF');`,
        },
      ],
      title: 'Web for AI Devs',
      description: 'AI 모델 개발자를 위한 Web/HTTP 완전 정복',
      defaultLocale: 'root',
      locales: {
        root: { label: '한국어', lang: 'ko' },
      },
      sidebar: [
        { label: '01. 웹의 본질: HTTP와 클라이언트-서버', autogenerate: { directory: '01-http-foundations' } },
        { label: '02. 서버 아키텍처: Web / WAS / DB', autogenerate: { directory: '02-server-architecture' } },
        { label: '03. 고급 HTTP와 실시간 통신 (WebSocket/SSE)', autogenerate: { directory: '03-advanced-http-realtime' } },
        { label: '04. 확장성: 로드밸런서와 스케일링', autogenerate: { directory: '04-scaling-and-lb' } },
        { label: '05. 프론트엔드의 진화: HTML에서 SPA로', autogenerate: { directory: '05-frontend-evolution' } },
        { label: '06. React 생태계와 Next.js의 필요성', autogenerate: { directory: '06-react-and-nextjs' } },
        { label: '07. 백엔드 API: FastAPI와 Python 생태계', autogenerate: { directory: '07-fastapi-backend' } },
        { label: '08. 데이터 계층: SQLite와 ORM', autogenerate: { directory: '08-sqlite-and-orm' } },
        { label: '09. 실습: Claude Code로 풀스택 앱 만들기', autogenerate: { directory: '09-hands-on-fullstack' } },
        { label: '10. Best Practice와 리뷰 체크리스트', autogenerate: { directory: '10-best-practices' } },
      ],
      customCss: ['./src/styles/global.css', './src/styles/custom.css'],
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
