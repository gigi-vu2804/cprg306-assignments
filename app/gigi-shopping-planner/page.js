// import React from "react";
// import { ItemProvider } from "./item-context.js";
// import NewItem from "./new-item.js";
// import ItemList from "./item-list.js";

// export default function Page() {
//   return (
//     <main className="bg-amber-950">
//       <ItemProvider>
//         <h1 className="text-3xl text-orange-200 font-bold m-2">
//           Shopping List
//         </h1>
//         <div className="flex flex-row gap-4 m-4 w-full">
//           <ItemList />
//           <NewItem />
//         </div>
//       </ItemProvider>
//     </main>
//   );
// }
"use client";
import React from "react";
import ShoppingList from "./shopping-list.js";
import Link from "next/link.js";

export default function Page() {
  return (
    <main className="bg-amber-950">
      <div className="flex justify-between items-center w-full px-2 py-2">
        <h1 className="text-center text-3xl text-orange-200 font-bold flex-grow">
          Shopping List
        </h1>
        <div></div>
      </div>
      <ShoppingList />
    </main>
  );
}
