import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'

export const alt = 'Blog - Latest News and Devlogs from Ariverse Studio'
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
                    background: 'linear-gradient(180deg, rgba(226,73,75,0.08) 0%, transparent 40%, rgba(226,73,75,0.05) 100%)',
                }} />
                
                {/* Document/Article icons in background */}
                <div style={{
                    position: 'absolute',
                    top: '15%',
                    left: '8%',
                    width: 120,
                    height: 160,
                    border: '3px solid rgba(226,73,75,0.15)',
                    borderRadius: 16,
                    transform: 'rotate(-15deg)',
                }} />
                <div style={{
                    position: 'absolute',
                    top: '25%',
                    right: '10%',
                    width: 100,
                    height: 140,
                    border: '3px solid rgba(226,73,75,0.12)',
                    borderRadius: 16,
                    transform: 'rotate(10deg)',
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '18%',
                    left: '12%',
                    width: 110,
                    height: 150,
                    border: '3px solid rgba(226,73,75,0.1)',
                    borderRadius: 16,
                    transform: 'rotate(5deg)',
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
                            <span style={{ color: '#FCEBD7', fontSize: 14, fontWeight: 'bold' }}>✎</span>
                        </div>
                        <span style={{ color: '#E2494B', fontSize: 20, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '4px' }}>
                            Ariverse Studio Blog
                        </span>
                    </div>

                    <div style={{ fontSize: 80, fontWeight: 'bold', lineHeight: 1.1, marginBottom: 24, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                        Latest News & Devlogs
                    </div>

                    <div style={{ 
                        fontSize: 28, 
                        opacity: 0.85, 
                        maxWidth: 800, 
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                        lineHeight: 1.5,
                        marginBottom: 48,
                    }}>
                        Stay updated on our game development journey, industry thoughts, and behind-the-scenes insights
                    </div>

                    {/* Blog Post Preview Cards */}
                    <div style={{ display: 'flex', gap: 20, width: '100%', maxWidth: 900 }}>
                        <div style={{ 
                            flex: 1,
                            background: 'rgba(37,8,4,0.6)', 
                            border: '1px solid rgba(226,73,75,0.25)',
                            borderRadius: '20px',
                            padding: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 16,
                        }}>
                            <div style={{ 
                                height: 100, 
                                background: 'linear-gradient(135deg, rgba(226,73,75,0.3) 0%, rgba(37,8,4,0.8) 100%)',
                                borderRadius: '12px',
                            }} />
                            <div style={{ fontSize: 18, fontWeight: 'bold', lineHeight: 1.3 }}>Devlog: Building Immersive Worlds</div>
                            <div style={{ fontSize: 14, color: '#E2494B', fontWeight: 'bold' }}>5 min read</div>
                        </div>
                        <div style={{ 
                            flex: 1,
                            background: 'rgba(37,8,4,0.6)', 
                            border: '1px solid rgba(226,73,75,0.25)',
                            borderRadius: '20px',
                            padding: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 16,
                        }}>
                            <div style={{ 
                                height: 100, 
                                background: 'linear-gradient(135deg, rgba(226,73,75,0.25) 0%, rgba(37,8,4,0.8) 100%)',
                                borderRadius: '12px',
                            }} />
                            <div style={{ fontSize: 18, fontWeight: 'bold', lineHeight: 1.3 }}>Game Design Insights</div>
                            <div style={{ fontSize: 14, color: '#E2494B', fontWeight: 'bold' }}>8 min read</div>
                        </div>
                        <div style={{ 
                            flex: 1,
                            background: 'rgba(37,8,4,0.6)', 
                            border: '1px solid rgba(226,73,75,0.25)',
                            borderRadius: '20px',
                            padding: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 16,
                        }}>
                            <div style={{ 
                                height: 100, 
                                background: 'linear-gradient(135deg, rgba(226,73,75,0.2) 0%, rgba(37,8,4,0.8) 100%)',
                                borderRadius: '12px',
                            }} />
                            <div style={{ fontSize: 18, fontWeight: 'bold', lineHeight: 1.3 }}>Studio Updates</div>
                            <div style={{ fontSize: 14, color: '#E2494B', fontWeight: 'bold' }}>3 min read</div>
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
