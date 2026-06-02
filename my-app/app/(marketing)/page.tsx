import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Code, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container mx-auto flex flex-col items-center gap-4 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            모던 웹 개발, 쉽고 빠르게
          </h1>
          <p className="max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl">
            Next.js 16, React 19, Tailwind CSS를 활용한 완벽한 스타터킷.
            바로 시작하세요.
          </p>
          <div className="flex gap-4">
            <Button size="lg">시작하기</Button>
            <Button size="lg" variant="outline">
              문서 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-6 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            강력한 기능들
          </h2>
          <p className="text-lg text-muted-foreground">
            개발자 경험을 최우선으로 생각한 스타터킷
          </p>
        </div>
        <div className="container mx-auto grid gap-6 md:grid-cols-3 lg:gap-8">
          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">초고속 성능</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Next.js 16의 최신 기능과 최적화된 성능으로 빠른 로딩을 경험하세요.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Code className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">완벽한 DX</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                TypeScript, Tailwind CSS, shadcn/ui로 최고의 개발 경험을 제공합니다.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Smartphone className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">반응형 디자인</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                모든 기기에서 완벽하게 동작하는 반응형 UI 컴포넌트.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="space-y-6 bg-muted/50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg text-muted-foreground">
            몇 줄의 명령어로 완벽한 개발 환경을 구성할 수 있습니다.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">프로젝트 시작</Button>
          </div>
        </div>
      </section>
    </>
  );
}
