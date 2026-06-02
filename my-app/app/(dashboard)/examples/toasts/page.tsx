"use client";

import { toast } from "sonner";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ToastsExamplePage() {
  return (
    <PageContainer>
      <PageHeader
        title="토스트 예제"
        description="sonner를 사용한 알림 메시지 5가지 유형 예제입니다."
        breadcrumbs={[
          { label: "홈", href: "/" },
          { label: "예제", href: "/examples" },
          { label: "토스트" },
        ]}
      />

      <div className="mt-8 space-y-6">
        {/* Basic Types */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">기본 유형</CardTitle>
            <CardDescription>버튼을 클릭하여 각 유형의 토스트를 확인하세요.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button
              variant="default"
              onClick={() => toast.success("작업이 성공적으로 완료되었습니다!")}
            >
              Success
            </Button>
            <Button
              variant="destructive"
              onClick={() => toast.error("오류가 발생했습니다. 다시 시도해주세요.")}
            >
              Error
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.warning("주의가 필요한 작업입니다.")}
            >
              Warning
            </Button>
            <Button
              variant="secondary"
              onClick={() => toast.info("참고할 정보가 있습니다.")}
            >
              Info
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.loading("처리 중입니다...", { duration: 2000 })
              }
            >
              Loading
            </Button>
          </CardContent>
        </Card>

        <Separator />

        {/* With Description */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">설명 포함</CardTitle>
            <CardDescription>제목과 설명이 함께 표시되는 토스트입니다.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button
              onClick={() =>
                toast.success("파일 업로드 완료", {
                  description: "profile-image.png 파일이 업로드되었습니다.",
                })
              }
            >
              파일 업로드
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.error("연결 실패", {
                  description: "서버에 연결할 수 없습니다. 네트워크를 확인해주세요.",
                })
              }
            >
              연결 실패
            </Button>
          </CardContent>
        </Card>

        <Separator />

        {/* With Action */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">액션 버튼 포함</CardTitle>
            <CardDescription>토스트 내에 액션 버튼이 포함된 예제입니다.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button
              onClick={() =>
                toast("이메일이 전송되었습니다.", {
                  action: {
                    label: "실행 취소",
                    onClick: () => toast.info("전송이 취소되었습니다."),
                  },
                })
              }
            >
              이메일 전송
            </Button>
            <Button
              variant="destructive"
              onClick={() =>
                toast("항목이 삭제되었습니다.", {
                  description: "7일 내에 복구할 수 있습니다.",
                  action: {
                    label: "복구",
                    onClick: () => toast.success("항목이 복구되었습니다!"),
                  },
                })
              }
            >
              삭제 (실행 취소 가능)
            </Button>
          </CardContent>
        </Card>

        <Separator />

        {/* Promise Toast */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Promise 토스트</CardTitle>
            <CardDescription>비동기 작업의 상태를 자동으로 표시하는 토스트입니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => {
                const promise = new Promise<{ name: string }>((resolve) =>
                  setTimeout(() => resolve({ name: "홍길동" }), 2000)
                );
                toast.promise(promise, {
                  loading: "데이터를 불러오는 중...",
                  success: (data) => `${data.name}님의 데이터를 불러왔습니다!`,
                  error: "데이터를 불러오는데 실패했습니다.",
                });
              }}
            >
              비동기 작업 시뮬레이션 (2초)
            </Button>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
