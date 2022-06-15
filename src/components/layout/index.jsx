import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';



const Layout = (props) => {

    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}
Layout.propTypes = {
    children: PropTypes.object.isRequired,
};
export default Layout;
