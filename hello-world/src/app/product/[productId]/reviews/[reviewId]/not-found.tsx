"use client";

import { useParams, usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  console.log(pathName);
  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];

  return (
    <div>
      <h1>
        Review {reviewId} mot founf for {productId}
      </h1>
    </div>
  );
}
