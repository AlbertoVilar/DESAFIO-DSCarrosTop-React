import Card from '../../compnents/Card'
import Header from '../../compnents/Header'
import SectionOpnions from '../../compnents/SectionOpnions'
import './styles.css'

export default function Catalog() {

    return(
        <>
            <Header />
        <main className='dsc-main'>
            <Card />
        </main>

        <section className='.dsc-interface-model'>
                <SectionOpnions />
        </section>
        </>       
    )

}