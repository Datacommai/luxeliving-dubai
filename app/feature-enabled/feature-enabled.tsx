import { FeatureFlagName, FEATURE_FLAGS } from '@/lib/flags/feature-flags';

export type FeatureEnabledProps = {
 featureFlag: FeatureFlagName;
 children: React.ReactNode;
};

export const FeatureEnabled = ({
 featureFlag,
 children,
}: FeatureEnabledProps) => {
 return FEATURE_FLAGS[featureFlag] ? children : null;
};
