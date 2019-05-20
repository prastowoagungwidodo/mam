import { Platform } from 'react-native';
import { DefaultTheme, DarkTheme } from 'react-native-paper';

let fonts;

if (Platform.OS === 'ios') {
    fonts = {
        ...DefaultTheme.fonts,
        regular: 'Product Sans',
        medium: 'Product Sans Medium',
        light: 'Product Sans Light',
        thin: 'Product Sans Thin',
    };
} else {
    fonts = {
        ...DefaultTheme.fonts,
        regular: 'ProductSans-Regular',
        medium: 'ProductSans-Medium',
        light: 'ProductSans-Light',
        thin: 'ProductSans-Thin',
    };  
}

export const colors = {
    primary: '#45a1ff',
    accent: '#ff9400',
};

export const dark = {
    ...DarkTheme,
    fonts,
    colors: {
        ...DarkTheme.colors,
        primary: colors.primary,
        accent: colors.accent
    }
};

export const light = {
    ...DefaultTheme,
    fonts,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        accent: colors.accent,
        background: '#fff'
    }
};

export default light;

