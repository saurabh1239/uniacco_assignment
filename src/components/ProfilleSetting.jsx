import { Box, Stack, Button, Link, Badge } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React from 'react'
import { BsGlobe } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { flexCenter } from '../Themes/CommonTheme';

const ProfileSetting = () => {
    return (
        <Box sx={flexCenter}>
            <Link href="#"> Become A Host</Link>
            <Stack>
                <Button>
                    <BsGlobe size={24} />
                </Button>
                <Button
                    sx={{
                        borderRadius: 10,
                        border: '1px solid #ddd',
                    }}
                >
                    <Stack>
                        <AiOutlineMenu size={24} />
                        <Badge color="primary" badgeContent={1}>
                            <AccountCircleOutlinedIcon fontSize={"medium"} />
                        </Badge>
                    </Stack>
                </Button>
            </Stack>
        </Box>
    );
};

export default ProfileSetting;