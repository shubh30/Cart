import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component{
  
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1555024502-f4472a2f0321?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          id: 1
        },
        {
          price: 99999,
          title: 'Phone',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1592821266573-4c773cfc5507?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=325&q=80',
          id: 2
        }, 
        {
          price: 9999999,
          title: 'Laptop',
          qty: 4,
          img: 'https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          id: 3
        }
      ]
    }
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter( (item) => item.id !== id);

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }

  getCartTotal = () => {
    const{ products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={ this.getCartCount() }/>
        <Cart 
          products = { products }
          onIncreaseQuantity = { this.handleIncreaseQuantity }
          onDecreaseQuantity = { this.handleDecreaseQuantity }
          onDeleteProduct = { this.handleDeleteProduct }
        />
        <div style={ { padding: 10, fontSize: 20 } }>TOTAL: { this.getCartTotal() }</div>
      </div>
    );
  }
}

export default App;
