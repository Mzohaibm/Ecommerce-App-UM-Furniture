import Home from "./Pages/Home"
import Header from "./Common/Header/Header"
import { Routes, Route } from "react-router-dom"
import TrackMyOrder from "./Pages/TrackMyOrder";
import Context from "./Common/Context/Context";
import Cart from "./Common/Cart/Cart";
import Footer from "./Common/Footer/Footer";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Shop from "./Pages/Shop/Shop"
import FlashCardSingleProduct from "./Components/FlashDeals/FlashCardSingleProduct";
import BestSellingSingleProduct from "./Components/BestSelling/BestSellingSingleProduct";
import NewSingleProduct from "./Components/NewProducts/NewSingleProduct";
import MyAccount from "./Pages/MyAccount/MyAccount";
function App() {
  return (
    <div className="App">
      <Context>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/flash-deal/:id" element={<FlashCardSingleProduct />} />
          <Route path="/best-selling/:id" element={<BestSellingSingleProduct />} />
          <Route path="/product/new-product/:id" element={<NewSingleProduct />} />
          {/* NewSingleProduct */}
          <Route path="/trackorder" element={<TrackMyOrder />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Context>
    </div>
  );
}

export default App;
