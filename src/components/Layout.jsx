import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Header 높이만큼 padding-top */}
      <main className="flex-1 pt-16">
        {children}
      </main>

      <Footer />
    </div>
  )
}