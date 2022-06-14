import styled from "styled-components"

const Container = styled.div`
	width: 92.5%;
	margin: 0 auto;
	height: 100vh;
	display: flex;
	flex-direction: column;
	color: #fff;
`

const Item = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 8px 0;
`

const ItemTitle = styled.h2`
	font-family: "Montserrat", sans-serif;
	font-size: 1.75rem;
	font-weight: 800;
	margin: 8px 0;
	padding: 0;
	text-transform: uppercase;
	text-decoration: underline;
`

const Album = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;

	& + & {
		margin: 0 16px;
	}

	&:last-child {
		margin: 0;
	}
`

const AlbumWrapper = styled.div`
	display: flex;
	overflow-x: auto;
`

const Cover = styled.img`
	width: auto;
	height: auto;
	border-radius: 6px;
	margin: 8px 0;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

const AlbumTitle = styled.h3`
	font-family: "Montserrat", sans-serif;
	font-size: 1.15rem;
	font-weight: 600;
	margin-bottom: 4px;
`

const AlbumArtist = styled.span`
	font-family: "Montserrat", sans-serif;
	font-size: 0.95rem;
	font-weight: 300;
	opacity: 0.5;
	margin-bottom: 8px;
`

const AlbumTags = styled.span`
	font-family: "Montserrat", sans-serif;
	font-size: 0.75rem;
	font-weight: 300;
	opacity: 0.75;
	padding: 0;
	white-space: nowrap;
	font-style: italic;
`

const AlbumYear = styled.h3`
	font-family: "Montserrat", sans-serif;
	font-size: 0.75rem;
	font-weight: 500;
	opacity: 0.5;
`

const SearchContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem 0;

	& input {
		width: 93.5%;
		border-radius: 6px;
		outline: none;
		border: 0;
		padding: 12px;
		background-color: #161b22;
		color: #fff;
		font-family: "Montserrat", sans-serif;
		font-weight: 500;
	}

	& input::placeholder {
		font-family: "Montserrat", sans-serif;
		font-size: 0.75rem;
		font-weight: 300;
		color: #fff;
		opacity: 0.5;
	}
`

const Home = () => {
	return (
		<Container>
			<SearchContainer>
				<input 
					placeholder="Search..."
				/>
			</SearchContainer>
			<Item>
				<ItemTitle>Trending</ItemTitle>
				<AlbumWrapper>
					<Album>
						<Cover src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.copertinedvd.org%2Fcopertine-cd-file%2FA%2Faphex_twin_-_selected_ambient_works_volume_ii_-_front.jpg&f=1&nofb=1" alt />
						<AlbumTitle>Selected Ambie...</AlbumTitle>
						<AlbumArtist>Aphex Twin</AlbumArtist>
						<div style={{
							display: "flex",
							justifyContent: "space-between"
						}}>
							<AlbumTags>Electronic, Ambient</AlbumTags>
							<AlbumYear>1994</AlbumYear>
						</div>
					</Album>
					<Album>
						<Cover src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.copertinedvd.org%2Fcopertine-cd-file%2FA%2Faphex_twin_-_selected_ambient_works_volume_ii_-_front.jpg&f=1&nofb=1" alt />
						<AlbumTitle>Selected Ambie...</AlbumTitle>
						<AlbumArtist>Aphex Twin</AlbumArtist>
						<div style={{
							display: "flex",
							justifyContent: "space-between"
						}}>
							<AlbumTags>Electronic, Ambient</AlbumTags>
							<AlbumYear>1994</AlbumYear>
						</div>
					</Album>
					<Album>
						<Cover src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.copertinedvd.org%2Fcopertine-cd-file%2FA%2Faphex_twin_-_selected_ambient_works_volume_ii_-_front.jpg&f=1&nofb=1" alt />
						<AlbumTitle>Selected Ambie...</AlbumTitle>
						<AlbumArtist>Aphex Twin</AlbumArtist>
						<div style={{
							display: "flex",
							justifyContent: "space-between"
						}}>
							<AlbumTags>Electronic, Ambient</AlbumTags>
							<AlbumYear>1994</AlbumYear>
						</div>
					</Album>
					<Album>
						<Cover src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.copertinedvd.org%2Fcopertine-cd-file%2FA%2Faphex_twin_-_selected_ambient_works_volume_ii_-_front.jpg&f=1&nofb=1" alt />
						<AlbumTitle>Selected Ambie...</AlbumTitle>
						<AlbumArtist>Aphex Twin</AlbumArtist>
						<div style={{
							display: "flex",
							justifyContent: "space-between"
						}}>
							<AlbumTags>Electronic, Ambient</AlbumTags>
							<AlbumYear>1994</AlbumYear>
						</div>
					</Album>
					<Album>
						<Cover src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.copertinedvd.org%2Fcopertine-cd-file%2FA%2Faphex_twin_-_selected_ambient_works_volume_ii_-_front.jpg&f=1&nofb=1" alt />
						<AlbumTitle>Selected Ambie...</AlbumTitle>
						<AlbumArtist>Aphex Twin</AlbumArtist>
						<div style={{
							display: "flex",
							justifyContent: "space-between"
						}}>
							<AlbumTags>Electronic, Ambient</AlbumTags>
							<AlbumYear>1994</AlbumYear>
						</div>
					</Album>
				</AlbumWrapper>
			</Item>
			<Item>
				<ItemTitle>Recent</ItemTitle>
				<AlbumWrapper>
					<Album>
						<Cover src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.copertinedvd.org%2Fcopertine-cd-file%2FA%2Faphex_twin_-_selected_ambient_works_volume_ii_-_front.jpg&f=1&nofb=1" alt />
						<AlbumTitle>Selected Ambie...</AlbumTitle>
						<AlbumArtist>Aphex Twin</AlbumArtist>
						<div style={{
							display: "flex",
							justifyContent: "space-between"
						}}>
							<AlbumTags>Electronic, Ambient</AlbumTags>
							<AlbumYear>1994</AlbumYear>
						</div>
					</Album>
					<Album>
						<Cover src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.copertinedvd.org%2Fcopertine-cd-file%2FA%2Faphex_twin_-_selected_ambient_works_volume_ii_-_front.jpg&f=1&nofb=1" alt />
						<AlbumTitle>Selected Ambie...</AlbumTitle>
						<AlbumArtist>Aphex Twin</AlbumArtist>
						<div style={{
							display: "flex",
							justifyContent: "space-between"
						}}>
							<AlbumTags>Electronic, Ambient</AlbumTags>
							<AlbumYear>1994</AlbumYear>
						</div>
					</Album>
					<Album>
						<Cover src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.copertinedvd.org%2Fcopertine-cd-file%2FA%2Faphex_twin_-_selected_ambient_works_volume_ii_-_front.jpg&f=1&nofb=1" alt />
						<AlbumTitle>Selected Ambie...</AlbumTitle>
						<AlbumArtist>Aphex Twin</AlbumArtist>
						<div style={{
							display: "flex",
							justifyContent: "space-between"
						}}>
							<AlbumTags>Electronic, Ambient</AlbumTags>
							<AlbumYear>1994</AlbumYear>
						</div>
					</Album>
					<Album>
						<Cover src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.copertinedvd.org%2Fcopertine-cd-file%2FA%2Faphex_twin_-_selected_ambient_works_volume_ii_-_front.jpg&f=1&nofb=1" alt />
						<AlbumTitle>Selected Ambie...</AlbumTitle>
						<AlbumArtist>Aphex Twin</AlbumArtist>
						<div style={{
							display: "flex",
							justifyContent: "space-between"
						}}>
							<AlbumTags>Electronic, Ambient</AlbumTags>
							<AlbumYear>1994</AlbumYear>
						</div>
					</Album>
					<Album>
						<Cover src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.copertinedvd.org%2Fcopertine-cd-file%2FA%2Faphex_twin_-_selected_ambient_works_volume_ii_-_front.jpg&f=1&nofb=1" alt />
						<AlbumTitle>Selected Ambie...</AlbumTitle>
						<AlbumArtist>Aphex Twin</AlbumArtist>
						<div style={{
							display: "flex",
							justifyContent: "space-between"
						}}>
							<AlbumTags>Electronic, Ambient</AlbumTags>
							<AlbumYear>1994</AlbumYear>
						</div>
					</Album>
				</AlbumWrapper>
			</Item>
			<Item>
				<ItemTitle>Library</ItemTitle>
			</Item>
		</Container>
	)
}

export default Home