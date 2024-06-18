// item.js
import ItemList from "./item-list";

export default function Item({
  items,
  onSort,
  displayMode,
  setDisplayMode,
  selectedSort,
  setSelectedSort,
  onItemSelect,
}) {
  return (
    <ItemList
      items={items}
      onSort={onSort}
      displayMode={displayMode}
      setDisplayMode={setDisplayMode}
      selectedSort={selectedSort}
      setSelectedSort={setSelectedSort}
      onItemSelect={onItemSelect}
    />
  );
}
