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
import TaskManagement from "./components/task-management";
import Head from "next/head";

export default function Page() {
  return (
    <div className="bg-amber-950 flex">
      <Head>
        <title>Project Management Application</title>
        <meta
          name="description"
          content="Manage your tasks efficiently with our Task Management Application."
        />
        <meta
          name="keywords"
          content="task management, productivity, project management, tasks, team collaboration"
        />
      </Head>
      <main className="flex-grow">
        <TaskManagement />
      </main>
    </div>
  );
}
