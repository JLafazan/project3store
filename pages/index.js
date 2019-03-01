import Layout from '../components/Layout'
import ProductList from '../components/ProductList'

import { getProducts } from '../lib/moltin'

const Home = ({ products }) => (
  <Layout title="Home">
    <container className="products">
      <ProductList products={products} />
    </container>
  </Layout>
)

Home.getInitialProps = async () => {
  const {
    json: { data, included }
  } = await getProducts()

  const products = data.map(product => {
    const imageId = product.relationships.main_image
      ? product.relationships.main_image.data.id
      : false

    return {
      ...product,
      image: imageId
        ? included.main_images.find(img => img.id === imageId).link.href
        : '/static/wine_logo2.jpg'
    }
  })

  return {
    products
  }
}

export default Home
