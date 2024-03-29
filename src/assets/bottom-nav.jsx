import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Uploader from "./uploader"
import RefreshIcon from '@mui/icons-material/Refresh';

export default function SimpleBottomNavigation() {
    // const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: "100%" }}>
            <BottomNavigation
                showLabels
            // value={value}
            // onChange={(event, newValue) => {
            //     setValue(newValue);
            // }}
            >
                <BottomNavigationAction icon={<RefreshIcon />} onClick={() => window.location.reload(false)} />
                <Uploader />
            </BottomNavigation>
        </Box>
    );
}