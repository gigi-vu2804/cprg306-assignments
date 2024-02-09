export default function ItemList({ name, quantity, category }) {
  const item1 = {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  };

  const item2 = {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  };

  const item3 = {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  };

  const item4 = {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  };

  const item5 = {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  };

  const item6 = {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  };

  const item7 = {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  };

  const item8 = {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  };

  const item9 = {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  };

  const item10 = {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  };

  const item11 = {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  };

  const item12 = {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  };

  const itemBoxStyling = "p-2 m-4 bg-orange-200 max-w-sm";
  const itemNameStyling = "text-xl font-bold text-amber-900";
  const itemDescriptionStyling = "text-sm text-amber-900 italic";

  return (
    <ul>
      {[
        item1,
        item2,
        item3,
        item4,
        item5,
        item6,
        item7,
        item8,
        item9,
        item10,
        item11,
        item12,
      ].map((item, index) => (
        <li key={index} className={itemBoxStyling}>
          <h2 className={itemNameStyling}>{item.name}</h2>
          <div className={itemDescriptionStyling}>
            Buy {item.quantity} in {item.category}
          </div>
        </li>
      ))}
    </ul>
  );
}
