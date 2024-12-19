import { useMemo } from 'react';
import type { Filter } from '../types';

export function useImageFilters() {
  const filters = useMemo<Filter[]>(() => [
    { name: 'Grayscale', css: 'grayscale(100%)' },
    { name: 'Sepia', css: 'sepia(100%)' },
    { name: 'Blur', css: 'blur(2px)' },
    { name: 'Brightness', css: 'brightness(150%)' },
    { name: 'Contrast', css: 'contrast(150%)' },
    { name: 'Hue Rotate', css: 'hue-rotate(90deg)' },
    { name: 'Invert', css: 'invert(100%)' },
    { name: 'Saturate', css: 'saturate(200%)' },
    { name: 'Vintage', css: 'sepia(50%) hue-rotate(-30deg) saturate(150%)' },
    { name: 'Cool', css: 'hue-rotate(180deg) saturate(150%)' },
    { name: 'Warm', css: 'sepia(30%) saturate(150%)' },
    { name: 'Sharp', css: 'contrast(150%) brightness(110%)' }
  ], []);

  return { filters };
}