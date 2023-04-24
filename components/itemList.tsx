import React, { FC, FormEvent, useState } from "react";
import InputForm from "./inputForm";
import Item from "./item";

interface Item {
  id: number;
  value: string;
  isCompleted: boolean;
}
const ItemList: FC = () => {
  const [itemList, setItemList] = useState<Item[]>([
    {
      id: Math.random(),
      value: "Studying Next.js",
      isCompleted: false,
    },
    {
      id: Math.random(),
      value: "Running",
      isCompleted: false,
    },
  ]);

  const [item, setItem] = useState<string>("");

  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleAddItem = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newItemList = [
      ...itemList,
      {
        id: Math.random(),
        value: item,
        isCompleted: false,
      },
    ];

    setItemList(newItemList);
    setItem("");
  };

  const handleComplete = () => {
    setIsCompleted((preValue) => !preValue);
  };

  const handleDelete = (id: number) => {
    const newItemList = itemList.filter((item) => {
      return id !== item.id;
    });

    setItemList(newItemList);
  };

  return (
    <>
      <div className="py-10">
        <ul>
          {itemList.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              value={item.value}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
      <InputForm item={item} setItem={setItem} handleAddItem={handleAddItem} />
    </>
  );
};

export default ItemList;
