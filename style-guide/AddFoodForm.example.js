// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(
      `Let's pretend we're sending an email to Valery about the new band member`,
      formData
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={undefined} type="text" onChange={() => {}} />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
