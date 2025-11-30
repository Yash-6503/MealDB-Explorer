import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SearchMeals from "./pages/SearchMeals";
import Categories from "./pages/Categories";
import RandomMeal from "./pages/RandomMeal";
import MealDetails from "./pages/MealDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:urlName" element={<SearchMeals />} />
        <Route path="/search" element={<SearchMeals />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/random" element={<RandomMeal />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
