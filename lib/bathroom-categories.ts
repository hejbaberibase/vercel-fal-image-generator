// lib/bathroom-categories.ts
import { FeatureCategory, BathroomFeature } from './bathroom-features';

export interface CategoryConfig {
  id: FeatureCategory;
  label: string;
  description: string;
}

export const categoryConfigs: CategoryConfig[] = [
  {
    id: 'style',
    label: 'Style',
    description: 'Choose the overall style of your bathroom'
  },
  {
    id: 'element',
    label: 'Elements',
    description: 'Select bathroom elements and fixtures'
  }
];

export function getCategoryConfig(category: FeatureCategory): CategoryConfig {
  return categoryConfigs.find(config => config.id === category) || categoryConfigs[0];
}

export function getFeaturesByCategory(features: BathroomFeature[], category: FeatureCategory): BathroomFeature[] {
  return features.filter(feature => feature.category === category);
}