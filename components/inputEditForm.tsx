import { ItemType } from '@/pages';
import React, { FC, useState, useEffect } from 'react';

interface InputEditFormProps {
  item: ItemType;
  setItem: (value: string) => void;
  editItem: (value: ItemType) => void;
}

const InputEditForm: FC<InputEditFormProps> = ({ item, editItem }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(item.value);
  }, [item]);

  const handleSubmitEdit: (e: React.FormEvent<HTMLFormElement>) => void = (
    e
  ) => {
    e.preventDefault();
    editItem({
      ...item,
      value,
      isEditing: false,
    });
  };

  return (
    <div className='pb-5'>
      <form
        className='flex items-center justify-center'
        onSubmit={handleSubmitEdit}
      >
        <input
          id='add-item'
          value={value}
          placeholder='Edit item'
          required
          onChange={(e) => setValue(e.target.value)}
          className='bg-gray-50 border border-blue-900 text-blue-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 mx-10 p-2.5'
        />

        <button className='py-3 lg:py-2 px-2 bg-blue-600 text-white rounded-2xl text-xs lg:text-sm font-bold curser-pointer hover:opacity-60 tracking-wider'>
          Edit
        </button>
      </form>
    </div>
  );
};

export default InputEditForm;
