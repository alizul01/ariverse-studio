import { ImageResponse } from 'next/og'
import { reader } from '../../../../lib/keystatic'

export const runtime = 'nodejs'

export const alt = 'Blog Post Preview'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const post = await reader.collections.posts.read(slug)

    if (!post) {
        return new ImageResponse(
            (
                <div
                    style={{
                        fontSize: 48,
                        background: '#250804',
                        color: '#FCEBD7',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    Post Not Found
                </div>
            ),
            {
                ...size,
            }
        )
    }

    return new ImageResponse(
        (
            <div
                style={{
                    background: '#250804',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FCEBD7',
                    position: 'relative',
                }}
            >
                {/* Background Image Overlay */}
                {post.coverImage && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={new URL(post.coverImage, 'https://ariversestudio.com/').toString()}
                        alt={post.title}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: 0.3
                        }}
                    />
                )}

                <div style={{ zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 80px' }}>
                    <div style={{ color: '#E2494B', fontSize: 24, fontWeight: 'bold', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '4px' }}>
                        Ariverse Studio Blog
                    </div>
                    <div style={{ fontSize: 70, fontWeight: 'bold', lineHeight: 1.1, marginBottom: 20, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                        {post.title}
                    </div>
                    <div style={{ display: 'flex', gap: 20, fontSize: 28, opacity: 0.8, marginTop: 10 }}>
                        <span>{post.publishedDate}</span>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
