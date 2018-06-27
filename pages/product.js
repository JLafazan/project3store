import Layout from '../components/Layout'
import ProductSummary from '../components/ProductSummary'
// import ProductAttributes from '../components/ProductAttributes'

import { getProductById } from '../lib/moltin'

const ProductPage = ({ product }) => (
  <Layout title={product.name}>
    <ProductSummary {...product} />

    {/* <ProductAttributes {...product} />
     */}
  </Layout>
)

ProductPage.getInitialProps = async ({ query: { id } }) => {
  const { json: { data, included: { main_images } } } = await getProductById(id)

  const imageId = data.relationships.main_image
    ? data.relationships.main_image.data.id
    : false

  return {
    product: {
      ...data,
      image: imageId
        ? main_images.find(img => img.id === imageId).link.href
        : '/static/wine_logo2.jpg'
    }
  }
}

export default ProductPage
