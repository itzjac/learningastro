import type { APIRoute } from "astro";
import { getEntry } from "astro:content";
import { Clients, db, eq, gt  } from 'astro:db';
export const prerendered = false;

export const PATCH: APIRoute = async ( { params, request} ) => {
    
    try {
        const clientId = params.clientId ?? '';
        const { id, ...body} = await request.json();
        const resp = await db.update(Clients).set(body).
        where( eq(Clients.id, +clientId) );
    
        const updatedClient = await db.select().from(Clients).
        where( eq(Clients.id, +clientId));
        return new Response(JSON.stringify(updatedClient), {
            status: 200,
            headers: {
                'Content-type' : 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify( {msg: 'No body found'}), {
            status: 200,
            headers: {
                'Content-type': 'application/json',
            },
        });
    }
};

export const DELETE: APIRoute = async ( { params, request} ) => {
    
    const clientId = params.clientId ?? '';

    const resp = await db.delete(Clients).where( eq(Clients.id, +clientId));
    const body  =   {
        clientId: clientId,
        method: 'DELETE',
    };

    return new Response(JSON.stringify({msg: 'Deleted'}), {
        status: 200,
        headers: {
            'Content-type' : 'application/json',
        },
    });
};

export const GET: APIRoute = async ( { params, request} ) => {
    
    try {
        const clientId = params.clientId ?? '';
        const rows = await db.select().from(Clients).where(
            eq(Clients.id, +clientId));
    
        return new Response(JSON.stringify(rows[0]), {
            status: 200,
            headers: {
                'Content-type' : 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify( {msg: 'No body found'}), {
            status: 200,
            headers: {
                'Content-type': 'application/json',
            },
        });
    }
};