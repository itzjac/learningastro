import type { APIRoute } from "astro";
import { getCollection, getEntry } from "astro:content";
import { Clients, db } from 'astro:db';

export const prerendered = false;

export const GET: APIRoute = async ( { params, request} ) => {
    
    const body  =   {
        method: 'GET',
    };

    return new Response(JSON.stringify(body), {
        status: 200,
        headers: {
            'Content-type' : 'application/json',
        },
    });
};

export const POST: APIRoute = async ( { params, request} ) => {
    
    try {
        const { id, ...body} = await request.json();
        const row = await db.insert(Clients).values(body);
    
        return new Response(JSON.stringify({
            id: +row.lastInsertRowid!.toString(),
            ...body}), {
            status: 200,
            headers: {
                'Content-type' : 'application/json',
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify( {msg: 'No body found'}), {
            status: 200,
            headers: {
                'Content-type': 'application/json',
            },
        });
    }
};