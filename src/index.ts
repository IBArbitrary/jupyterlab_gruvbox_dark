import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab_gruvbox_dark extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_gruvbox_dark',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab_gruvbox_dark is activated!');
    const style = 'jupyterlab_gruvbox_dark/index.css';

    manager.register({
      name: 'jupyterlab_gruvbox_dark',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
