import './App.css'
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="app">
      <h1>ComponentCorner</h1>

      <ProductCard
        name="Ethiopian Yirgacheffe"
        price={18}
        image="https://placehold.co/600x400"
        description="Bright and floral with delicate citrus notes."
      />

      <ProductCard
        name="Colombian Roast"
        price={16}
        image="https://placehold.co/600x400"
        description="Smooth and balanced with rich caramel notes."
      />

      <ProductCard
        name="House Espresso"
        price={20}
        image="https://placehold.co/600x400"
        description="Bold and rich with a smooth chocolate finish."
      />
    </div>
  );
}

export default App;