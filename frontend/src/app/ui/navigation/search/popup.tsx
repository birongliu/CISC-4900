import React from "react";
import { Pet } from "@/app/utils/interface";

export default function PopOut({
  items,
}: {
  items: Pet[];
  handleClose: () => void;
}) {
  const [search, setSearch] = React.useState("");
  const [filteredItems, setFilteredItems] = React.useState<Pet[]>(items);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(search === "") {
      setFilteredItems(items);
      return;
    }
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredItems(filtered);
  }

  return (
    <div
      role="dialog"
      className="fixed flex py-32 items-center flex-col inset-0 z-50 backdrop-blur-md ease-in animate-fade"
    >
      <form id="popup" onSubmit={handleSubmit} className="w-96 md:w-6/12">
        <input
          type="text"
          form="popup"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="relative h-12 rounded-md px-3 w-full bg-white text-black "
          placeholder="Search for pets or inquries"
        />
      </form>
      <ul
        className={`w-96 md:w-6/12 mt-2 overflow-auto px-2 rounded-md scroll-my-40 scroll-ml-6 h-52 dark:text-black bg-white`}
      >
        <div className={`px-2 py-2 text-sm font-bold border-b-2 ${filteredItems.length > 0 ? "block" : "hidden"}`}>Suggestion</div>
        {(filteredItems.length > 0) ? (
          (filteredItems || items).map((item, index) => (
            <li key={index} className="px-2 mt-1">
              {item.name} {item.breed}
            </li>
          ))
        ) : (
          <div className={`flex items-center font-semibold mt-1 h-40 justify-center`}>
          {filteredItems.length > 0 ? "No suggestions" : "No results found"}
          </div>
        )}
      </ul>
    </div>
  );
}
