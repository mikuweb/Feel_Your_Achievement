import React, { FC, FormEvent, useState } from "react";

interface Item {
  id: number;
  value: string;
}
const ItemList: FC = () => {
  const [itemList, setItemList] = useState<Item[]>([
    {
      id: Math.random(),
      value: "Studying Next.js",
    },
    {
      id: Math.random(),
      value: "Running",
    },
  ]);

  const [item, setItem] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItemList = [
      ...itemList,
      {
        id: Math.random(),
        value: item,
      },
    ];

    setItemList(newItemList);
    setItem("");
  };

  return (
    <>
      <div className="py-10">
        <ul>
          {itemList.map((item) => (
            <li
              key={item.id}
              className="flex justify-between gap-5 items-center my-5"
            >
              <div className="bg-blue-50 rounded-2xl drop-shadow-lg text-blue-950 p-3.5 w-72 h-14 flex items-center">
                <p className="font-bold">{item.value}</p>
              </div>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="">
        <form onSubmit={handleSubmit}>
          <label htmlFor="add-item">Item:</label>
          <input
            id="add-item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />

          <button className="mx-auto w-60 flex gap-2 item-center justify-center bg-blue-600 text-white rounded-full py-2 px-3 uppercase text-xs font-bold curser-pointer tracking-wider">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>Create new item</p>
          </button>
        </form>
      </div>
    </>
  );
};

export default ItemList;
