import React, { useState } from "react";
import Button from "./Button";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";
 
export function Pagination({ handelChange, pageNum, totalPage }) {
 const next = () => {
    if (pageNum === totalPage) return;

    handelChange(pageNum + 1);
  };

  const prev = () => {
    if (pageNum === 1) return;
    variant="secendory"

    handelChange(pageNum - 1);
  };
  return (
    <div className="flex items-center justify-center pt-3 gap-4">
      <Button
        variant="primary"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={pageNum === 1}
      >
        <RiArrowLeftDoubleLine  strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      
      <div className="flex items-center gap-2">
       {[...Array(totalPage)].map((i, index) => (
          <Button
            variant={pageNum == (index + 1) ? "primary": "secondary"}
            className="rounded-full"
            onClick={() => handelChange(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </div>

      <Button
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={pageNum === totalPage}
      >
        Next
        <RiArrowRightDoubleLine strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}