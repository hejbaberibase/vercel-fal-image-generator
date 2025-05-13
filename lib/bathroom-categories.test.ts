// lib/bathroom-categories.test.ts
import { categoryConfigs, getCategoryConfig, getFeaturesByCategory } from './bathroom-categories';
import { bathroomFeatures } from './bathroom-features';

describe('bathroom-categories', () => {
  describe('categoryConfigs', () => {
    it('should have unique category IDs', () => {
      const ids = categoryConfigs.map(config => config.id);
      const uniqueIds = new Set(ids);
      expect(ids.length).toBe(uniqueIds.size);
    });

    it('should have all required fields', () => {
      categoryConfigs.forEach(config => {
        expect(config).toHaveProperty('id');
        expect(config).toHaveProperty('label');
        expect(config).toHaveProperty('description');
      });
    });
  });

  describe('getCategoryConfig', () => {
    it('should return correct config for valid category', () => {
      const styleConfig = getCategoryConfig('style');
      expect(styleConfig.id).toBe('style');
    });

    it('should return first config for invalid category', () => {
      const invalidConfig = getCategoryConfig('invalid' as any);
      expect(invalidConfig).toBe(categoryConfigs[0]);
    });
  });

  describe('getFeaturesByCategory', () => {
    it('should return only features of specified category', () => {
      const styleFeatures = getFeaturesByCategory(bathroomFeatures, 'style');
      expect(styleFeatures.every(feature => feature.category === 'style')).toBe(true);
    });
  });
});