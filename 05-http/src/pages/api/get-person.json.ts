import type { APIRoute } from "astro";

const person = {
    name: 'Dagon',
    age: 101
}

export const GET: APIRoute = async ( { params, request} ) => {
    return new Response(JSON.stringify(person), 
    { 
        headers: {
            'Content-type': 'application/json'
        },
        status: 201});
}