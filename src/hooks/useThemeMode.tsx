import { useCallback } from 'react';
import { useColorScheme } from '@mui/material';
import { ThemeMode, ThemePreset } from 'config';
import { useSettingsContext } from 'providers/SettingsProvider';
import { SET_THEME_PRESET } from 'reducers/SettingsReducer';
import { darkPalettes } from 'theme/palettes';

export const useThemeMode = () => {
  const { mode, systemMode, setMode } = useColorScheme();
  const { config, configDispatch } = useSettingsContext();

  const isDark = mode === 'system' ? systemMode === 'dark' : mode === 'dark';

  const setThemeMode = useCallback(
    (themeMode?: ThemeMode) => {
      setMode(themeMode ?? (isDark ? 'light' : 'dark'));
    },
    [setMode, systemMode, mode],
  );

  const setThemePreset = useCallback(
    (presetName: ThemePreset) => {
      configDispatch({ type: SET_THEME_PRESET, payload: presetName });
      setMode(presetName in darkPalettes ? 'dark' : 'light');
    },
    [configDispatch, setMode],
  );

  const resetTheme = useCallback(() => {
    setMode(null);
  }, [setMode]);

  return {
    mode,
    resetTheme,
    isDark,
    systemMode,
    setThemeMode,
    setThemePreset,
    themePreset: config.themePreset,
  };
};
