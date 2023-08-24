/* eslint-disable react/jsx-no-undef */

import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const RootLayout = ({ children }) => {

    return (
        <div>
            <header className=''>
                <Navbar />
            </header>
            <section className=' min-h-screen'>
                {children}
            </section>
            <footer>
                <Footer />
            </footer>
        </div>

    );
};

export default RootLayout;