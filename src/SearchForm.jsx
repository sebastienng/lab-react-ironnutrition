import { Input } from 'antd';
import { useState } from 'react';

export const SearchForm = (props) => {
  const [searchVal, setFormData] = useState('');

  return (
    <>
      <label>Search</label>
      <Input
        type="text"
        onChange={(event) => {
          setFormData(event.target.value);
          console.log(
            'My value change and now my value is ' + event.target.value
          );
          console.log('My value change and now my value is ' + searchVal);
          props.filterFoodList(event.target.value);
        }}
      />
    </>
  );
};
