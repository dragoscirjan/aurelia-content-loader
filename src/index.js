import { PLATFORM } from 'aurelia-pal';

import { SvgCodeLoader } from './code-loader';
import { SvgContentLoader } from './content-loader';
import { SvgFacebookLoader } from './facebook-loader';
import { SvgInstagramLoader } from './instagram-loader';
import { SvgListLoader } from './list-loader';

export class Config {
  /**
   * @param {FrameworkConfiguration} aurelia
   */
  configure(aurelia) {
    aurelia.globalResources(PLATFORM.moduleName('./code-loader'));
    aurelia.globalResources(PLATFORM.moduleName('./content-loader'));
    aurelia.globalResources(PLATFORM.moduleName('./facebook-loader'));
    aurelia.globalResources(PLATFORM.moduleName('./instagram-loader'));
    aurelia.globalResources(PLATFORM.moduleName('./list-loader'));
  }
}

/**
 * @param {FrameworkConfiguration} aurelia
 * @param {Function}               [callback=null]
 */
export function configure(aurelia, callback = null) {
  let config = aurelia.container.get(Config);

  if (typeof callback === 'function') {
    callback(config);
  }

  config.configure(aurelia);
}

export { SvgCodeLoader, SvgContentLoader, SvgFacebookLoader, SvgInstagramLoader, SvgListLoader };
