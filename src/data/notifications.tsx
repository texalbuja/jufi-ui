import { Typography } from '@mui/material';
import { initialConfig } from 'config';
import dayjs from 'dayjs';
import { Notification } from 'types/notification';
import { users } from './users';

export const notificationBadge = {
  birthday: { color: 'warning.main', icon: 'material-symbols:cake-rounded' },
  friend_request: { color: 'success.main', icon: 'material-symbols:person-add-rounded' },
  commented: { color: 'primary.main', icon: 'material-symbols:mode-comment-rounded' },
  following: { color: 'primary.main', icon: 'material-symbols:person-add-rounded' },
  reaction_love: { color: 'error.light', icon: 'material-symbols-light:favorite-rounded' },
  reaction_smile: { color: 'transparent', icon: 'noto:grinning-face-with-smiling-eyes' },
  photos: { color: 'primary.main', icon: 'material-symbols:imagesmode-rounded' },
  group_invitation: { color: 'primary.main', icon: 'material-symbols:group-rounded' },
  tagged: { color: 'primary.main', icon: 'material-symbols:sell' },
};

export const notifications: Notification[] = [
  
  {
    id: 2,
    type: 'commented',
    detail: (
      <>
        <Typography
          variant="body2"
          component="span"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          Alex Enderica
        </Typography>{' '}
        ha validado un nuevo pago
      </>
    ),
    readAt: null,
    user: [users[6]],
    createdAt: dayjs().subtract(20, 'm').toDate(),
  },
  {
    id: 3,
    type: 'friend_request',
    detail: (
      <>
        <Typography
          variant="body2"
          component="span"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          Mauricio Flores
        </Typography>{' '}
        Te ha asignado una nueva cartera
      </>
    ),
    readAt: new Date(),
    user: [users[4]],
    createdAt: dayjs().subtract(2, 'h').toDate(),
  }
];
