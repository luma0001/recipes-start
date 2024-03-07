import { Route, Routes } from "react-router-dom";
import { Categories } from "./recipes/Categories.tsx";
import Recipe from "./recipes/Recipe.tsx";
//import Recipes from "./recipes/RecipeList.tsx";
import RecipeForm from "./recipes/RecipeForm.tsx";
import Login from "./security/Login.tsx";
import Logout from "./security/Logout.tsx";
import Layout from "./Layout.tsx";
import Home from "./Home.tsx";
import "./App.css";
import RecipesLayout from "./recipes/RecipesLayout.tsx";
import AddCategory from "./recipes/AddCategory.tsx";

export default function App() {
  //const auth = useAuth();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/" element={<Categories />} />
        <Route path="/recipes" element={<RecipesLayout />}>
          {/* <Route index element={<Recipes />} /> */}
          <Route path=":id" element={<Recipe />} />
        </Route>

        {/*  vi skal have noget "admin" authorization på vores knap - så vi bliver sendt til login siden!*/}
        <Route path="/add" element={<RecipeForm />} />
        <Route path="/add-category" element={<AddCategory />} />


        <Route path="/test" element={<h1>Test</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h2>Not Found</h2>} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Layout>
  );
}
