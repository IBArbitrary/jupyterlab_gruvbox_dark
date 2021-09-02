import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab-gruvbox-dark extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-gruvbox-dark',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab-gruvbox-dark is activated!');
    const style = 'jupyterlab-gruvbox-dark/index.css';

    manager.register({
      name: 'jupyterlab-gruvbox-dark',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
