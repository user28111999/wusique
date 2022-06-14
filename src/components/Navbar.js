import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1)
`

const Item = styled.div`
	display: flex;
`

const Navbar = () => {
	return (
		<Container>
			<Link to="/">
				Library
			</Link>
			<Link to="/search">
				Search
			</Link>
		</Container>
	)
}

export default Navbar