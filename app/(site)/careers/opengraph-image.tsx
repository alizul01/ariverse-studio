import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'

export const alt = 'Careers - Join the Ariverse Studio Team'
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
                    top: '-10%',
                    right: '-5%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(226,73,75,0.12) 0%, transparent 70%)',
                    borderRadius: '50%',
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '-5%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(226,73,75,0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                }} />

                {/* Rocket/Stars decoration */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '15%',
                    fontSize: 60,
                    opacity: 0.15,
                    color: '#E2494B',
                }}>✦</div>
                <div style={{
                    position: 'absolute',
                    top: '30%',
                    right: '20%',
                    fontSize: 50,
                    opacity: 0.15,
                    color: '#E2494B',
                }}>✦</div>
                <div style={{
                    position: 'absolute',
                    bottom: '25%',
                    left: '20%',
                    fontSize: 55,
                    opacity: 0.15,
                    color: '#E2494B',
                }}>✦</div>

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
                            width: 28,
                            height: 28,
                            background: '#E2494B',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <span style={{ color: '#FCEBD7', fontSize: 16, fontWeight: 'bold' }}>🚀</span>
                        </div>
                        <span style={{ color: '#E2494B', fontSize: 20, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '4px' }}>
                            Ariverse Studio
                        </span>
                    </div>

                    <div style={{ fontSize: 75, fontWeight: 'bold', lineHeight: 1.1, marginBottom: 20, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                        Join the Crew
                    </div>

                    <div style={{ 
                        fontSize: 30, 
                        opacity: 0.9, 
                        maxWidth: 750, 
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                        lineHeight: 1.5,
                        marginBottom: 40,
                    }}>
                        Build the future of interactive entertainment with us
                    </div>

                    {/* Department Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', maxWidth: 800 }}>
                        <div style={{ 
                            background: 'rgba(226,73,75,0.15)', 
                            border: '1px solid rgba(226,73,75,0.4)',
                            borderRadius: '50px',
                            padding: '14px 32px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                        }}>
                            <span style={{ fontSize: 22 }}>💻</span>
                            <span style={{ fontSize: 18, fontWeight: 'bold' }}>Engineering</span>
                        </div>
                        <div style={{ 
                            background: 'rgba(226,73,75,0.15)', 
                            border: '1px solid rgba(226,73,75,0.4)',
                            borderRadius: '50px',
                            padding: '14px 32px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                        }}>
                            <span style={{ fontSize: 22 }}>🎨</span>
                            <span style={{ fontSize: 18, fontWeight: 'bold' }}>Design & Art</span>
                        </div>
                        <div style={{ 
                            background: 'rgba(226,73,75,0.15)', 
                            border: '1px solid rgba(226,73,75,0.4)',
                            borderRadius: '50px',
                            padding: '14px 32px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                        }}>
                            <span style={{ fontSize: 22 }}>📊</span>
                            <span style={{ fontSize: 18, fontWeight: 'bold' }}>Production</span>
                        </div>
                        <div style={{ 
                            background: 'rgba(226,73,75,0.15)', 
                            border: '1px solid rgba(226,73,75,0.4)',
                            borderRadius: '50px',
                            padding: '14px 32px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                        }}>
                            <span style={{ fontSize: 22 }}>📢</span>
                            <span style={{ fontSize: 18, fontWeight: 'bold' }}>Marketing</span>
                        </div>
                    </div>

                    <div style={{ 
                        marginTop: 40, 
                        fontSize: 20, 
                        color: '#E2494B', 
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                    }}>
                        Remote • Full-time • Contract
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
