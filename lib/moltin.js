import { gateway as MoltinGateway } from '@moltin/sdk'

const Moltin = MoltinGateway({
    client_id:
        process.env.MOLTIN_CLIENT_ID || 'a7b4YLPqTqbKmyYZ5B1pcFsWtHEZt3n9PZGfrCJR6g'
})

export const getProducts = () => Moltin.Products.All()


