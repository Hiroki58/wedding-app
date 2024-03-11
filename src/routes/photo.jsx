import BottomNav from "../assets/bottom-nav"
import { Button, Container, Stack } from '@mui/material'
import PhotoBox from "../assets/photo-box"

export default function Photo() {
    return (
        <>
            <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                <PhotoBox />
                <PhotoBox />
                <PhotoBox />
                <PhotoBox />
                <PhotoBox />
                <PhotoBox />
            </Container>
            <Container maxWidth="sm" sx={{}}>
                <BottomNav />
            </Container>
        </>
    )
}