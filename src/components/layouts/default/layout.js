import React from 'react'
import Container from './container'
import Header from './header'
import Footer from './footer'
import Main from './main'

export default function DefaultLayout({children}) {
    return <Container>
                <Header />
                <Main>{children}</Main>
                <Footer />
           </Container>;
}