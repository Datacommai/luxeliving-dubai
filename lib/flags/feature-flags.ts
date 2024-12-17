export type FeatureFlagName = keyof typeof FEATURE_FLAGS;

export const FEATURE_FLAGS = {
 DEMO_FEATURE: process.env.NEXT_PUBLIC_FEATURE_FLAG_DEMO === 'true',
} as const;
