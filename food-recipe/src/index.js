import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import Random from './components/Random';
import Main from './components/Main';
import Rank from './components/Rank';
import Recipe from './components/Recipe';
import RecipeTest from './components/RecipeTest';
import LikePage from './components/LikePage';
import UserRecipe from './components/UserRecipe';
import EditRecipe from './components/EditPage';
import Ingredient from './components/IngredientChoose';
import DataContext from './context/DataContext';
import IngredientContext from './context/IngredientContext';


// App 컴포넌트 안에서 useState와 useEffect를 사용
const App = () => {
  // const [data, setData] = useState([]); // 상태 관리를 위한 Hooks
  // const [ingredient, setIngredient] = useState([]);
  // const [url, setUrl] = useState("");

  // useEffect(() => {
  //   return () => {
  //     fetch("/api-key.txt").then(response => response.text())
  //       .then((api) => setUrl(`http://openapi.foodsafetykorea.go.kr/api/${api}/COOKRCP01/json/1/100`));
  //   };
  // }, []);

  // useEffect(() => {
  //   fetch(url)
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     }).then(data => {
  //     return setData(data.COOKRCP01.row);
  //   }).catch(error => console.log("Fetching Error"));

  // }, [url]);

  // useEffect(() => {
  //   if (data && data.length > 0) {
  //     const ingredientsList = data.map(item => {
  //       const matches = item.RCP_PARTS_DTLS.match(/([가-힣]+)\s+\d+g[^,)]*/g) || [];
  //       return matches.map(match => {
  //         const matchParts = match.match(/([가-힣]+)/);
  //         return matchParts && matchParts[1]; // 재료명 반환
  //       });
  //     }).flat(); // 모든 요리의 재료명을 하나의 배열로 합침

  //     // Set을 사용해 중복 제거 후 배열로 변환
  //     const uniqueIngredients = [...new Set(ingredientsList)];

  //     // 사전순으로 정렬
  //     uniqueIngredients.sort((a, b) => a.localeCompare(b));

  //     // 정렬된 배열로 상태 업데이트
  //     setIngredient(uniqueIngredients);
  //   }
  // }, [data]); // 'data'가 변경될 때마다 이 useEffect가 실행됨; // 'data'가 변경될 때마다 이 useEffect가 실행됨


  return (
    <>
      test
    </>
    // <IngredientContext.Provider value = {ingredient}>
    //   <DataContext.Provider value = {data}>
    //     <Router>
    //       <Routes>
    //         <Route path = "/" element = {<Main />} />
    //         <Route path = "/random" element = {<Random />} />
    //         <Route path = "/recipe" element = {<Recipe />} />
    //         <Route path = "/user_recipe" element = {<UserRecipe />} />
    //         <Route path = "/user_recipe/:recipeId" element = {<UserRecipe />} />
    //         <Route path = "/edit_recipe" element = {<EditRecipe />} />
    //         <Route path = "/like_page" element = {<LikePage />} />
    //         <Route path = "/ingredient" element = {<Ingredient />} />
    //         <Route path = "/rank" element = {<Rank />} />
    //         <Route path = "/recipe-test" element = {<RecipeTest />} />
    //       </Routes>
    //     </Router>
    //   </DataContext.Provider>
    // </IngredientContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);