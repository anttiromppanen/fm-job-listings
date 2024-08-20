import React from "react";
import Loader from "./Loader";

function InfiniteLoadListingsComponent({ loadMoreRef }: { loadMoreRef: any }) {
  return (
    <div
      ref={loadMoreRef}
      className="py-20 flex items-center justify-center text-lg"
    >
      <Loader />
    </div>
  );
}

export default InfiniteLoadListingsComponent;
