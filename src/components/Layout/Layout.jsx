import { Outlet } from "react-router-dom"
import { StyledLink, Header, Box } from './Layout.styled'

const Layout = () => {
return (
    <Box>
    <Header>
        <nav>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='/movies'>Movies</StyledLink>
    </nav>
    </Header>
    <main>
        <Outlet />
    </main>
    </Box>
)
}

export default Layout;
