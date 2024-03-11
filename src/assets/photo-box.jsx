import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Margin } from '@mui/icons-material';

export default function TitlebarImageList() {
    return (
        <ImageList sx={{ width: "100vw", height: "70vh" }}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">Photo</ListSubheader>
            </ImageListItem>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        actionIcon={
                            <IconButton aria-label="like" sx={{ mr: 3 }}>
                                <FavoriteIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: 'https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img: 'https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img: 'https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364',
        title: 'Mushrooms',
        author: '@silverdalex',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
];