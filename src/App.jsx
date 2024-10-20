import { Hero, CustomerReviews, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality, Footer } from "./sections"
import Nav from "./Components/Nav"


const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="xl:padding-1 wide:padding-r padding-b padding-x">
      <PopularProducts />
    </section>
    <section className="xl:padding-1 wide:padding-r padding-b padding-x">
      <SuperQuality />
    </section>
    <section className="xl:padding-1 wide:padding-r padding-b padding-x">
      <Services />
    </section>
    <section className="xl:padding-1 wide:padding-r padding-b padding-x">
      <SpecialOffers />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />

    </section>
    <section className="padding-t padding-x bg-black pb-8">
      <Footer />
    </section>
  </main>
)

export default App