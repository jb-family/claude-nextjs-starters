import Link from "next/link";
import {
  MousePointerClick,
  FormInput,
  Table2,
  MessageSquare,
  Bell,
  LayoutGrid,
} from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EXAMPLES = [
  {
    title: "버튼",
    description: "Button 변형, 크기, 상태, 아이콘 조합 예제",
    href: "/examples/buttons",
    icon: MousePointerClick,
  },
  {
    title: "폼",
    description: "react-hook-form + zod 유효성 검사 실시간 예제",
    href: "/examples/forms",
    icon: FormInput,
  },
  {
    title: "테이블",
    description: "@tanstack/react-table 정렬, 필터, 선택 예제",
    href: "/examples/tables",
    icon: Table2,
  },
  {
    title: "다이얼로그",
    description: "Dialog, AlertDialog, Sheet 오버레이 예제",
    href: "/examples/dialogs",
    icon: MessageSquare,
  },
  {
    title: "토스트",
    description: "sonner 알림 5가지 유형 예제",
    href: "/examples/toasts",
    icon: Bell,
  },
  {
    title: "카드",
    description: "Badge, Avatar, Progress를 조합한 카드 레이아웃 예제",
    href: "/examples/cards",
    icon: LayoutGrid,
  },
];

export default function ExamplesPage() {
  return (
    <PageContainer>
      <PageHeader
        title="컴포넌트 예제"
        description="스타터킷에 포함된 주요 컴포넌트를 직접 테스트해보세요."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "예제" }]}
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {EXAMPLES.map((example) => {
          const Icon = example.icon;
          return (
            <Card key={example.href} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{example.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-4">
                <CardDescription>{example.description}</CardDescription>
                <Button asChild className="w-full">
                  <Link href={example.href}>예제 보기</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </PageContainer>
  );
}
