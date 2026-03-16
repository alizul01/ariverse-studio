import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

export const alt = 'About Ariverse Studio - Indie Game Studio from Malang'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
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
                {/* Decorative Background Elements */}
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(226,73,75,0.15) 0%, transparent 70%)',
                    borderRadius: '50%',
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '-20%',
                    left: '-10%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(226,73,75,0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                }} />

                <div style={{ zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 80px' }}>
                    <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 16, 
                        marginBottom: 32,
                        padding: '16px 32px',
                        background: 'rgba(226,73,75,0.1)',
                        border: '1px solid rgba(226,73,75,0.3)',
                        borderRadius: '50px',
                    }}>
                        <div style={{
                            width: 24,
                            height: 24,
                            background: '#E2494B',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <span style={{ color: '#FCEBD7', fontSize: 14, fontWeight: 'bold' }}>★</span>
                        </div>
                        <span style={{ color: '#E2494B', fontSize: 20, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '4px' }}>
                            Ariverse Studio
                        </span>
                    </div>

                    <div style={{ fontSize: 80, fontWeight: 'bold', lineHeight: 1.1, marginBottom: 24, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                        Our Story
                    </div>

                    <div style={{ 
                        display: 'flex',
                        fontSize: 32, 
                        opacity: 0.9, 
                        maxWidth: 800, 
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                        lineHeight: 1.5,
                    }}>
                        Indie Games Studio <span style={{ color: '#E2494B' }}>From Malang</span>
                    </div>

                    <div style={{ 
                        fontSize: 24, 
                        opacity: 0.7, 
                        maxWidth: 700, 
                        marginTop: 32,
                        fontStyle: 'italic',
                    }}>
                        &quot;We turn ordinary into extraordinary through immersive storytelling and engaging gameplay&quot;
                    </div>

                    {/* Stats Row */}
                    <div style={{ display: 'flex', gap: 48, marginTop: 48 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ fontSize: 48, fontWeight: 'bold', color: '#FCEBD7' }}>24</div>
                            <div style={{ fontSize: 14, color: '#E2494B', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginTop: 8 }}>Explorers</div>
                        </div>
                        <div style={{ width: 2, height: 60, background: 'rgba(252,235,215,0.2)' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ fontSize: 48, fontWeight: 'bold', color: '#FCEBD7' }}>03</div>
                            <div style={{ fontSize: 14, color: '#E2494B', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginTop: 8 }}>Active Worlds</div>
                        </div>
                        <div style={{ width: 2, height: 60, background: 'rgba(252,235,215,0.2)' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ fontSize: 48, fontWeight: 'bold', color: '#FCEBD7' }}>05+</div>
                            <div style={{ fontSize: 14, color: '#E2494B', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginTop: 8 }}>Years Orbit</div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
