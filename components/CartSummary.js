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


          src="https://checkout.stripe.com/checkout.js" class="stripe-button"
          description="Charge to Credit Card"
          image="https://stripe.com/img/documentation/checkout/marketplace.png"
          locale="auto"

          name="winerystore"
          amount={amount}
          currency="USD"
          stripeKey={process.env.STRIPE_KEY}
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
