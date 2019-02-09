
import { PLATFORM } from 'aurelia-pal';

import { SvgContentLoader } from './content-loader';


export let Config = class Config {
  configure(aurelia) {
    aurelia.globalResources(PLATFORM.moduleName('./content-loader'));
  }
};

export function configure(aurelia, callback = null) {
  let config = aurelia.container.get(Config);

  if (typeof callback === 'function') {
    callback(config);
  }

  config.configure(aurelia);
}

export { SvgCodeLoader, SvgContentLoader, SvgFacebookLoader, SvgInstagramLoader, SvgListLoader };