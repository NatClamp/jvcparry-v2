import React, { useContext } from 'react'
import { Container, Anchor, Icon, Text, Div, Button } from 'atomize'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

import Nav from './Nav';

const Header = () => {

    const { openCart } = useContext(ShopContext)

    return (
        <>
            <Container minW={{ xs: 'auto', md: '100vw' }} d="flex" flexDir="row" justify="space-between" align="center" bg="black" p="2rem">
                <Nav />
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <Div d="flex" flexDir="row" justify="center" align="center" w={{ xs: 'auto', md: '300px' }}>
                        <img src="https://jvcparry.files.wordpress.com/2020/08/cropped-jvcp-logo-inverted.png" alt="" style={{ maxHeight: '60px' }} />
                    </Div>
                </Link>
                <Anchor onClick={() => openCart()} w={{ xs: 'auto', md: '300px' }} d="flex" justify="flex-end"><Icon name="Bag" size="20px" color="gray400" /></Anchor>
            </Container>
        </>
    )
}

export default Header
