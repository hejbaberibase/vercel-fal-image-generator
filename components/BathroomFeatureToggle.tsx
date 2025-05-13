// components/BathroomFeatureToggle.tsx
import { BathroomFeature } from '@/lib/bathroom-features';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BathroomFeatureToggleProps {
  feature: BathroomFeature;
  isSelected: boolean;
  onToggle: (feature: BathroomFeature) => void;
}

export function BathroomFeatureToggle({
  feature,
  isSelected,
  onToggle,
}: BathroomFeatureToggleProps) {
  return (
    <Button
      variant={isSelected ? "default" : "outline"}
      className={cn(
        "w-full justify-start gap-2",
        isSelected && "bg-primary text-primary-foreground"
      )}
      onClick={() => onToggle(feature)}
    >
      {feature.label}
    </Button>
  );
}