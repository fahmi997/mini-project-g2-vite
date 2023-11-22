import FooterMain from "../../components/FooterMain"
import ContentTransactionEnded from "../../components/TransactionPage/ContentEnded"
import NavbarTransaction from "../../components/TransactionPage/Navbar"


const TransactionPageEnded = () =>{
    return<>
        <NavbarTransaction/>
        <ContentTransactionEnded/>
        <FooterMain/>
    </>
}

export default TransactionPageEnded