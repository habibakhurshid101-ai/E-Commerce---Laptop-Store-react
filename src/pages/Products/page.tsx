import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Products() {
  const navigate = useNavigate();
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterBrand, setFilterBrand] = useState('all');
  const [filterPrice, setFilterPrice] = useState('all');
  const [filterSort, setFilterSort] = useState('featured');

  const showToast = (message: string) => {
    alert(message);
  };

  const addToCart = (name: string, price: number, id: number) => {
    showToast(`${name} added to cart!`);
  };

  const filterProducts = () => {
    showToast('Filters applied ✓');
  };

  const clearFilters = () => {
    setFilterCategory('all');
    setFilterBrand('all');
    setFilterPrice('all');
    setFilterSort('featured');
    showToast('Filters cleared');
  };

  return (
    <div className="page">
      {/* Page Header */}
      <div className="section-header products-header">
        <h1>All Products</h1>
        <p>Explore 500+ laptops, desktops, workstations and accessories</p>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="select-container">
          <label>Category</label>
          <select
            id="filterCategory"
            value={filterCategory}
            onChange={(e) => {
              setFilterCategory(e.target.value);
              filterProducts();
            }}
          >
            <option value="all">All Categories</option>
            <option value="laptop">Laptops</option>
            <option value="desktop">Desktops</option>
            <option value="workstation">Workstations</option>
            <option value="gaming">Gaming</option>
            <option value="accessory">Accessories</option>
          </select>
        </div>
        <div className="select-container">
          <label>Brand</label>
          <select
            id="filterBrand"
            value={filterBrand}
            onChange={(e) => {
              setFilterBrand(e.target.value);
              filterProducts();
            }}
          >
            <option value="all">All Brands</option>
            <option value="dell">Dell</option>
            <option value="hp">HP</option>
            <option value="lenovo">Lenovo</option>
            <option value="asus">ASUS</option>
            <option value="apple">Apple</option>
            <option value="msi">MSI</option>
          </select>
        </div>
        <div className="select-container">
          <label>Price Range</label>
          <select
            id="filterPrice"
            value={filterPrice}
            onChange={(e) => {
              setFilterPrice(e.target.value);
              filterProducts();
            }}
          >
            <option value="all">Any Price</option>
            <option value="under100k">Under Rs.100,000</option>
            <option value="100-300k">Rs.100K – 300K</option>
            <option value="300-500k">Rs.300K – 500K</option>
            <option value="above500k">Above Rs.500K</option>
          </select>
        </div>
        <div className="select-container">
          <label>Sort By</label>
          <select
            id="filterSort"
            value={filterSort}
            onChange={(e) => setFilterSort(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
        <div>
          <button className="border-button sm-button" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>

      {/* Results Count */}
      <p className="results-count">
        Showing <strong>8</strong> products
      </p>

      {/* Product Cards */}
      <div className="card-container products-grid">
        <div className="card product-card">
          <div className="card-img" data-grad="blue">
            <img src="/img8.png" alt="Dell XPS 15" />
            <span className="chip" data-color="green">
              Bestseller
            </span>
          </div>
          <div className="card-body">
            <p>DELL · LAPTOP</p>
            <h3>Dell XPS 15</h3>
            <p>Intel i7-13700H · 16GB · 512GB NVMe</p>
            <div className="card-footer-row">
              <span className="price-tag">Rs. 289,000</span>
              <button className="sm-button" onClick={() => addToCart('Dell XPS 15', 289000, 1)}>
                Add to Cart
              </button>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); showToast('Product details coming soon!'); }}>
              View Details →
            </a>
          </div>
        </div>

        <div className="card product-card">
          <div className="card-img" data-grad="purple">
            <img src="/img9.png" alt="HP Spectre x360" />
            <span className="chip" data-color="purple">
              Pro
            </span>
          </div>
          <div className="card-body">
            <p>HP · LAPTOP</p>
            <h3>HP Spectre x360</h3>
            <p>Intel i9 · 32GB · 1TB NVMe</p>
            <div className="card-footer-row">
              <span className="price-tag">Rs. 349,000</span>
              <button className="sm-button" onClick={() => addToCart('HP Spectre x360', 349000, 2)}>
                Add to Cart
              </button>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); showToast('Product details coming soon!'); }}>
              View Details →
            </a>
          </div>
        </div>

        <div className="card product-card">
          <div className="card-img" data-grad="sky">
            <img src="/img10.png" alt="Lenovo ThinkPad X1" />
            <span className="chip" data-color="sky">
              New
            </span>
          </div>
          <div className="card-body">
            <p>LENOVO · LAPTOP</p>
            <h3>ThinkPad X1 Carbon</h3>
            <p>AMD Ryzen 9 · 32GB · 1TB · 4K OLED</p>
            <div className="card-footer-row">
              <span className="price-tag">Rs. 420,000</span>
              <button className="sm-button" onClick={() => addToCart('ThinkPad X1 Carbon', 420000, 3)}>
                Add to Cart
              </button>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); showToast('Product details coming soon!'); }}>
              View Details →
            </a>
          </div>
        </div>

        <div className="card product-card">
          <div className="card-img" data-grad="red">
            <img src="/img11.png" alt="ASUS ROG Zephyrus" />
            <span className="chip" data-color="red">
              Sale
            </span>
          </div>
          <div className="card-body">
            <p>ASUS · GAMING</p>
            <h3>ROG Zephyrus G14</h3>
            <p>Ryzen 9 · RTX 4080 · 32GB · 2TB</p>
            <div className="card-footer-row">
              <span className="price-tag">Rs. 520,000</span>
              <button className="sm-button" onClick={() => addToCart('ROG Zephyrus G14', 520000, 4)}>
                Add to Cart
              </button>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); showToast('Product details coming soon!'); }}>
              View Details →
            </a>
          </div>
        </div>

        <div className="card product-card">
          <div className="card-img" data-grad="green">
            <img src="/img10.png" alt="MacBook Pro 14" />
          </div>
          <div className="card-body">
            <p>APPLE · LAPTOP</p>
            <h3>MacBook Pro 14"</h3>
            <p>M3 Pro · 18GB · 512GB SSD</p>
            <div className="card-footer-row">
              <span className="price-tag">Rs. 580,000</span>
              <button className="sm-button" onClick={() => addToCart('MacBook Pro 14', 580000, 5)}>
                Add to Cart
              </button>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); showToast('Product details coming soon!'); }}>
              View Details →
            </a>
          </div>
        </div>

        <div className="card product-card">
          <div className="card-img" data-grad="blue">
            <img src="/img11.png" alt="MSI Titan GT77" />
            <span className="chip" data-color="amber">
              Hot
            </span>
          </div>
          <div className="card-body">
            <p>MSI · GAMING</p>
            <h3>MSI Titan GT77</h3>
            <p>i9-13980HX · RTX 4090 · 64GB · 4TB</p>
            <div className="card-footer-row">
              <span className="price-tag">Rs. 750,000</span>
              <button className="sm-button" onClick={() => addToCart('MSI Titan GT77', 750000, 6)}>
                Add to Cart
              </button>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); showToast('Product details coming soon!'); }}>
              View Details →
            </a>
          </div>
        </div>

        <div className="card product-card">
          <div className="card-img" data-grad="sky">
            <img src="/img9.png" alt="Dell Inspiron 15" />
          </div>
          <div className="card-body">
            <p>DELL · LAPTOP</p>
            <h3>Dell Inspiron 15</h3>
            <p>Intel i5 · 8GB · 512GB SSD</p>
            <div className="card-footer-row">
              <span className="price-tag">Rs. 115,000</span>
              <button className="sm-button" onClick={() => addToCart('Dell Inspiron 15', 115000, 7)}>
                Add to Cart
              </button>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); showToast('Product details coming soon!'); }}>
              View Details →
            </a>
          </div>
        </div>

        <div className="card product-card">
          <div className="card-img" data-grad="purple">
            <img src="/img8.png" alt="HP EliteBook 840" />
          </div>
          <div className="card-body">
            <p>HP · BUSINESS</p>
            <h3>HP EliteBook 840</h3>
            <p>Intel i7 · 16GB · 512GB SSD · 14" FHD</p>
            <div className="card-footer-row">
              <span className="price-tag">Rs. 195,000</span>
              <button className="sm-button" onClick={() => addToCart('HP EliteBook 840', 195000, 8)}>
                Add to Cart
              </button>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); showToast('Product details coming soon!'); }}>
              View Details →
            </a>
          </div>
        </div>
      </div>

      {/* Load More */}
      <div className="load-more">
        <button className="border-button" onClick={() => showToast('Loading more products...')}>
          Load More Products
        </button>
      </div>
    </div>
  );
}

export default Products;
