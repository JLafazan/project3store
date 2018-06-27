import { Input, Button, Label } from 'semantic-ui-react'

import { addToCart } from '../lib/moltin'

export default class AddToCart extends React.Component {
  state = {
    loading: false,
    quantity: 1
  }

  _handleSubmit = async () => {



    console.log("~~~~~~~YOU HIT THIS HANDLE SUBMIT~~~")
    console.log("props: ", this.props);
    console.log("state: ", this.state);

    // const { cartId } = this.props

    const { productId } = this.props
    const { quantity } = this.state
    // const cartId = await localStorage.getItem('mcart')

    const cartId = await localStorage.getItem('mcart')

    this.setState({
      loading: true
    })

    const cart = await addToCart(cartId, productId, quantity)

    // const cart = await addToCart(productId, quantity)

    // await addToCart(productId, quantity)




    this.setState({
      loading: false,
      quantity: 1
    })
  }

  _handleChange = ({ target: { value } }) =>
    this.setState({
      quantity: value
    })

  render() {
    const { loading, quantity } = this.state

    return (
      <Input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={e => this._handleChange(e)}
        action={{
          color: 'orange',
          content: 'Add to Cart',
          icon: 'plus cart',
          onClick: this._handleSubmit,
          loading,
          disabled: loading
        }}
      />
    )
  }
}
