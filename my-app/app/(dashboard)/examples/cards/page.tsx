import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

export default function CardsExamplePage() {
  return (
    <PageContainer>
      <PageHeader
        title="카드 예제"
        description="Card 컴포넌트를 Badge, Avatar, Progress와 조합한 레이아웃 예제입니다."
        breadcrumbs={[
          { label: "홈", href: "/" },
          { label: "예제", href: "/examples" },
          { label: "카드" },
        ]}
      />

      <div className="mt-8 space-y-8">
        {/* Basic Cards */}
        <div>
          <h3 className="mb-4 text-sm font-semibold text-muted-foreground">기본 카드</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>기본 카드</CardTitle>
                <CardDescription>기본적인 카드 레이아웃입니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  CardHeader, CardContent, CardFooter로 구성된 기본 카드입니다.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">자세히 보기</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">총 수익</CardTitle>
                <Badge variant="secondary">+20.1%</Badge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₩4,523,100</div>
                <p className="text-xs text-muted-foreground">지난 달 대비</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">활성 사용자</CardTitle>
                <Badge>1,234명</Badge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">이번 주 신규</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator />

        {/* Avatar Cards */}
        <div>
          <h3 className="mb-4 text-sm font-semibold text-muted-foreground">Avatar 조합 카드</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "김민준", role: "관리자", fallback: "김민", status: "active" },
              { name: "이영희", role: "개발자", fallback: "이영", status: "active" },
              { name: "박준호", role: "디자이너", fallback: "박준", status: "inactive" },
            ].map((user) => (
              <Card key={user.name}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage src="" alt={user.name} />
                    <AvatarFallback>{user.fallback}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm">{user.name}</CardTitle>
                      <Badge variant={user.status === "active" ? "default" : "secondary"}>
                        {user.status === "active" ? "활성" : "비활성"}
                      </Badge>
                    </div>
                    <CardDescription>{user.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardFooter className="gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    메시지
                  </Button>
                  <Button size="sm" className="flex-1">
                    프로필
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <Separator />

        {/* Progress Cards */}
        <div>
          <h3 className="mb-4 text-sm font-semibold text-muted-foreground">Progress 조합 카드</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "스토리지 사용량", value: 68, desc: "13.6GB / 20GB", badge: "주의" as const, badgeVariant: "outline" as const },
              { title: "프로젝트 진행률", value: 45, desc: "9 / 20 작업 완료", badge: "진행 중" as const, badgeVariant: "secondary" as const },
              { title: "목표 달성률", value: 92, desc: "₩46,000 / ₩50,000", badge: "거의 완료" as const, badgeVariant: "default" as const },
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                    <Badge variant={item.badgeVariant}>{item.badge}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{item.desc}</span>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                  <Progress value={item.value} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
