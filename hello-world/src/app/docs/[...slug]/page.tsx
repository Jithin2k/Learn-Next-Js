export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
    const {slug} = await params;
   return <h1>The path is {slug.join("/")}</h1>
}
