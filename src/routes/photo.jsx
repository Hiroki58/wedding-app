import BottomNav from "../assets/bottom-nav"
import { Button, Container, Stack } from '@mui/material'
import PhotoBox from "../assets/photo-box"
import ListSubheader from '@mui/material/ListSubheader';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import AlertDialog from '../assets/dialog';



export default function Photo() {
    const itemData = [
        {
            id: 1,
            img: 'https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364',
            title: 'Breakfast',
            author: '@bkristastucchio',
            like: 5,
        },
        {
            id: 2,
            img: 'https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364',
            title: 'Burger',
            author: '@rollelflex_graphy726',
            like: 2,
        },
        {
            id: 3,
            img: 'https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364',
            title: 'Camera',
            author: '@helloimnik',
            like: 54,

        },
        {
            id: 4,
            img: 'https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364',
            title: 'Coffee',
            author: '@nolanissac',
            like: 9,
        },
        {
            id: 5,
            img: 'https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364',
            title: 'Breakfast',
            author: '@bkristastucchio',
            like: 5,
        },
        {
            id: 6,
            img: 'https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364',
            title: 'Burger',
            author: '@rollelflex_graphy726',
            like: 2,
        },
        {
            id: 7,
            img: 'https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364',
            title: 'Camera',
            author: '@helloimnik',
            like: 54,

        },
        {
            id: 8,
            img: 'https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364',
            title: 'Coffee',
            author: '@nolanissac',
            like: 9,
        },
    ];
    return (
        <>
            <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', marginTop: "5px", marginBottom: "5px" }}>
                <AlertDialog title="Photo Contest!" content="Add your best photo for the contest to win the prize!" />
                <ImageList sx={{ width: "100vw", height: "70vh" }}>
                    <ImageListItem key="Subheader" cols={2}>
                        <ListSubheader component="div">Photo Contest</ListSubheader>
                    </ImageListItem>
                    {itemData.map((item) => (
                        <PhotoBox itemData={item} />
                    ))}
                </ImageList>
            </Container>

            <Container>
                <BottomNav sx={{ width: "100vw" }} />
            </Container>
        </>
    )
}