import { Box, Button, Stack, Typography } from '@mui/material';
import animation404Dark from 'assets/json/404-dark.json';
import animation404 from 'assets/json/404.json';
import { useThemeMode } from 'hooks/useThemeMode';
import Lottie from 'lottie-react';

const Page404 = () => {
  const { isDark } = useThemeMode();
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        p: { xs: 2.5, sm: 5 },
      }}
    >
      <Stack
        direction="column"
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            mb: 10,
            width: {
              xs: 300,
              sm: 500,
              md: 800,
              lg: 1046,
            },
            height: 'auto',
          }}
        >
          
        </Box>
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: 'text.disabled',
              fontWeight: 'medium',
              mb: 2,
            }}
          >
            Página no encontrada!
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              fontWeight: 'normal',
              mb: 5,
            }}
          >
            ¡No te preocupes! Vamos a llevarte de vuelta{' '}
          </Typography>

          <Button variant="contained" href="/" size="large" sx={{ px: 7 }}>
            Volver a inicio{' '}
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Page404;
