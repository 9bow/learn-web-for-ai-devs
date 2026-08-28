# Web for AI Devs

AI 모델 개발자를 위한 Web/HTTP 완전 정복 학습 사이트입니다. 모델을 만드는 데 익숙하지만 서비스화, 프론트엔드, 백엔드, DB, 배포 구조가 낯선 개발자가 HTTP 기초부터 React + FastAPI + SQLite 풀스택 실습까지 이어서 학습할 수 있도록 구성했습니다.

## 대상

- `/predict` 엔드포인트는 만들어 봤지만 웹 서비스 전체 구조가 낯선 AI/ML 개발자
- nginx, CORS, 세션, JWT, SSE, WebSocket, SSR/CSR 같은 용어와 보안 경계를 실무 맥락에서 정리하려는 개발자
- Claude Code와 함께 작은 풀스택 프로토타입을 만들어 보려는 학습자

## 구성

- 10개 섹션
- 47개 학습 챕터 + 홈 문서 1개
- 10개 섹션별 퀴즈 JSON 데이터
- Astro 6 + Starlight + React 기반
- [TERMS.md](TERMS.md)의 용어 기준과 공식 근거 링크

## 커리큘럼

1. 웹의 본질: HTTP와 클라이언트-서버
2. 서버 아키텍처: Web / WAS / DB
3. 고급 HTTP와 실시간 통신: WebSocket, SSE, Long Polling, gRPC
4. 확장성: 로드밸런서와 스케일링
5. 프론트엔드의 진화: HTML에서 SPA로
6. React 생태계와 Next.js의 필요성
7. 백엔드 API: FastAPI와 Python 생태계
8. 데이터 계층: SQLite와 ORM
9. 실습: Claude Code로 React + FastAPI + SQLite 앱 만들기
10. Best Practice와 리뷰 체크리스트

## 로컬 개발

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## 검증

변경 후에는 다음 명령으로 Starlight 콘텐츠, MDX, Astro 컴포넌트, React 컴포넌트, 정적 자산 경로를 확인합니다.

```bash
pnpm build
```

## 콘텐츠 품질 기준

- HTTP, 서버, 프론트엔드, DB 개념은 AI 서비스 배포 흐름과 연결해 설명합니다. HTTP와 인증 관련 설명은 현재 RFC와 공식 문서를 우선합니다.
- React, FastAPI, SQLite 실습은 작은 프로토타입을 완성하는 데 필요한 최소 구조로 유지합니다.
- 보안, 성능, 관측성 장은 CORS와 인증의 역할을 구분하고, AI 도구 호출·worker·telemetry의 운영 경계까지 확인할 수 있도록 작성합니다.

## 주요 경로

- 문서 본문: `src/content/docs/`
- 퀴즈 데이터: `public/data/quiz/`
- 공통 학습 컴포넌트: `src/components/learning/`
- 스타일: `src/styles/`
- 사이트 설정: `astro.config.mjs`
- 과정별 신규 용어: `TERMS.md`

## 배포 메모

`astro.config.mjs`의 `site`와 `base`는 GitHub Pages 배포 경로에 맞춰 설정되어 있습니다. 배포 대상 저장소나 계정이 바뀌면 해당 값을 먼저 확인하세요.
