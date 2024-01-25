'use client';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';
import Select from 'react-select';

export const SearchBar = ({ data }: any) => {
  const router = useRouter();
  const options = data.map((event: any) => {
    return { value: event.id, label: event.title };
  });

  const handleChange = (selectedOption: any) => {
    if (selectedOption && selectedOption.value)
      router.push(`${selectedOption.value}`);
  };
  return (
    <div className="w-[300px] lg:w-[500px] relative">
      <Select
        className="w-250 lg:w-[500px]"
        options={options}
        isClearable={true}
        isSearchable={true}
        placeholder="Cari Apa Kakak?"
        onChange={handleChange}
        styles={{
          control: (provided) => ({
            ...provided,
            borderRadius: '100px',
            width: '100%',
            height: '60px',
          }),
        }}
      />
    </div>
  );
};
