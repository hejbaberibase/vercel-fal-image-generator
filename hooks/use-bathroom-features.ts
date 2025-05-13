// hooks/use-bathroom-features.ts
import { useState, useCallback } from 'react';
import { BathroomFeature } from '@/lib/bathroom-features';
import { FeatureCategory } from '@/lib/bathroom-features';
import { getFeaturesByCategory } from '@/lib/bathroom-categories';

interface UseBathroomFeaturesReturn {
  selectedFeatures: BathroomFeature[];
  selectedStyle: BathroomFeature | null;
  selectedElements: BathroomFeature[];
  toggleFeature: (feature: BathroomFeature) => void;
  resetFeatures: () => void;
  getSelectedFeaturesByCategory: (category: FeatureCategory) => BathroomFeature[];
}

export function useBathroomFeatures(): UseBathroomFeaturesReturn {
  const [selectedFeatures, setSelectedFeatures] = useState<BathroomFeature[]>([]);

  const toggleFeature = useCallback((feature: BathroomFeature) => {
    setSelectedFeatures(prev => {
      // If it's a style feature, remove any other style features first
      if (feature.category === 'style') {
        const otherFeatures = prev.filter(f => f.category !== 'style');
        const isSelected = prev.some(f => f.id === feature.id);
        return isSelected ? otherFeatures : [...otherFeatures, feature];
      }
      
      // For element features, just toggle them
      const isSelected = prev.some(f => f.id === feature.id);
      if (isSelected) {
        return prev.filter(f => f.id !== feature.id);
      }
      return [...prev, feature];
    });
  }, []);

  const resetFeatures = useCallback(() => {
    setSelectedFeatures([]);
  }, []);

  const getSelectedFeaturesByCategory = useCallback((category: FeatureCategory) => {
    return selectedFeatures.filter(feature => feature.category === category);
  }, [selectedFeatures]);

  // Computed values
  const selectedStyle = selectedFeatures.find(f => f.category === 'style') || null;
  const selectedElements = selectedFeatures.filter(f => f.category === 'element');

  return {
    selectedFeatures,
    selectedStyle,
    selectedElements,
    toggleFeature,
    resetFeatures,
    getSelectedFeaturesByCategory
  };
}