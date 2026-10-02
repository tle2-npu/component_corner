import './App.css'
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="app">
      <Header storeName="ComponentCorner" />

      <Hero
        title="Fresh Coffee, Delivered"
        subtitle="Discover carefully selected coffee beans from around the world."
        ctaText="Shop Now"
      />

      <main>
        <h2>Featured Products</h2>

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
      </main>
    </div>
  );
}

export default App;