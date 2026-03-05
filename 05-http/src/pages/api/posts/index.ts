import type { APIRoute } from "astro";
import { getCollection, getEntry } from "astro:content";

export const prerendered = false;

export const GET: APIRoute = async ( { params, request} ) => {
    
    const url = new URL( request.url );
    const slug = url.searchParams.get('slug');
    console.log(slug);
    if (slug) {
        const post = await getEntry('blog', slug);
        if (post) {
        return new Response(JSON.stringify(post), 
            { 
                headers: {
                    'Content-type': 'application/json'
                },
                status: 201});
        }
    }
    
    return new Response( JSON.stringify({msg: `Post ${slug} not found`}), 
            { 
                headers: {
                    'Content-type': 'application/json'
                },
                status: 404});
}