export default function Cart() {
  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1 className="page-title">Shopping Cart</h1>
        </div>

        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <a href="/shop" className="btn-primary">Continue Shopping</a>
        </div>
      </div>
    </div>
  );
}
