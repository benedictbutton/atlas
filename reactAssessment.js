export default class Product extends Component {
  state = {
    cart: [],
    total: 0,
  };

  add = (product) => {
    this.setState((state) => ({
      cart: [...state.cart, product.name],
      total: state.total + product.price,
    }));
  };

  remove = (product) => {
    this.setState((state) => {
      const cart = [...state.cart];
      cart.splice(cart.indexOf(product.name));
      return {
        cart,
        total: state.total - product.price,
      };
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div>Shopping Cart: {this.state.cart.length} total items.</div>
        <div>Total {this.getTotal()}</div>
        <div>
          {products.map((product) => (
            <div key={product.name}>
              <div className="product">
                <span role="img" aria-label={product.name}>
                  {product.emoji}
                </span>
              </div>
              <button onClick={() => this.add(product)}>Add</button>
              <button onClick={() => this.remove(product)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

class Input extends React.PureComponent {
  render() {
    let { forwardedRef, ...otherProps } = this.props;
    return <input {...otherProps} ref={forwardedRef} />;
  }
}

const TextInput = React.forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />;
});



constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }