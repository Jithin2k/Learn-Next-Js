export default async function ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
    const { productId, reviewId } = await params;
  return (
    <h1>
      Review {reviewId} of product {productId}
    </h1>
  );
}
