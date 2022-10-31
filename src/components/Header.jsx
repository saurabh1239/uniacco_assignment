import { Box, Container } from '@mui/material'
import React from 'react'
import { dFlex, flexBetweenCenter,displayOnDesktop } from '../Themes/CommonTheme'
import Logo from './Logo'
import Locations from "./Locations"
import ProfileSetting from './ProfilleSetting'
import MobileSearch from './MobileSearch'

const Header = () => {
    return (
        <Box
        sx={{
          ...dFlex,
          minHeight: 60,
          borderBottom: '1px solid #ddd',
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              ...flexBetweenCenter,
              minHeight: 80,
              px: 4,
            }}
          >
            <Box sx={displayOnDesktop}>
              <Logo />
            </Box>
            <Box sx={displayOnDesktop}>
              <Locations/>
            </Box>
            <Box sx={displayOnDesktop}>
              <ProfileSetting/>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <MobileSearch/>
            </Box>
          </Box>
        </Container>
      </Box>
    )
}

export default Header