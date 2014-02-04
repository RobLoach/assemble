/**
 * Assemble <http://assemble.io>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

'use strict';

module.exports = function(assemble, callback) {
	return function(err) {
		if (err) {
			assemble.log.error(err);
			return callback(err);
		}
		assemble.log.info('Finished running assemble.');
		return callback();
	};
};