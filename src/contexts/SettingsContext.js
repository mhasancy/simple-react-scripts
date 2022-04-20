import PropTypes from 'prop-types';
import { createContext } from 'react';
// hooks
import useLocalStorage from '../hooks/useLocalStorage';
// utils
import getColorPresets, { colorPresets, defaultPreset } from '../utils/getColorPresets';
// config
import { defaultSettings } from '../config';

// ----------------------------------------------------------------------

const initialState = {
  ...defaultSettings,
  onChangeMode: () => {},
  onToggleMode: () => {},
  setColor: defaultPreset
};

const SettingsContext = createContext(initialState);

// ----------------------------------------------------------------------

SettingsProvider.propTypes = {
  children: PropTypes.node,
};

function SettingsProvider({ children }) {
  const [settings, setSettings] = useLocalStorage('settings', {
    themeMode: initialState.themeMode,
  });

  const onChangeMode = (event) => {
    setSettings({
      ...settings,
      themeMode: event.target.value,
    });
  };

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === 'light' ? 'dark' : 'light',
    });
  };









 

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        // Mode
        onChangeMode,
        onToggleMode,

        setColor: getColorPresets(settings.themeColorPresets),
        colorOption: colorPresets.map((color) => ({
          name: color.name,
          value: color.main,
        })),


      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
