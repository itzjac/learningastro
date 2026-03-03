import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection( {
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        date:  z.date(),
        description:  z.string(),
        image: image(),
        // TODO(dagon): refine doesn't work
        // image: image().refine ( (img) => img.width < 1200, {
        // image: 'Image should be greated than 1200px' 
        //}),
        author: z.string(),
        tags: z.array(z.string()),
    })
});

export const collections = {
    blog: blogCollection,
};

