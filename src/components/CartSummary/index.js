import './index.css'

const CartSummary = props => {
  const {cartList} = props
  let total = 0
  const totalList = cartList.map(cartItem => cartItem.price * cartItem.quantity)
  total = totalList.reduce((acc, curr) => acc + curr, 0)
  return (
    <div className="summary-container">
      <h1>Order Total: Rs {total}/-</h1>
      <p>{cartList.length} Items in Cart</p>
      <button>Checkout</button>
    </div>
  )
}

export default CartSummary
