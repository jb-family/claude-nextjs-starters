# 개발 가이드라인 (AI Agent용)

## 1. 프로젝트 개요

- **목적**: Next.js 16 App Router 기반 1인 개발자용 모던 웹 스타터킷
- **스택**: Next.js 16, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, TanStack Query v5, Zustand v5, React Hook Form, Zod, sonner, next-themes
- **현재 상태**: UI/컴포넌트 구조 완성, 인증은 `setTimeout` 시뮬레이션 (미연동)

---

## 2. 프로젝트 아키텍처

```
app/
  (auth)/         → 로그인·회원가입 페이지 (공통 레이아웃: auth layout)
  (dashboard)/    → 대시보드·예제·문서 페이지 (Sidebar + Header 레이아웃)
  (marketing)/    → 랜딩 페이지 (마케팅 레이아웃)
  layout.tsx      → 루트 레이아웃 (Providers, Toaster 포함)
  globals.css     → 전역 CSS (Tailwind 지시어)

components/
  ui/             → shadcn/ui 컴포넌트 (직접 수정 금지)
  layout/         → Sidebar, Header, Footer, MobileNav, PageContainer, PageHeader
  common/         → EmptyState, Loading, ThemeToggle

lib/
  constants.ts    → SITE_CONFIG, NAV_ITEMS
  utils.ts        → cn() 유틸리티
  validations.ts  → Zod 스키마 (loginSchema, signupSchema, paginationSchema)

types/
  index.ts        → ApiResponse<T>, PaginatedResponse<T>, User, NavItem, Theme, DashboardCard, Activity
```

---

## 3. 파일 수정 규칙

### 새 페이지 추가
- 인증 관련 → `app/(auth)/[페이지명]/page.tsx`
- 대시보드 관련 → `app/(dashboard)/[페이지명]/page.tsx`
- 마케팅/랜딩 관련 → `app/(marketing)/[페이지명]/page.tsx`
- **레이아웃 파일(`layout.tsx`)은 각 그룹의 것을 상속하며, 루트 레이아웃을 직접 수정하지 말 것**

### 네비게이션 항목 변경
- `lib/constants.ts`의 `NAV_ITEMS` 배열만 수정
- Sidebar(`components/layout/sidebar.tsx`)는 `NAV_ITEMS`를 자동으로 렌더링하므로 별도 수정 불필요

### 타입 추가
- 모든 공용 타입은 `types/index.ts`에 추가
- API 응답은 반드시 `ApiResponse<T>` 또는 `PaginatedResponse<T>` 패턴 사용

### Zod 스키마 추가
- `lib/validations.ts`에 추가
- 스키마에서 타입 추출: `z.infer<typeof schema>` 패턴 사용

---

## 4. 컴포넌트 구현 규칙

### shadcn/ui 컴포넌트
- `components/ui/` 폴더 파일은 **직접 수정 금지**
- 새 shadcn/ui 컴포넌트 추가 시: `npx shadcn@latest add [컴포넌트명]`
- 커스텀 컴포넌트는 `components/common/` 또는 `components/layout/`에 추가

### `"use client"` 지시어
- useState, useEffect, useRouter 등 React 훅 사용 시에만 추가
- 순수 서버 컴포넌트(데이터만 렌더링)에는 추가하지 말 것

### 스타일링
- 반드시 Tailwind CSS 유틸리티 클래스 사용
- 조건부 클래스는 `cn()` 유틸리티 사용 (`import { cn } from "@/lib/utils"`)
- **별도 CSS 파일 생성 금지** (globals.css 제외)
- 다크모드: `dark:` 접두사 또는 CSS 변수(`bg-background`, `text-foreground` 등) 사용

### 아이콘
- `lucide-react`에서만 import
- 다른 아이콘 라이브러리 추가 금지

---

## 5. 폼 구현 규칙

**반드시 아래 패턴을 따를 것:**

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { mySchema, type MyInput } from "@/lib/validations";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const form = useForm<MyInput>({
  resolver: zodResolver(mySchema),
  defaultValues: { ... },
});
```

- 폼 스키마는 `lib/validations.ts`에 정의 후 import
- `Form`, `FormField`, `FormItem`, `FormControl`, `FormMessage` 컴포넌트 반드시 사용
- 폼 에러 메시지는 한국어로 작성 (validations.ts에서 설정)

---

## 6. 데이터 패칭 규칙

- 서버 상태(API 데이터)는 **TanStack Query** 사용
- 클라이언트 전역 상태는 **Zustand** 사용
- `QueryClient` 설정: `staleTime: 60 * 1000`, `retry: 1` (providers.tsx 기본값 유지)
- API 응답 타입은 `ApiResponse<T>` 패턴 적용

---

## 7. 알림(토스트) 규칙

- 반드시 `sonner`의 `toast` 사용
- `import { toast } from "sonner"`
- 성공: `toast.success("메시지")`
- 에러: `toast.error("메시지")`
- **`alert()`, `window.confirm()` 사용 금지**

---

## 8. 인증 관련 규칙

- 현재 인증 로직은 `setTimeout` 시뮬레이션 상태
- 실제 인증 연동 시 `app/(auth)/login/page.tsx`, `app/(auth)/signup/page.tsx`의 `onSubmit` 함수 내 시뮬레이션 코드를 실제 API 호출로 교체
- 인증 상태 관리는 Zustand store 또는 next-auth 세션으로 구현

---

## 9. 멀티파일 동시 수정 규칙

| 작업 | 반드시 함께 수정해야 할 파일 |
|------|---------------------------|
| 네비게이션 항목 추가/삭제 | `lib/constants.ts` (NAV_ITEMS) |
| 새 공용 타입 추가 | `types/index.ts` |
| 새 폼 스키마 추가 | `lib/validations.ts` + 해당 페이지 |
| 새 shadcn/ui 컴포넌트 추가 | `components/ui/[컴포넌트].tsx` (CLI 사용) |
| 사이트 메타데이터 변경 | `lib/constants.ts` (SITE_CONFIG) |

---

## 10. 금지 사항

- `components/ui/` 파일 직접 수정
- `any` 타입 사용
- 인라인 스타일(`style={{}}`) 사용 (Tailwind 클래스로 대체)
- `alert()`, `confirm()`, `prompt()` 사용
- 별도 CSS 파일 생성
- `console.log` 프로덕션 코드에 남기기 (디버깅 후 반드시 제거)
- 하드코딩된 색상값 사용 (CSS 변수 또는 Tailwind 클래스 사용)
- `globals.css` 외 전역 스타일 파일 추가
