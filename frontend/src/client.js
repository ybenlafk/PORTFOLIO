import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: 'qojlibdq',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skz54BgQXHt7Z3o8awJQHorq4uEgpZtVx3SNgM9IHv3K0nFqKt2RMlsgXagQV0naBpK0utenhUjEokE3NDp9iFsDwZfjF664HJq245AJvwA60Z8S7EOL0XOdSnEG8eYC7VN9G1sohnpRUhFTgRXnen0N2XrspxCfctHTAycwJzm0NFmoVBty'
})

const builder = imageUrlBuilder(client);
export const urlFor = (source)=> builder.image(source);
