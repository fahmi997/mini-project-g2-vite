import FooterMain from "../../components/FooterMain"
import ContentTransactionActive from "../../components/TransactionPage/ContentActive"
import NavbarTransaction from "../../components/TransactionPage/Navbar"

const TransactionPageActive = () =>{
    return<>
        <NavbarTransaction/>
        <ContentTransactionActive/>
        <FooterMain/>
    </>
}

export default TransactionPageActive