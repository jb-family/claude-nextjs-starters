# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

이 프로젝트는 **Next.js 16 + React 19** 기반의 모던 웹 스타터킷입니다. TypeScript, Tailwind CSS v4, shadcn/ui를 통한 완벽한 개발 경험을 제공합니다.

**⚠️ 중요**: Next.js 16은 이전 버전과 **breaking changes**가 있습니다. 새로운 코드를 작성하기 전에 `node_modules/next/dist/docs/`의 공식 가이드를 읽으세요.

## 기술 스택

- **프레임워크**: Next.js 16.2.7 (App Router)
- **UI 프레임워크**: React 19.2.4
- **언어**: TypeScript 5
- **스타일링**: Tailwind CSS v4, shadcn/ui (30+ 컴포넌트)
- **폼 & 검증**: react-hook-form v7 + Zod v4
- **데이터 페칭**: @tanstack/react-query v5
- **상태관리**: Zustand v5
- **테마**: next-themes v0.4
- **알림**: Sonner v2
- **아이콘**: Lucide React

## 개발 커맨드

```bash
npm run dev      # 개발 서버 실행 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm start        # 프로덕션 서버 시작
npm run lint     # ESLint 실행
```

## 프로젝트 구조 및 아키텍처

```
my-app/
├── app/                          # Next.js App Router
│   ├── (auth)/                  # 인증 라우트 그룹 (로그인, 회원가입)
│   ├── (dashboard)/             # 대시보드 레이아웃 그룹
│   │   ├── dashboard/           # 메인 대시보드
│   │   ├── docs/                # 문서
│   │   └── examples/            # 컴포넌트 예제 (buttons, cards, forms 등)
│   ├── layout.tsx               # 루트 레이아웃 (Providers, Geist 폰트)
│   ├── page.tsx                 # 홈 페이지 (Hero + Features + CTA)
│   └── globals.css              # Tailwind 기본 스타일
├── components/
│   ├── layout/                  # 레이아웃 컴포넌트 (header, footer, sidebar)
│   ├── common/                  # 공통 컴포넌트 (theme-toggle 등)
│   ├── ui/                      # shadcn/ui 컴포넌트들
│   └── providers.tsx            # React Provider (QueryClient, ThemeProvider)
├── lib/
│   ├── constants.ts             # 전역 설정 (SITE_CONFIG, NAV_ITEMS)
│   ├── utils.ts                 # 유틸리티 함수 (cn: Tailwind 병합)
│   └── validations.ts           # Zod 검증 스키마 (login, signup 등)
├── types/
│   └── index.ts                 # TypeScript 인터페이스 (User, ApiResponse 등)
├── hooks/                       # 커스텀 React 훅
├── tsconfig.json                # TypeScript 설정 (@ alias: ./)
├── next.config.ts               # Next.js 설정
├── tailwind.config.ts           # Tailwind CSS 설정
├── components.json              # shadcn/cli 설정
└── package.json
```

### 레이아웃 그룹 (Layout Groups)

- **(auth)**: 인증 관련 페이지. 독립적인 레이아웃 사용 (Header 없음)
- **(dashboard)**: 대시보드 관련 페이지. 공통 Header, Sidebar, Footer 레이아웃 적용

## 코어 패턴 및 규칙

### 1. 폼 검증

**Zod 스키마**는 `lib/validations.ts`에 정의합니다:

```typescript
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "비밀번호를 입력해주세요"),
});

export type LoginInput = z.infer<typeof loginSchema>;
```

**react-hook-form**과 함께 사용:

```typescript
const form = useForm<LoginInput>({
  resolver: zodResolver(loginSchema),
});
```

### 2. 타입 정의

- `types/index.ts`에서 전역 타입 정의 (User, ApiResponse, etc.)
- 페이지/컴포넌트별 로컬 타입은 해당 파일에 inline으로 정의 가능
- `@tanstack/react-query`의 응답 타입도 `ApiResponse<T>`, `PaginatedResponse<T>` 활용

### 3. 데이터 페칭

`@tanstack/react-query` 사용:

```typescript
const { data, isLoading } = useQuery({
  queryKey: ['users'],
  queryFn: async () => {
    const res = await fetch('/api/users');
    return res.json();
  },
});
```

QueryClient는 `components/providers.tsx`에서 설정 (staleTime: 60초, retry: 1회).

### 4. 스타일링

- **Tailwind CSS**: 유틸리티 클래스 우선
- **shadcn/ui**: 구성 가능한 컴포넌트 (Button, Card, Input, Dialog 등)
- **cn 함수**: 조건부 클래스 병합 시 사용 (`lib/utils.ts`)

```typescript
className={cn(
  "px-2 py-1",
  isActive && "bg-blue-500"
)}
```

### 5. 상태 관리

- **클라이언트 상태**: Zustand 권장 (simple store)
- **서버 상태**: @tanstack/react-query (fetching, caching)
- 전역 테마 상태: `next-themes` (useTheme hook)

### 6. 컴포넌트 작성

- **"use client"**: 상호작용이 필요한 컴포넌트에만 명시
- **shadcn/ui 확장**: 필요시 기존 컴포넌트를 확장하되, `components.json`의 alias 유지
- **에러 처리**: `react-error-boundary`로 감싸기 (필요시)

### 7. API 라우팅

- `app/api/` 디렉토리에서 Route Handlers 작성
- 모든 응답은 `ApiResponse<T>` 형식 준수

## shadcn/ui 컴포넌트 추가

```bash
npx shadcn-ui@latest add <component-name>
# 예: npx shadcn-ui@latest add dialog
```

설정은 `components.json`에 정의되어 있으며, 컴포넌트는 `components/ui/`에 생성됩니다.

## 주요 파일별 역할

| 파일 | 역할 |
|------|------|
| `app/layout.tsx` | 루트 레이아웃, Providers 및 글로벌 설정 |
| `components/providers.tsx` | QueryClient, ThemeProvider 초기화 |
| `lib/constants.ts` | SITE_CONFIG, NAV_ITEMS 등 전역 상수 |
| `lib/validations.ts` | 모든 Zod 스키마 정의 |
| `types/index.ts` | 전역 TypeScript 인터페이스 |
| `components/layout/` | Header, Footer, Sidebar 등 공통 레이아웃 |

## 환경 변수

`.env.local`에 추가 필요한 변수:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

- `NEXT_PUBLIC_*` 접두사는 클라이언트에서 접근 가능한 환경 변수
- `SITE_CONFIG` (lib/constants.ts)에서 `process.env.NEXT_PUBLIC_APP_URL` 사용

## 주의사항

### Next.js 16 Breaking Changes

- 이전 학습 데이터의 API가 적용되지 않을 수 있음
- 새로운 기능/API 사용 전에 공식 문서 확인 필수
- `node_modules/next/dist/docs/` 참고

### 하이드레이션 문제

- `suppressHydrationWarning`은 루트 html 태그에만 적용 (app/layout.tsx)
- `next-themes`를 사용할 때는 mounted 상태 체크 필수 (components/common/theme-toggle.tsx 참고)

## 개발 팁

1. **컴포넌트 빠르게 생성**: shadcn/cli로 shadcn/ui 컴포넌트 추가
2. **타입 안전성**: Zod 스키마에서 type 자동 생성 (`z.infer<typeof schema>`)
3. **디버깅**: React Query DevTools 활성화 (providers.tsx에서 `initialIsOpen={false}`)
4. **폼 디버깅**: react-hook-form의 `console.log(form.watch())`로 상태 추적
5. **CSS 최적화**: Tailwind CSS 유틸리티 클래스로 불필요한 CSS 파일 방지

## 커밋 메시지 규칙

한국어로 작성, 의미있는 단위로 분리:

```
기능: 기능 설명

- 변경사항 1
- 변경사항 2

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```
