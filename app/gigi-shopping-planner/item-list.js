export default function ItemList({ items, onDeleteItem }) {
  const itemBoxStyling = "p-2 mx-4 mt-2 mb-4 bg-orange-200 max-w-lg rounded-lg";
  const itemNameStyling = "text-xl font-bold text-amber-900";
  const itemDescriptionStyling = "text-sm text-amber-900 italic";

  return (
    <div className="flex-1 flex flex-col items-center max-w-sm">
      <h3 className="text-orange-200 underline">Items List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={itemBoxStyling}>
            <div class="flex flex-row gap-2">
              <div class="flex-1">
                <h2 className={itemNameStyling}>{item.name}</h2>
                <div className={`${itemDescriptionStyling} flex`}>
                  Buy {item.quantity} in {item.category}
                </div>
              </div>
              <div class="flex">
                <button
                  onClick={() => onDeleteItem(item.name)}
                  className="py-2 m-2 px-4 bg-blue-500 text-white rounded hover:bg-red-700 transition duration-150 ease-in-out"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
