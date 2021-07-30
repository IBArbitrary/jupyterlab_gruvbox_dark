import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the @IBArbitrary/jupyterlab_gruvbox_dark extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@IBArbitrary/jupyterlab_gruvbox_dark:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension @IBArbitrary/jupyterlab_gruvbox_dark is activated!');
  }
};

export default plugin;
