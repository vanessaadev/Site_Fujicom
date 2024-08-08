import './Apresentation.css'
import vetor7 from '../../assets/img/vetor7.png'

export function Apresentation() {
    return(
        <div className='AprContainer'>
            <div className='AprImg'>
                <img src={vetor7} alt="" />
            </div>
        
            <div className='AprText'>
                <p>Na Fujicom, somos especialistas em produtos de hemoterapia, oferecendo soluções de alta qualidade para atender às necessidades de instituições de saúde.</p>
        
                <p>Oferecemos uma ampla gama de produtos e equipamentos de hemoterapia, como bolsas de sangue, kits de teste e dispositivos para o processo de hemoterapia. Cada item é escolhido para garantir qualidade e eficácia no tratamento.</p>
        
                {/* A Fujicom é uma empresa líder na comercialização de produtos médicos e hospitalares no Brasil, dedicada a oferecer soluções de alta qualidade para atender às necessidades de profissionais de saúde e instituições em todo o país. Desde a nossa criação, temos focado em entregar produtos confiáveis e inovadores, colaborando para a melhoria contínua dos serviços de saúde. Contamos com uma vasta gama de materiais, fruto de parcerias com fabricantes renomados, como a Terumo Medical Corporation, garantindo que nossos clientes recebam produtos que atendam aos mais rigorosos padrões de qualidade e tecnologia.
        
                Nossa missão é proporcionar o melhor suporte possível através de uma equipe comprometida e um atendimento personalizado. A Fujicom se destaca pela agilidade e eficiência em suas operações, assegurando que cada pedido seja processado e entregue com precisão. Atendemos mais de 200 hemocentros e hospitais em todo o Brasil, oferecendo suporte essencial para a excelência no cuidado à saúde, seja para hospitais, clínicas ou laboratórios. */}
            </div>
        
        </div>
    )
}