import Product from "./product";

const ProductList = ({ products, onDeleteProduct }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Product
          key={product.id}
          {...product}
          onDelete={onDeleteProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;