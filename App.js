import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			products: [
				{
					title: 'Phones',
					price: 10999,
					qty: 1,
					img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
					id: 1
				},
				{
					title: 'Watch',
					price: 999,
					qty: 1,
					img: 'https://images.unsplash.com/photo-1512034705137-dc51c5ed36f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1042&q=80',
					id: 2
				},
				{
					title: 'Laptop',
					price: 44999,
					qty: 1,
					img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
					id: 3
				}
			]

		}
		//this.increaseQuantity = this.increaseQuantity.bind(this);  //we are using arrow functions so dont need this
		//this.decreseQuantity = this.decreseQuantity.bind(this);
	}
	handleIncreaseQuantity = (product) => {
		console.log("Hey, increase", product)
		const { products } = this.state;
		const index = products.indexOf(product);
		products[index].qty += 1;
		this.setState({
			products: products
		})
	}
	handleDecreaseQuantity = (product) => {
		console.log("Hey, increase", product)

		const { products } = this.state;
		const index = products.indexOf(product);
		if (products[index].qty === 0) {
			return;
		}
		products[index].qty -= 1;
		this.setState({
			products: products
		})
	}
	handleDeleteProduct = (id) => {
		const { products } = this.state;
		const items = products.filter((item) => item.id !== id);  //[{ }]
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
		const { products } = this.state;
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
				<Navbar count={this.getCartCount()} />
				<Cart
					products={products}
					onIncreaseQuantity={this.handleIncreaseQuantity}
					onDecreaseQuantity={this.handleDecreaseQuantity}
					onDeleteProduct={this.handleDeleteProduct}
				/><hr/>
				<div style={
					{ 
						display: 'flex', 
						flexDirection: 'column', 
						fontSize: 50, 
						alignItems: 'center' 
						}
					}>TOTAL : {this.getCartTotal()}
				</div>
			</div >
		);
	}
}

export default App;
