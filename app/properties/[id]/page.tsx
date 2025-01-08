import { PropertyWrapper } from '@/app/property-wrapper/property-wrapper';
import { getProperty } from '@/lib/firebase/firebase';
import { extractRouteId } from '@/lib/utils';

export async function generateMetadata({ params }: { params: { id: string } }) {
 const querryId = extractRouteId(params.id);
 const data = await getProperty(querryId);

 if (!data) {
  return {
   title: `Properties | ${params.id}`,
   description: 'Property not found',
  };
 }

 return {
  title: `Properties | ${params.id}`,
  description: data?.summaryDescription,
  openGraph: {
   title: `Properties | ${params.id}`,
   description: data?.summaryDescription,
   keywords: ['properties', 'property', 'Dubai', 'real estate'],
  },
 };
}

export default async function Page(params: { params: { id: string } }) {
 const { id } = await params.params;

 const querryId = extractRouteId(id);

 return <PropertyWrapper queryId={querryId} />;
}
