import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  value: number;
  className?: string;
  showLabel?: boolean;
  label?: string;
}

export function ProgressBar({ value, className, showLabel = true, label }: ProgressBarProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">{label || "Progress"}</span>
          <span className="font-medium text-foreground">{value}%</span>
        </div>
      )}
      <Progress 
        value={value} 
        className="h-2 bg-muted/50"
      />
    </div>
  );
}