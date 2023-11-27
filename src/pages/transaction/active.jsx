import FooterMain from "../../components/FooterMain"
import NavbarLogIn from "../../components/NavbarLogIn"
import ContentTransactionActive from "../../components/TransactionPage/ContentActive"
import NavbarTransaction from "../../components/TransactionPage/Navbar"

const TransactionPageActive = () =>{
    return<>
        <NavbarLogIn/>
        <ContentTransactionActive/>
        <FooterMain/>
    </>
}

export default TransactionPageActive