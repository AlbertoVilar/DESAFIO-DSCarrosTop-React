import './styles.css'
import carImg from '../../assets/car.png';

export default function Card() {

    return(
        <div className="dsc-main-card">
                
                <h2>Venha nos visitar</h2>
                
                <div className="dsc-card">
                    <img src={carImg} alt="carro" />
                    <p>Lorem ipsum dolor</p>
                </div>

                <div className="dsc-card">
                    <img src={carImg} alt="carro" />
                    <p>Lorem ipsum dolor</p>
                </div>
            </div>
    )

}