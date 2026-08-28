# 용어

이 문서는 `Web for AI Devs`에서 이번 개정으로 보강한 용어를 정리한다. 한국어 표기는 [PyTorchKR AI/ML 용어집](https://poc.terms.kr/llms.txt)을 먼저 대조했다. 아래 항목은 2026-08-28 기준 해당 PoC 용어집에 없으므로, 이 저장소에서 영어 원문을 함께 쓴다. `agent`, `inference`, `language model`, `embedding`은 이미 용어집에 있는 표기를 따른다.

| 영어 | 권장 한국어 | 이 과정에서의 뜻 | 공식 근거 |
|---|---|---|---|
| Large language model (LLM) | 대규모 언어 모델 | 대량의 언어 데이터를 바탕으로 텍스트를 생성하거나 변환하는 언어 모델. 응답 시간이 길 수 있어 스트리밍·취소·비용 측정이 중요하다. | [OpenAI text generation guide](https://platform.openai.com/docs/guides/text) |
| Server-Sent Events (SSE) | 서버 전송 이벤트 | `text/event-stream` 응답으로 서버에서 브라우저로 이벤트를 지속 전송하는 HTML 표준 방식. | [WHATWG HTML](https://html.spec.whatwg.org/multipage/server-sent-events.html) |
| backpressure | 배압 | 소비자·네트워크가 생산 속도를 따라가지 못할 때 큐와 메모리 증가를 제어하는 흐름 제어 문제. | [WHATWG Streams](https://streams.spec.whatwg.org/) |
| idempotency key | 멱등성 키 | 재시도한 생성 요청이 중복 실행되지 않도록 클라이언트와 서버가 같은 작업을 식별하는 키. HTTP의 멱등성 자체를 대체하지 않는다. | [RFC 9110](https://datatracker.ietf.org/doc/html/rfc9110) |
| OpenID Connect (OIDC) | OpenID Connect(오픈아이디 커넥트) | OAuth 2.0 위에서 사용자 인증 정보를 전달하는 identity layer. OAuth 자체의 권한 위임과 구분한다. | [OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0.html) |
| Proof Key for Code Exchange (PKCE) | 코드 교환 증명 키(PKCE) | OAuth authorization code 흐름에서 코드 탈취·주입 위험을 줄이는 검증 값 쌍. | [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636) |
| prompt injection | 프롬프트 인젝션 | 신뢰할 수 없는 입력이 모델 지시를 덮어쓰거나 도구·데이터에 부당하게 접근하도록 유도하는 공격. | [OWASP LLM Top 10](https://genai.owasp.org/llm-top-10/) |
| tool calling | 도구 호출 | 모델이 외부 기능 실행을 제안하고 애플리케이션이 검증 뒤 실행하는 패턴. 모델 출력은 권한 판정이 아니다. | [OpenAI function calling guide](https://platform.openai.com/docs/guides/function-calling) |
| Content Security Policy (CSP) | 콘텐츠 보안 정책(CSP) | 브라우저가 허용할 스크립트·리소스 출처를 제한하는 보안 정책. 출력 인코딩·sanitization을 대체하지 않는다. | [CSP Level 3](https://www.w3.org/TR/CSP3/) |
| Trusted Types | 신뢰된 타입(Trusted Types) | 위험한 DOM 삽입 지점에 전달되는 값을 제한해 DOM XSS 방어층을 제공하는 웹 플랫폼 기능. | [W3C Trusted Types](https://www.w3.org/TR/trusted-types/) |
| OpenTelemetry | 오픈텔레메트리(OpenTelemetry) | 로그·메트릭·트레이스 telemetry를 공통 방식으로 수집하는 관측성 프레임워크. | [OpenTelemetry documentation](https://opentelemetry.io/docs/) |
| semantic conventions | 시맨틱 컨벤션(semantic conventions) | telemetry의 span·metric·log 이름과 attribute를 서비스 간에 일관되게 쓰기 위한 규약. | [OpenTelemetry semantic conventions](https://opentelemetry.io/docs/specs/semconv/) |
| distributed tracing | 분산 추적 | 하나의 요청이 여러 서비스·DB·모델 호출을 거치는 경로와 지연을 연결해 보는 관측 방식. | [OpenTelemetry trace conventions](https://opentelemetry.io/docs/specs/semconv/general/trace/) |
