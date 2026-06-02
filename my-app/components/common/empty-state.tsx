import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EmptyStateProps {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <Card>
      <CardHeader className="flex items-center justify-center pt-8">
        {Icon && <Icon className="h-12 w-12 text-muted-foreground" />}
        <CardTitle className="mt-4">{title}</CardTitle>
      </CardHeader>
      {(description || action) && (
        <CardContent className="flex flex-col items-center justify-center gap-4">
          {description && (
            <p className="text-center text-sm text-muted-foreground">
              {description}
            </p>
          )}
          {action && (
            <Button onClick={action.onClick}>{action.label}</Button>
          )}
        </CardContent>
      )}
    </Card>
  );
}
