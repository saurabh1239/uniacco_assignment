import { Box, Typography } from '@mui/material'
import React from 'react'
import { flexCenter } from '../Themes/CommonTheme'
import{FaAirbnb} from 'react-icons/fa'
import { pink } from '@mui/material/colors'

const Logo = () => {
  return (
    <Box sx={flexCenter}>
        <FaAirbnb size={40} color={pink[500]}/>
        <Typography sx={{
            ml:1,
            color: theme=>theme.palette.secondary.main,
            fontSize:"25px",
            fontWeight:'bold',
        }}
        component="h4"
        >airbnb
        </Typography>
    </Box>
    )
}

export default Logo