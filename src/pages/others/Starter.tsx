import { useTranslation } from '../../../node_modules/react-i18next';
import { Button, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import starterDark from 'assets/json/starter-dark.json';
import starter from 'assets/json/starter.json';
import { useThemeMode } from 'hooks/useThemeMode';
import Lottie from 'lottie-react';

const Starter = () => {
  const { t } = useTranslation();
  const { isDark } = useThemeMode();

  return (
    <Box
      sx={{
        display: 'grid',
        alignContent: { md: 'center' },
        height: 1,
        py: 10,
      }}
    >
    </Box>
  );
};

export default Starter;
