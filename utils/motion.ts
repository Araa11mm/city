
import { MotionConfig } from '../types';

export const getMotionIntensity = (config: MotionConfig): number => {
  if (config.prefersReducedMotion) return 0;
  return config.isQuietMode ? 0.2 : 1.0;
};

export const getJitterClass = (config: MotionConfig, isActive: boolean): string => {
  if (!isActive || config.prefersReducedMotion || config.isQuietMode) return '';
  return 'animate-jitter';
};
