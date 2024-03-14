import Card from '../../compnents/Card'
import Footer from '../../compnents/Footer'
import Header from '../../compnents/Header'
import SectionOpnions from '../../compnents/SectionOpnions'
import './styles.css'

export default function Catalog() {

    return(
        <>
                <Header />
            <main>
                <Card />
            </main>

            <section>
                <SectionOpnions />
            </section>

            <footer>
                <Footer />
            </footer>   
        </>       
    )

}