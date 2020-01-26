import logger, {COLOR, compute} from './module';

compute(1, 2);

logger.log();

console.log(COLOR);

// OR

import * as module from './module';

module.compute(1, 2);

module.default.log();

console.log(module.COLOR);


