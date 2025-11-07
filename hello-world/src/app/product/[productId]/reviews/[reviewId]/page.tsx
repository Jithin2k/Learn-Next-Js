import { notFound } from "next/navigation";

export default async function ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
    const { productId, reviewId } = await params;
    if(parseInt(reviewId) > 100){
      notFound();
    }
  return (
    <h1>
      Review {reviewId} of product {productId}
    </h1>
  );
}
