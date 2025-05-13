// components/BathroomFeatureToggle.test.tsx
import { render, fireEvent } from '@testing-library/react';
import { BathroomFeatureToggle } from './BathroomFeatureToggle';
import { bathroomFeatures } from '@/lib/bathroom-features';

describe('BathroomFeatureToggle', () => {
  const feature = bathroomFeatures[0];
  const mockOnToggle = jest.fn();
  it('renders feature label', () => {
    const { getByText } = render(
      <BathroomFeatureToggle
        feature={feature}
        isSelected={false}
        onToggle={mockOnToggle}
      />
    );
    expect(getByText(feature.label)).toBeInTheDocument();
  });

  it('calls onToggle when clicked', () => {
    const { getByText } = render(
      <BathroomFeatureToggle
        feature={feature}
        isSelected={false}
        onToggle={mockOnToggle}
      />
    );
    fireEvent.click(getByText(feature.label));
    expect(mockOnToggle).toHaveBeenCalledWith(feature);
  });

  it('applies selected styles when isSelected is true', () => {
    const { container } = render(
      <BathroomFeatureToggle
        feature={feature}
        isSelected={true}
        onToggle={mockOnToggle}
      />
    );
    expect(container.firstChild).toHaveClass('bg-primary');
  });
});