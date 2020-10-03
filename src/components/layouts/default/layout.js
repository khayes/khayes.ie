import React from 'react'
import Header from './header'
import Footer from './footer'
import Main from './main'

export default function DefaultLayout({children}) {
    return <React.Fragment>
                <Header />
                <Main>{children}</Main>
                <Footer />
           </React.Fragment>;
}