import type { NextRequest } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

const ratelimit = new Ratelimit({
    redis: kv,
    limiter: Ratelimit.slidingWindow(2, "20m"),
});



export async function GET(request: NextRequest) {

    const ip = request.headers.get("x-forwarded-for") ?? '127.0.0.1';

    console.log('hii');
    const { limit, reset, remaining } = await ratelimit.limit(ip);
    if (remaining === 0) {
        return new Response(JSON.stringify({ error: "Too many requests,  Please try again later" }), {
            status: 429, headers: {
                "X-RateLimit-Limit": limit.toString(),
                "X-RateLimit-Reset": reset.toString(),
                "X-RateLimit-Remaining": remaining.toString(),
            }
        });
    }



    return Response.json({
        status: "ok",
    });
}