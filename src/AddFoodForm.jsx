import { Divider, Input } from 'antd';
import { useState } from 'react';

export const AddFoodForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    calories: '',
    image: '',
    servings: 1,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateFoodList(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        type="text"
        onChange={(event) => {
          setFormData({
            ...formData,
            name: event.target.value,
          });
        }}
      />

      <label>Image</label>
      <Input
        type="text"
        onChange={(event) => {
          setFormData({
            ...formData,
            image: event.target.value,
          });
        }}
      />

      <label>Calories</label>
      <Input
        type="number"
        onChange={(event) => {
          setFormData({
            ...formData,
            calories: event.target.value,
          });
        }}
      />

      <label>Servings</label>
      <Input
        type="number"
        onChange={(event) => {
          setFormData({
            ...formData,
            servings: event.target.value,
          });
        }}
      />

      <button type="submit">Create</button>
    </form>
  );
};
