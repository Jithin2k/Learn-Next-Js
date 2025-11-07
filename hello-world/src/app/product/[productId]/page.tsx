import React from "react";

const Page = async ({ params }: { params: { productId: string } }) => {
  const productId = (await params).productId;
  return (
    <div>
      <h1>This is product {productId} page</h1>
    </div>
  );
};

export default Page;
