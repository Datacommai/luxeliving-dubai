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
  description: data?.information.smallDescription,
  openGraph: {
   title: `Properties | ${id}`,
   description: data?.information.smallDescription,
   keywords: [
    data.name,
    'Dubai Luxury Real Estate',
    'Villas for Sale in Palm Jebel Ali',
    'Luxury Homes for Sale in Dubai',
    'High-End Properties in Nad Al Sheba Gardens',
    'Townhouses for Sale in Villanova, Dubai',
    'Dubai Real Estate for Canadian Investors',
    'Premium Villas with Private Lagoons in Dubai',
    'Standalone Villas by Emaar in Dubai',
    'Waterfront Properties in Palm Jebel Ali',
    'Exclusive Gated Community Homes in Dubai',
   ],
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
