import styled from 'styled-components'
import { NavLink } from "react-router-dom"

export const StyledLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    font-weight: 500;
    margin-left: 15px;

    &.active {
        color: #DC143C;   
    }
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 15px;
    padding: 15px;

    border-bottom: 2px solid;
    border-image: linear-gradient(to right, #ffffff, #90acaa, #6A9393, #ffffff ) 47% 0%;
`
export const Box = styled.div`
    margin: auto;
`

