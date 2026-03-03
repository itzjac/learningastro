import { defineCollection, reference, z } from "astro:content";

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
        //author: z.string(),
        author: reference('author'),
        tags: z.array(z.string()),

        isDraft: z.boolean().default(false),
    })
});

const authorCollection = defineCollection ( {
    type: "data",
    schema: ({ image}) => z.object( {
        name: z.string(),
        avatar: image(),
    })
});

export const collections = {
    blog: blogCollection,
    author: authorCollection,
};

