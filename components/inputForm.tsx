import React, { FC, FormEvent } from 'react';

interface InputFormProps {
  handleAddItem: (e: FormEvent<HTMLFormElement>) => void;
  item: string;
  setItem: (value: string) => void;
}

const InputForm: FC<InputFormProps> = ({ handleAddItem, item, setItem }) => {
  return (
    <div className='pb-5'>
      <form onSubmit={handleAddItem}>
        <input
          id='add-item'
          value={item}
          placeholder='Type new item'
          required
          onChange={(e) => setItem(e.target.value)}
          className='bg-gray-50 border border-blue-900 text-blue-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 mx-auto p-2.5 my-1 mb-3 lg:mb-6'
        />

        <button className='mx-auto py-2 px-4  flex gap-2 items-center justify-center bg-blue-600 hover:opacity-60 text-white rounded-full text-xs font-bold curser-pointer tracking-wider'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <p>Add</p>
        </button>
      </form>
    </div>
  );
};

export default InputForm;
