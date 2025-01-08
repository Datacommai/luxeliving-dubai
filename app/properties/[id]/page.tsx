export default async function Page(params: { params: { id: string } }) {
 const { id } = await params.params;

 const querryId = id.split('-').join(' ');

 return <div>ID: {querryId}</div>;
}
