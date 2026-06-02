import { Loader2, Mail, ArrowRight, Trash2 } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ButtonsExamplePage() {
  return (
    <PageContainer>
      <PageHeader
        title="버튼 예제"
        description="Button 컴포넌트의 모든 변형과 상태를 확인하세요."
        breadcrumbs={[
          { label: "홈", href: "/" },
          { label: "예제", href: "/examples" },
          { label: "버튼" },
        ]}
      />

      <div className="mt-8 space-y-6">
        {/* Variants */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Variants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </CardContent>
        </Card>

        <Separator />

        {/* Sizes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Sizes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg">Large</Button>
              <Button size="default">Default</Button>
              <Button size="sm">Small</Button>
              <Button size="icon" aria-label="이메일">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Separator />

        {/* With Icons */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">아이콘 포함</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                이메일 보내기
              </Button>
              <Button variant="outline">
                계속하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                삭제
              </Button>
            </div>
          </CardContent>
        </Card>

        <Separator />

        {/* Loading State */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">로딩 상태</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                처리 중...
              </Button>
              <Button variant="outline" disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                저장 중...
              </Button>
            </div>
          </CardContent>
        </Card>

        <Separator />

        {/* Disabled */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">비활성화</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button disabled>비활성화</Button>
              <Button variant="outline" disabled>비활성화 Outline</Button>
              <Button variant="destructive" disabled>비활성화 Destructive</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
