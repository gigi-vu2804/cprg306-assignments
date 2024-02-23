// export default function Page() {
//   return (
//     <main>
//       <div class="flex flex-row gap-4 m-4 w-full">
//         <div class="flex-1 bg-blue-100 p-6 rounded-lg">
//           <h2 class="mb-4 text-xl font-bold text-gray-900">Card 1</h2>
//           <p class="text-gray-700">
//             This is a simple card layout example using Tailwind CSS!
//           </p>
//         </div>
//         <div class="flex-1 bg-blue-200 p-6 rounded-lg">
//           <h2 class="mb-4 text-xl font-bold text-gray-900">Card 2</h2>
//           <p class="text-gray-700">This is the second card.</p>
//         </div>
//         <div class="flex-1 bg-blue-300 p-6 rounded-lg">
//           <h2 class="mb-4 text-xl font-bold text-gray-900">Card 3</h2>
//           <p class="text-gray-700">This is the third card.</p>
//         </div>
//       </div>
//     </main>
//   );
// }

import NewItem from "./new-item.js";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex justify-center w-full">
      <Link href={`/`} className="hover:text-green-400 hover:underline">
        Back
      </Link>
      <NewItem />
    </main>
  );
}
