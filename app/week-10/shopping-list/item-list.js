// item-list.js

export default function ItemList({
  items,
  onSort,
  displayMode,
  setDisplayMode,
  selectedSort,
  setSelectedSort,
  onItemSelect,
  onRemoveItem,
}) {
  const itemBoxStyling =
    "p-2 m-4 bg-orange-200 max-w-sm rounded cursor-pointer round hover:border-4 border-red-800 transition duration-150 ease-in-out";
  const itemNameStyling = "text-xl font-bold text-amber-900";
  const itemDescriptionStyling = "text-sm text-amber-900 italic";

  // Function to sort items as Grouped Category
  const groupedItems = () => {
    const itemsCopy = [...items]; // Create a copy of the items array
    return itemsCopy.reduce((acc, item) => {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push(item);
      return acc;
    }, {});
  };

  // Function to render items with formatting based on the display mode
  const itemsCopy = [...items]; // Create a copy of the items array
  const renderItems = () => {
    if (displayMode === "list") {
      return itemsCopy.map((item, index) => (
        <li
          key={index}
          className={itemBoxStyling}
          onClick={() => {
            onItemSelect(item);
          }}
        >
          <h2 className={itemNameStyling}>{item.name}</h2>
          <div className={itemDescriptionStyling}>
            Buy {item.quantity} in {item.category}
          </div>
          <button
            className="m-2 p-2 bg-orange-700 text-white hover:bg-blue-500"
            onClick={(e) => {
              e.stopPropagation(); // Stop the event from bubbling up
              onRemoveItem(item.id);
            }}
          >
            Remove
          </button>
        </li>
      ));
    } else {
      const grouped = groupedItems();
      return Object.entries(grouped)
        .sort()
        .map(([category, items], index) => (
          <li key={index} className={itemBoxStyling}>
            <h2 className={itemNameStyling}>{category}</h2>
            <ul>
              {items
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={itemDescriptionStyling}
                    onClick={() => {
                      onItemSelect(item);
                    }}
                  >
                    {item.name} - Quantity: {item.quantity}
                  </li>
                ))}
            </ul>
          </li>
        ));
    }
  };

  return (
    <div className="mt-8">
      <div className="flex items-center">
        <label htmlFor="sort" className="text-orange-200 text-lg">
          Sort by:
        </label>
        {/* Sort Buttons */}
        <button
          onClick={() => {
            setDisplayMode("list");
            onSort("name");
            setSelectedSort("name");
          }}
          className={`p-1 m-2 w-28  hover:bg-blue-500 transition duration-150 ease-in-out ${
            selectedSort === "name" ? "bg-blue-500" : "bg-orange-500"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => {
            setDisplayMode("list");
            onSort("category");
            setSelectedSort("category");
          }}
          className={`p-1 m-2 w-28  hover:bg-blue-500 transition duration-150 ease-in-out ${
            selectedSort === "category" ? "bg-blue-500" : "bg-orange-700"
          }`}
        >
          Category
        </button>
        <button
          onClick={() => {
            setDisplayMode("grouped");
            setSelectedSort("grouped");
          }}
          className={`p-1 m-2 w-28  hover:bg-blue-500 transition duration-150 ease-in-out
                      ${
                        selectedSort === "grouped"
                          ? "bg-blue-500"
                          : "bg-orange-300"
                      }
                    `}
        >
          Grouped Category
        </button>
      </div>
      <ul>{renderItems()}</ul>
    </div>
  );
}
