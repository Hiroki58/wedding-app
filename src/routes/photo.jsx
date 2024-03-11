import BottomNav from "../assets/bottom-nav"
import { Button, Container, Stack } from '@mui/material'
import PhotoBox from "../assets/photo-box"

export default function Photo() {
    return (
        <>
            <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', marginTop: "5px", marginBottom: "5px" }}>
                <PhotoBox />
            </Container>
            <Container>
                <BottomNav sx={{ width: "100vw" }} />
            </Container>
        </>
    )
}