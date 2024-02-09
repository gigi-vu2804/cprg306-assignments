import ItemList from "./item-list.js";
export default function Page() {
  return (
    <main className="bg-amber-950">
      <h1 className="text-3xl text-orange-200 font-bold m-2">Shopping List</h1>
      <ItemList />
    </main>
  );
}
