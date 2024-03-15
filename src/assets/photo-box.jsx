import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";


export default function PhotoBox(props) {

    const [itemData, setItemData] = useState(props.itemData);
    const [clicked, setCliked] = useState(false);

    const handleLike = (e) => {
        if (!clicked) setCliked(true);
        if (clicked) return;
        console.log(props);
        e.target.style.color = "red";
        setItemData(props.itemData.like += 1);
    }

    return (
        <ImageListItem key={props.itemData.img}>
            <img
                srcSet={`${props.itemData.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${props.itemData.img}?w=248&fit=crop&auto=format`}
                alt={props.itemData.title}
                loading="lazy"
            />
            <ImageListItemBar
                title={props.itemData.title}
                subtitle={props.itemData.author}
                actionIcon={
                    <IconButton aria-label="like" onClick={handleLike} sx={{ mr: 3, color: props.color ? "red" : "black" }}>
                        <FavoriteIcon />
                        <div className='pointer-events-none'>
                            {props.itemData.like}
                        </div>
                    </IconButton>
                }
            />
        </ImageListItem>
    )
}

