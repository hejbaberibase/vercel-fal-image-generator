// lib/bathroom-features.ts

export type FeatureCategory = 'style' | 'element';

export interface BathroomFeature {
  id: string;
  label: string;
  promptSegment: string;
  category: FeatureCategory;
}

// Initial set of features for MVP
export const bathroomFeatures: BathroomFeature[] = [
  // Style features
  {
    id: 'scandinavian',
    label: 'Scandinavian',
    promptSegment: 'Scandinavian style with',
    category: 'style'
  },
  {
    id: 'modern',
    label: 'Modern',
    promptSegment: 'modern style with',
    category: 'style'
  },
  {
    id: 'industrial',
    label: 'Industrial',
    promptSegment: 'industrial style with',
    category: 'style'
  },
  
  // Element features
  {
    id: 'bathtub',
    label: 'Bathtub',
    promptSegment: 'a freestanding bathtub',
    category: 'element'
  },
  {
    id: 'shower',
    label: 'Walk-in Shower',
    promptSegment: 'a walk-in shower',
    category: 'element'
  },
  {
    id: 'window',
    label: 'Window',
    promptSegment: 'a large window',
    category: 'element'
  }
];

export function getFeaturesByCategory(category: FeatureCategory): BathroomFeature[] {
  return bathroomFeatures.filter(feature => feature.category === category);
}