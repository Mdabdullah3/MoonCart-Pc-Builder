/* eslint-disable react/jsx-no-undef */

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
            <footer
                style={{
                    textAlign: "center",
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </footer>
        </div>

    );
};

export default RootLayout;