import type { APIRoute, GetStaticPaths } from "astro";
import { getEntry } from "astro:content";

export const prerendered = false;

export const GET: APIRoute = async ( { params, request} ) => {
    
    const { slug } = params;

    const post = await getEntry('blog', slug as any);
    if (!post) {
        return new Response(JSON.stringify(post),
        {
            headers: {
            'Content-type': 'application/json'
            },
            status: 404});
        };

    return new Response(JSON.stringify(post), 
    { 
        headers: {
            'Content-type': 'application/json'
        },
        status: 201});
};

export const POST: APIRoute = async ( { params, request }) => {
    const body = await request.json();

    return new Response(JSON.stringify({
        method: 'POST',
        ...body

    }), {
        status: 200,
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export const PUT: APIRoute = async ( { params, request }) => {
    const body = await request.json();

    return new Response(JSON.stringify({
        method: 'PUT',
        ...body

    }), {
        status: 200,
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export const PATCH: APIRoute = async ( { params, request }) => {
    const body = await request.json();

    return new Response(JSON.stringify({
        method: 'PATCH',
        ...body

    }), {
        status: 200,
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export const DELETE: APIRoute = async ( { params, request }) => {
    const body = await request.json();

    const { slug } = params;

    return new Response(JSON.stringify({
        method: 'DELETE',
        slug: slug

    }), {
        status: 200,
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export const getStaticPaths: GetStaticPaths = async() => {
    return [

    ];

};