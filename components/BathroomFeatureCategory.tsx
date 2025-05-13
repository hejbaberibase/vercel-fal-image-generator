// components/BathroomFeatureCategory.tsx
import { BathroomFeature } from '@/lib/bathroom-features';
import { CategoryConfig } from '@/lib/bathroom-categories';
import { BathroomFeatureToggle } from './BathroomFeatureToggle';

interface BathroomFeatureCategoryProps {
  category: CategoryConfig;
  features: BathroomFeature[];
  selectedFeatures: BathroomFeature[];
  onToggleFeature: (feature: BathroomFeature) => void;
}

export function BathroomFeatureCategory({
  category,
  features,
  selectedFeatures,
  onToggleFeature,
}: BathroomFeatureCategoryProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{category.label}</h3>
        <p className="text-sm text-muted-foreground">{category.description}</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {features.map((feature) => (
          <BathroomFeatureToggle
            key={feature.id}
            feature={feature}
            isSelected={selectedFeatures.some((f) => f.id === feature.id)}
            onToggle={onToggleFeature}
          />
        ))}
      </div>
    </div>
  );
}