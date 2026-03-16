import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

export const alt = 'Services - Game Development and Gamification Services'
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
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(226,73,75,0.05) 0%, transparent 50%, rgba(226,73,75,0.08) 100%)',
                }} />
                
                {/* Floating Service Icons Background */}
                <div style={{
                    position: 'absolute',
                    top: '15%',
                    left: '10%',
                    fontSize: 80,
                    opacity: 0.1,
                    color: '#E2494B',
                }}>🎮</div>
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    right: '15%',
                    fontSize: 80,
                    opacity: 0.1,
                    color: '#E2494B',
                }}>🚀</div>
                <div style={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '15%',
                    fontSize: 80,
                    opacity: 0.1,
                    color: '#E2494B',
                }}>🎯</div>
                <div style={{
                    position: 'absolute',
                    bottom: '15%',
                    right: '10%',
                    fontSize: 80,
                    opacity: 0.1,
                    color: '#E2494B',
                }}>⚡</div>

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
                        <span style={{ color: '#E2494B', fontSize: 20, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '4px' }}>
                            Ariverse Studio
                        </span>
                    </div>

                    <div style={{ fontSize: 70, fontWeight: 'bold', lineHeight: 1.1, marginBottom: 24, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                        Our Services
                    </div>

                    <div style={{ 
                        fontSize: 28, 
                        opacity: 0.85, 
                        maxWidth: 850, 
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                        lineHeight: 1.5,
                        marginBottom: 48,
                    }}>
                        Professional game development and gamification services. 
                        Unreal Engine, 3D Art, and immersive interactive experiences.
                    </div>

                    {/* Services Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, width: '100%', maxWidth: 800 }}>
                        <div style={{ 
                            background: 'rgba(226,73,75,0.08)', 
                            border: '1px solid rgba(226,73,75,0.2)',
                            borderRadius: '20px',
                            padding: '20px 28px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 16,
                        }}>
                            <span style={{ fontSize: 32 }}>🎮</span>
                            <span style={{ fontSize: 20, fontWeight: 'bold' }}>Game Development</span>
                        </div>
                        <div style={{ 
                            background: 'rgba(226,73,75,0.08)', 
                            border: '1px solid rgba(226,73,75,0.2)',
                            borderRadius: '20px',
                            padding: '20px 28px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 16,
                        }}>
                            <span style={{ fontSize: 32 }}>🎯</span>
                            <span style={{ fontSize: 20, fontWeight: 'bold' }}>Gamification</span>
                        </div>
                        <div style={{ 
                            background: 'rgba(226,73,75,0.08)', 
                            border: '1px solid rgba(226,73,75,0.2)',
                            borderRadius: '20px',
                            padding: '20px 28px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 16,
                        }}>
                            <span style={{ fontSize: 32 }}>🥽</span>
                            <span style={{ fontSize: 20, fontWeight: 'bold' }}>XR Development</span>
                        </div>
                        <div style={{ 
                            background: 'rgba(226,73,75,0.08)', 
                            border: '1px solid rgba(226,73,75,0.2)',
                            borderRadius: '20px',
                            padding: '20px 28px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 16,
                        }}>
                            <span style={{ fontSize: 32 }}>📚</span>
                            <span style={{ fontSize: 20, fontWeight: 'bold' }}>Interactive Learning</span>
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
