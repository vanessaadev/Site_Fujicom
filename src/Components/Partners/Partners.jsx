import './Partners.css'
import Orsense from '../../assets/img/orsense.png'
import Ashland from '../../assets/img/Ashland.png'
import Terumo from '../../assets/img/terumo.jpg'


export function Partners() {
    return(
        <div className='partners'>
        <h2>Conheça nossos Parceiros:</h2>

        <div className='partnersImg'>
        <a href="https://orsense.com/" target='_blank'><img src={Orsense} className='caixaParceiro' alt="Logo do Colaborador Orsense" /></a>
        <a href="https://www.ashland.com/" target='_blank'><img src={Ashland} className='caixaParceiro' alt="Logo do colaborado Ashland" /></a>
        <a href="https://www.terumo.com.br/" target='_blank'><img src={Terumo} className='caixaParceiro' alt="Logo do colaborador Terumo" /></a>
        </div>
        </div>
    )
}