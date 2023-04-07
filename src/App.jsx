import { Header } from './components/Header'
import { Links } from './components/Links'
import { Footer } from './components/Footer'

import links from './data'

function App() {

  const linksItens = links.map(link => {
    return <Links
      key={link.id}
      href={link.url}
      title={link.title}
    />
  })
  return (
    <>
      <Header />

      <ul className='mb-10'>
        {linksItens}
      </ul>

      <Footer />
    </>
  )
}

export default App
