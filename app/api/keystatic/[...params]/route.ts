import type { NextRequest } from 'next/server';
import { makeRouteHandler } from '@keystatic/next/route-handler';
import config from '../../../../keystatic.config';

// Static export builds (production without GitHub OAuth) don't need the admin API.
// Dev and server deployments (with KEYSTATIC_GITHUB_CLIENT_ID) serve the real handler.
const isStaticExport =
    process.env.NODE_ENV === 'production' && !process.env.KEYSTATIC_GITHUB_CLIENT_ID;

export const dynamic = (isStaticExport ? 'force-static' : 'force-dynamic') as
    | 'force-static'
    | 'force-dynamic';

// Required for dynamic catch-all routes in static export mode
export function generateStaticParams() {
    return [];
}

const handler = isStaticExport ? null : makeRouteHandler({ config });

export async function GET(request: NextRequest): Promise<Response> {
    if (!handler) return new Response(null, { status: 404 });
    return handler.GET(request);
}

export async function POST(request: NextRequest): Promise<Response> {
    if (!handler) return new Response(null, { status: 404 });
    return handler.POST(request);
}
