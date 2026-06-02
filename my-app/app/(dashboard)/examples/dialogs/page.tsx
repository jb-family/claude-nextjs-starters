"use client";

import { useState } from "react";
import { toast } from "sonner";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function DialogsExamplePage() {
  const [name, setName] = useState("");

  return (
    <PageContainer>
      <PageHeader
        title="다이얼로그 예제"
        description="Dialog, AlertDialog, Sheet 오버레이 컴포넌트 예제입니다."
        breadcrumbs={[
          { label: "홈", href: "/" },
          { label: "예제", href: "/examples" },
          { label: "다이얼로그" },
        ]}
      />

      <div className="mt-8 space-y-6">
        {/* Dialog */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Dialog — 기본 모달</CardTitle>
            <CardDescription>입력 폼이나 상세 정보를 표시하는 모달입니다.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button>프로필 수정</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>프로필 수정</DialogTitle>
                  <DialogDescription>
                    변경할 정보를 입력하고 저장 버튼을 클릭하세요.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="dialog-name">이름</Label>
                    <Input
                      id="dialog-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="이름을 입력하세요"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dialog-email">이메일</Label>
                    <Input id="dialog-email" type="email" placeholder="이메일을 입력하세요" />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    onClick={() => toast.success("프로필이 저장되었습니다!")}
                  >
                    저장
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">정보 보기</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>스타터킷 정보</DialogTitle>
                  <DialogDescription>
                    Next.js 16 App Router 기반 모던 웹 스타터킷입니다.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4 text-sm text-muted-foreground">
                  <p>• Next.js 16, React 19</p>
                  <p>• TypeScript, Tailwind CSS v4</p>
                  <p>• shadcn/ui, lucide-react</p>
                  <p>• @tanstack/react-query, react-hook-form + zod</p>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <Separator />

        {/* AlertDialog */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">AlertDialog — 확인 다이얼로그</CardTitle>
            <CardDescription>사용자에게 중요한 작업 확인을 요청하는 다이얼로그입니다.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">계정 삭제</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
                  <AlertDialogDescription>
                    이 작업은 되돌릴 수 없습니다. 계정과 관련된 모든 데이터가
                    영구적으로 삭제됩니다.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>취소</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => toast.error("계정이 삭제되었습니다.")}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    삭제
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">변경사항 저장</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>변경사항을 저장할까요?</AlertDialogTitle>
                  <AlertDialogDescription>
                    현재 변경사항을 저장합니다. 계속 진행하시겠습니까?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>취소</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => toast.success("변경사항이 저장되었습니다!")}
                  >
                    저장
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        <Separator />

        {/* Sheet */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Sheet — 슬라이드 패널</CardTitle>
            <CardDescription>화면 가장자리에서 슬라이드 되는 패널입니다.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            {(["left", "right", "top", "bottom"] as const).map((side) => (
              <Sheet key={side}>
                <SheetTrigger asChild>
                  <Button variant="outline">{side}</Button>
                </SheetTrigger>
                <SheetContent side={side}>
                  <SheetHeader>
                    <SheetTitle>{side} 패널</SheetTitle>
                    <SheetDescription>
                      {side} 방향에서 슬라이드되는 Sheet 컴포넌트입니다.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6 text-sm text-muted-foreground">
                    패널 내용이 여기에 표시됩니다.
                  </div>
                </SheetContent>
              </Sheet>
            ))}
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
