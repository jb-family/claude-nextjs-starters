import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DashboardPage() {
  const stats = [
    {
      title: "총 사용자",
      value: "2,543",
      change: "+12.5%",
    },
    {
      title: "총 수익",
      value: "$45,231.89",
      change: "+8.2%",
    },
    {
      title: "전환율",
      value: "3.24%",
      change: "-2.1%",
    },
    {
      title: "활성 사용자",
      value: "1,234",
      change: "+5.3%",
    },
  ];

  const activities = [
    {
      id: "1",
      user: "김민준",
      action: "프로필 업데이트",
      time: "2024-06-02 10:30",
      status: "success",
    },
    {
      id: "2",
      user: "이영희",
      action: "새 프로젝트 생성",
      time: "2024-06-02 09:15",
      status: "success",
    },
    {
      id: "3",
      user: "박준호",
      action: "결제 실패",
      time: "2024-06-02 08:45",
      status: "failed",
    },
    {
      id: "4",
      user: "최수진",
      action: "팀 초대",
      time: "2024-06-02 07:30",
      status: "pending",
    },
  ];

  return (
    <PageContainer>
      <PageHeader
        title="대시보드"
        description="요약 정보 및 최근 활동을 확인하세요."
      />

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Activity Table */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>최근 활동</CardTitle>
          <CardDescription>
            가장 최근의 사용자 활동 목록
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>사용자</TableHead>
                <TableHead>작업</TableHead>
                <TableHead>시간</TableHead>
                <TableHead>상태</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell className="font-medium">{activity.user}</TableCell>
                  <TableCell>{activity.action}</TableCell>
                  <TableCell className="text-muted-foreground">{activity.time}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        activity.status === "success"
                          ? "default"
                          : activity.status === "failed"
                          ? "destructive"
                          : "secondary"
                      }
                    >
                      {activity.status === "success"
                        ? "성공"
                        : activity.status === "failed"
                        ? "실패"
                        : "대기중"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
