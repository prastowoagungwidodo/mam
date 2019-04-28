/** @format */
/**
 * Ini adalah file paling awal yang diakses react-native
 * File ini hanya me-register nama aplikasi dengan file index aplikasinya (app/Entrypoint)
 */

import { AppRegistry } from 'react-native';
import App from './app/Entrypoint';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
