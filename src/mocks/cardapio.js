import caixa_doces from '../../assets/caixa_doces.png'
import caixa_salgados from '../../assets/caixa_salgados.png'
import BoloNinho from '../../assets/Ninho.png'
import BoloChoco from '../../assets/BoloChoco.png'

const cardapio = {
    titulo: {
        ti: "Venha conhecer nossos produtos",
    },  
    bolos: {
        titulo: "Vários sabores",
        lista: [
            {
                nome: "Bolo de ninho com morango",
                preco: "75,00",
                imagem: BoloNinho,
            },
            {
                nome: "Bolo de chocolate com morango",
                preco: "75,00",
                imagem: BoloChoco,
            },
            {
                nome: "Caixa de salgados",
                preco: "45,00",
                imagem: caixa_salgados,
            },
            {
            nome: "Caixa de doces",
                preco: "80,00",
                imagem: caixa_doces,
            },
        ]
    },
} 

export default cardapio;