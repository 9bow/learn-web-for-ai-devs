# Web for AI Devs

AI 모델 개발자를 위한 Web/HTTP 완전 정복. HTTP 기초부터 React + FastAPI + SQLite 풀스택 실습까지.

Astro 6 + Starlight 기반 한국어 학습 사이트.

## 로컬 개발

```bash
pnpm install
pnpm dev      # 로컬 개발 서버 (http://localhost:4321)
pnpm build    # 프로덕션 빌드
pnpm preview  # 빌드 결과 미리보기
```

## 배포

`main` 브랜치에 push하면 GitHub Actions가 GitHub Pages에 자동 배포합니다.
`astro.config.mjs`의 `site`, `base`를 본인 계정/저장소에 맞춰 수정하세요.

## 커리큘럼

9개 섹션, 42개 챕터, 총 학습시간 약 18~22시간.

1. 웹의 본질: HTTP와 클라이언트-서버
2. 서버 아키텍처: Web / WAS / DB
3. 확장성: 로드밸런서와 스케일링
4. 프론트엔드의 진화: HTML에서 SPA로
5. React 생태계와 Next.js의 필요성
6. 백엔드 API: FastAPI와 Python 생태계
7. 데이터 계층: SQLite와 ORM
8. 실습: Claude Code로 풀스택 앱 만들기
9. Best Practice와 리뷰 체크리스트
