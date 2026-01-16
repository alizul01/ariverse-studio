import { ImageResponse } from 'next/og'
import { reader } from '../../../../lib/keystatic'

export const runtime = 'nodejs'

export const alt = 'Game Preview'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const game = await reader.collections.games.read(slug)

    if (!game) {
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
                    Game Not Found
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
                    background: '#250804', // Ariverse dark theme
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
                {game.coverImage && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={new URL(game.coverImage, 'https://ariversestudio.com/').toString()}
                        alt={game.title}
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
                        Ariverse Studio
                    </div>
                    <div style={{ fontSize: 80, fontWeight: 'bold', lineHeight: 1.1, marginBottom: 20, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                        {game.title}
                    </div>
                    <div style={{ fontSize: 32, opacity: 0.9, maxWidth: 900, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                        {game.description && game.description.length > 100 ? game.description.substring(0, 100) + '...' : game.description}
                    </div>
                    {game.platforms && (
                        <div style={{ display: 'flex', marginTop: 40, gap: 20 }}>
                            {game.platforms.map((p: string) => (
                                <div key={p} style={{ background: '#E2494B', color: 'white', padding: '10px 24px', borderRadius: 50, fontSize: 24, fontWeight: 'bold' }}>
                                    {p}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
