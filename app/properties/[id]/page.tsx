import { PropertyWrapper } from '@/app/property-wrapper/property-wrapper';
import { fetchAllPropertyIds, getProperty } from '@/lib/firebase/firebase';
import { createRouteId, extractRouteId } from '@/lib/utils';

export async function generateMetadata({
 params,
}: {
 params: Promise<{ id: string }>;
}) {
 const id = (await params).id;
 const querryId = extractRouteId(id);
 const data = await getProperty(querryId);

 if (!data) {
  return {
   title: `Properties | ${id}`,
   description: 'Property not found',
  };
 }

 return {
  title: `Properties | ${id}`,
  description: data?.summaryDescription,
  openGraph: {
   title: `Properties | ${id}`,
   description: data?.summaryDescription,
   keywords: ['properties', 'property', 'Dubai', 'real estate'],
  },
 };
}

export async function generateStaticParams() {
 const propertyIds = (await fetchAllPropertyIds()) as string[];

 return propertyIds.map((id) => ({ id: createRouteId(id) }));
}

export default async function Page({
 params,
}: {
 params: Promise<{ id: string }>;
}) {
 const id = (await params).id;
 const querryId = extractRouteId(id);

 return <PropertyWrapper queryId={querryId} />;
}
