import { products } from '~/app/data'
import { Card } from '~/app/components/card'
import { Product } from '~/app/components/product'

export function Products() {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="animate-glow animate-fade-left hidden h-px w-screen bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />

      <div className="container mx-auto flex items-center justify-center px-4">
        <div className="mx-auto mt-32 grid w-full grid-cols-1 gap-8 sm:mt-0 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.slug} color="purple">
              <Product project={product} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
