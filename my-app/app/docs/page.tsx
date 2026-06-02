import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageContainer>
          <PageHeader
            title="문서"
            description="스타터킷 사용 가이드 및 API 문서"
          />

          <div className="mt-8 grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>시작하기</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">설치</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    프로젝트를 클론하고 의존성을 설치하세요.
                  </p>
                  <pre className="mt-4 overflow-auto rounded-lg bg-muted p-4 text-sm">
                    <code>{`npm install
npm run dev`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>프로젝트 구조</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <code className="rounded bg-muted px-2 py-1">app/</code> — Next.js 앱 라우터
                  </li>
                  <li>
                    <code className="rounded bg-muted px-2 py-1">components/</code> — React 컴포넌트
                  </li>
                  <li>
                    <code className="rounded bg-muted px-2 py-1">lib/</code> — 유틸리티 함수
                  </li>
                  <li>
                    <code className="rounded bg-muted px-2 py-1">types/</code> — TypeScript 타입
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>주요 기술 스택</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Next.js 15 (App Router)</li>
                  <li>• React 19</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS v4</li>
                  <li>• shadcn/ui (30개 컴포넌트)</li>
                  <li>• react-hook-form + zod (폼)</li>
                  <li>• @tanstack/react-query (데이터)</li>
                  <li>• zustand (상태관리)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>라우트</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="space-y-1">
                  <span className="font-medium text-foreground">/ — 랜딩 페이지</span>
                  <p className="text-muted-foreground">Hero + Features + CTA 섹션</p>
                </div>
                <div className="space-y-1">
                  <span className="font-medium text-foreground">/dashboard — 대시보드</span>
                  <p className="text-muted-foreground">통계 카드 + 활동 테이블</p>
                </div>
                <div className="space-y-1">
                  <span className="font-medium text-foreground">/login — 로그인</span>
                  <p className="text-muted-foreground">react-hook-form + zod 검증</p>
                </div>
                <div className="space-y-1">
                  <span className="font-medium text-foreground">/signup — 회원가입</span>
                  <p className="text-muted-foreground">비밀번호 일치 검증</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </PageContainer>
      </main>
      <Footer />
    </div>
  );
}
