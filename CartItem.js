import React from 'react';

const CartItem = (props) => {
    /*
    increaseQuantity = () => {
        //console.log('this', this.state);
        // this.setState({                  // we can use it when nothing is dependent on previous state
        // setState form - 1
        //     qty: this.state.qty + 1
        // });
        
        // setState form - 2
        this.setState((prevState) => {     //when we require previous state we will use function form (prevState)
            return {
                qty : prevState.qty + 1   //qty is dependendt on previous state bcoz we need qty and add 1 to it
            }
        });
    }
    decreseQuantity = () => {
        const { qty } = this.state;
        if ( qty === 0){
            return; 
        }
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        });
    }
    deleteQuantity = (prevState) => {
        return {
            
        }

    }*/

    const { title, price, qty} = props.product;
    const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
    } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} alt="" src={ product.img }/>
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}> {title} </div>
                <div style={{ color: '#777' }}> Rs {price} </div>
                <div style={{ color: '#777' }}> Qty: {qty} </div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img
                        alt="increase"
                        className="action-icons"
                        src="https://img-premium.flaticon.com/png/512/992/992651.png?token=exp=1621153850~hmac=07e01f119bc624c6b9bcd317852b91ca"
                        onClick={() => onIncreaseQuantity(product)}
                    />
                    <img
                        alt="decrease"
                        className="action-icons"
                        src="https://img-premium.flaticon.com/png/512/992/992683.png?token=exp=1621153774~hmac=ec07c4552b5de11b1e70f3edadba7aa0"
                        onClick={() => onDecreaseQuantity(product)}
                    />
                    <img
                        alt="delete"
                        className="action-icons"
                        src="https://img-premium.flaticon.com/png/512/1214/1214428.png?token=exp=1621153882~hmac=5aa96c055ae6b9ccae3890b11c63de4f"
                        onClick={() => onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>
    )
}


const styles = {
    image: {
        height: 100,
        width: 100,
        borderRadius: 4,
        background: '#ccc'
    }
};
export default CartItem;