return (
  <>
    <h1>Cart</h1>
    <section className="cartItem">
      <p>CART_ITEM_NAME_HERE</p>
      <p>CART_ITEM_CATEGORY_HERE</p>
      <p>CART_ITEM_PRICE_HERE</p>
      <p>for: <input /></p>
      <label>Special requests</label>
      <textarea></textarea>
      <button>Remove</button>
    </section>
    <section>
      <p>Tax: TAX_HERE</p>
      <p>Total: CART_TOTAL_HERE</p>
      <p>Tip: <input type="number" step="0.01" /></p>
      <p>Amount to charge: GRAND_TOTAL_HERE</p>
    </section>
    <section>
      <label>Deliver to...</label>
      <input />
    </section>
    <section>
      <h2>Payment</h2>
      <h3>Credit card</h3>
      <label htmlFor="pan">Number</label>
      <input id="pan" required />
      <label htmlFor="expiryMonth">Month</label>
      <input type="number" id="expiryMonth" required />
      <label htmlFor="expiryYear">Year</label>
      <input type="number" id="expiryYear" required />
      <label htmlFor="cvv">CVV</label>
      <input id="cvv" required />
      <button>Place order</button>
    </section>
  </>
);