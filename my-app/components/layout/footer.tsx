import { SITE_CONFIG } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-bold">{SITE_CONFIG.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {SITE_CONFIG.description}
            </p>
          </div>
          <div>
            <h4 className="font-semibold">회사</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-foreground">
                  홈
                </a>
              </li>
              <li>
                <a href="/dashboard" className="text-muted-foreground hover:text-foreground">
                  대시보드
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.links.github} className="text-muted-foreground hover:text-foreground">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {SITE_CONFIG.name}. 모든 권리 보유.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              개인정보 보호정책
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
