import StripeCheckout from 'react-stripe-checkout'
import { Button, Segment, Divider } from 'semantic-ui-react'

export default ({
  handleCheckout,
  display_price: {
    with_tax: { amount, currency, formatted }
  }
}) => (
    <React.Fragment>
      <Divider />
      <Segment clearing size="large">
        <strong>Sub total:</strong> {formatted}
        <StripeCheckout
          name="wineryStore"
          amount={amount}
          currency={currency}
          stripeKey={process.env.pk_test_G0mhqaMKHA3z43hmgRI4M6oH}
          shippingAddress={false}
          billingAddress={true}
          zipCode={true}
          token={handleCheckout}
          reconfigureOnUpdate={false}
          triggerEvent="onClick"
        >
          <Button color="black" floated="right">
            Check out
        </Button>
        </StripeCheckout>
      </Segment>
    </React.Fragment>
  )
