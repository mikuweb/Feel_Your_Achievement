import React, { FC, FormEvent, useState } from "react";
import InputForm from "./inputForm";
import Item from "./item";

export interface ItemType {
  id: number;
  value: string;
  isCompleted: boolean;
  isEditing: boolean;
}
const ItemList: FC = () => {
  const [itemList, setItemList] = useState<ItemType[]>([
    {
      id: Math.random(),
      value: "Studying Next.js",
      isCompleted: false,
      isEditing: false,
    },
    {
      id: Math.random(),
      value: "Running",
      isCompleted: false,
      isEditing: false,
    },
  ]);

  const [item, setItem] = useState<string>("");

  const handleAddItem = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newItemList = [
      ...itemList,
      {
        id: Math.random(),
        value: item,
        isCompleted: false,
        isEditing: false,
      },
    ];

    setItemList(newItemList);
    setItem("");
  };

  const handleComplete = (id: number) => {
    const newItemList = itemList.map((item) =>
      id === item.id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setItemList(newItemList);
  };

  const handleEdit = (updated: ItemType) => {
    const newItemList = itemList.map((item) =>
      item.id === updated.id ? updated : item
    );
    setItemList(newItemList);
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
          {itemList.map((listItem) => (
            <Item
              key={listItem.id}
              item={listItem}
              setItem={setItem}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </ul>
      </div>
      <InputForm item={item} setItem={setItem} handleAddItem={handleAddItem} />
    </>
  );
};

export default ItemList;
