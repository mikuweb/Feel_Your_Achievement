import React, { FC, FormEvent, useState } from 'react';
import InputForm from './inputForm';
import Item from './item';
import { ItemType } from '@/pages';

interface ItemListProps {
  itemList: ItemType[];
  setItemList: (value: ItemType[]) => void;
}

const ItemList: FC<ItemListProps> = ({ itemList, setItemList }) => {
  const [item, setItem] = useState<string>('');

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
    setItem('');
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
      <div className='pb-5'>
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
