import React from "react";

function Loader() {
  return (
    <div class="animate-pulse flex flex-col items-center gap-4 w-full">
      <div>
        <div class="w-48 h-6 bg-[#424242] rounded-md"></div>
        <div class="w-28 h-4 bg-[#424242] mx-auto mt-3 rounded-md"></div>
      </div>
      <div class="h-7 bg-[#424242] w-full rounded-md"></div>
      <div class="h-7 bg-[#424242] w-full rounded-md"></div>
      <div class="h-7 bg-[#424242] w-full rounded-md"></div>
      <div class="h-7 bg-[#424242] w-1/2 rounded-md"></div>
    </div>
  );
}

export default Loader;
