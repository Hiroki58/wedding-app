import BottomNav from "../assets/bottom-nav"
import { Button, Container, Stack } from '@mui/material'

export default function Photo() {
    return (
        <>
            <Container maxWidth="sm" sx={{ pt: 5, height: "90vh" }}>
                <BottomNav />
            </Container>
        </>
    )
}