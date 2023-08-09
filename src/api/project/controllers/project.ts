/**
 * project controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::project.project', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;

        const entity = await strapi.db.query('api::project.project').findOne({
            where: { slug: id },
            populate: ["heroImage", "showcaseImage", "tools", "gallery"],
          
            


        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        
        

        return this.transformResponse(sanitizedEntity);
    }
}));
