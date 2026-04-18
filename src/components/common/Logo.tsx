import { ImgHTMLAttributes } from 'react';
import { Link, Typography, typographyClasses } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import Image from 'components/base/Image';
import { useSettingsContext } from 'providers/SettingsProvider';
import { rootPaths } from 'routes/paths';

interface LogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  showName?: boolean;
  sx?: SxProps<Theme>;
}

const Logo = ({ sx, showName = true, ...rest }: LogoProps) => {
  const {
    config: { navColor },
  } = useSettingsContext();

  return (
    <Link
      href={rootPaths.root}
      underline="none"
      sx={{
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
          [`& .${typographyClasses.root}`]: {
            backgroundPosition: ({ direction }) => (direction === 'rtl' ? 'right' : 'left'),
          },
        },
      }}
    >
      <Image
        src="/jf.png"
        alt="Jufi logo"
        sx={{
          height: 40,
          width: 26,
          objectFit: 'contain',
          ...sx,
        }}
        {...rest}
      />
    </Link>
  );
};

export default Logo;
