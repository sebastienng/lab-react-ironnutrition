import './App.css';
import foods from './foods.json';
import { FoodBox } from './FoodBox';
import { AddFoodForm } from './AddFoodForm';
import { SearchForm } from './SearchForm';
import { Row, Divider, Button, Input } from 'antd';
import { useState } from 'react';
import { changeConfirmLocale } from 'antd/lib/modal/locale';

function App() {
  const [foodList, setFood] = useState(foods);

  const updateFoodList = (food) => {
    setFood([...foodList, food]);
  };
  const filterFoodList = (search) => {
    const newFoodList = foodList.filter((food) =>
      food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setFood(newFoodList);
  };

  const deleteFood = (foodD) => {
    console.log(foodD);

    const newFoodList = foodList.filter((food) => food.name !== foodD);

    setFood(newFoodList);
  };

  return (
    <div className="App">
      <Button> Hide Form / Add New Food </Button>{' '}
      <AddFoodForm updateFoodList={updateFoodList} />
      <Divider>Search for specific food</Divider>
      <SearchForm filterFoodList={filterFoodList} />
      <Divider>FoodList</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList.map((food) => {
          return (
            <FoodBox
              key={food.name}
              food={food}
              deleteFood={() => deleteFood(food.name)}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
