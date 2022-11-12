'use strict';

/**
 * timelog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::timelog.timelog');
