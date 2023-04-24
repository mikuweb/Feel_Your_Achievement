import React, { FC, FormEvent, useState } from "react";
import { ItemType } from "./itemList";

interface InputEditFormProps {
  item: ItemType;
  setItem: (value: string) => void;
  editItem: () => void;
}

const InputEditForm: FC<InputEditFormProps> = ({ item, setItem, editItem }) => {
  const [value, setValue] = useState("");

  const handleSubmitEdit: (e: React.FormEvent<HTMLFormElement>) => void = (
    e
  ) => {
    e.preventDefault();

    editItem();
  };

  return (
    <div className="pb-5">
      <form
        className="flex items-center justify-center"
        onSubmit={handleSubmitEdit}
      >
        <input
          id="add-item"
          value={value}
          placeholder="Edit item"
          required
          onChange={(e) => setValue(e.target.value)}
          className="bg-gray-50 border border-blue-900 text-blue-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 mx-10 p-2.5"
        />

        <button className="h-10 w-12 bg-blue-600 text-white rounded-2xl uppercase text-xs font-bold curser-pointer tracking-wider">
          <p>Edit</p>
        </button>
      </form>
    </div>
  );
};

export default InputEditForm;
