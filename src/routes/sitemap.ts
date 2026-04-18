import { SxProps } from '@mui/material';
import paths, { rootPaths } from './paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  key?: string;
  selectionPrefix?: string;
  path?: string;
  active?: boolean;
  icon?: string;
  iconSx?: SxProps;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  key?: string; // used for the locale
  subheader: string;
  icon: string;
  iconSx?: SxProps;
  items: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 'pagos',
    subheader: 'Pagos',
    key: 'pagos',
    icon: 'material-symbols:payments-outline-rounded',
    items: [
      {
        name: 'Consolidado Histórico',
        key: 'consolidado_historico',
        path: rootPaths.root,
        pathName: 'consolidado-historico',
        icon: 'material-symbols:play-circle-outline-rounded',
        active: true,
      },
      {
        name: 'Nuevos Movimientos',
        key: 'ingreso_nuevos_movimientos',
        pathName: 'ingreso-nuevos-movimientos',
        active: true,
        icon: 'material-symbols:warning-outline-rounded',
        path: paths[404],
      },
    ],
  },
  {
    id: 'facturacion',
    subheader: 'Facturación',
    key: 'facturacion',
    icon: 'material-symbols:receipt-long-outline-rounded',
    items: [{
        name: 'Consolidación de Pagos',
        key: 'consolidacion_pagos',
        path: paths[404],
        pathName: 'consolidacion-pagos',
        icon: 'material-symbols:play-circle-outline-rounded',
        active: true,
      },
      
      {
        name: 'Análisis de Mora del Cliente',
        key: 'analisis_mora_cliente',
        path: paths[404],
        pathName: 'analisis-mora-cliente',
        icon: 'material-symbols:play-circle-outline-rounded',
        active: true,
      },
      {
        name: 'Controles Antifraude',
        key: 'controles_antifraude',
        pathName: 'controles-antifraude',
        active: true,
        icon: 'material-symbols:warning-outline-rounded',
        path: paths[404],
      },
    ],
  },
  {
    id: 'authentication',
    subheader: 'Autenticación',
    key: 'authentication',
    icon: 'material-symbols:security-rounded',
    items: [
      {
        name: 'Login',
        key: 'login',
        icon: 'material-symbols:login',
        path: paths.defaultJwtLogin,
        pathName: 'login',
        active: true,
      },
      {
        name: 'Forgot password',
        key: 'forgot_password',
        icon: 'material-symbols:key-outline',
        path: paths.defaultJwtForgotPassword,
        pathName: 'forgot-password',
        active: true,
      },
      {
        name: 'Set password',
        key: 'set_password',
        icon: 'material-symbols:settings-outline',
        path: paths.defaultJwtSetPassword,
        pathName: 'default-set-password',
        active: true,
      },
    ],
  },
  
];

export default sitemap;
