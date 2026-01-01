import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  className?: string
  showText?: boolean
  textColor?: string
  size?: 'small' | 'medium' | 'large'
}

export default function Logo({ 
  className = '', 
  showText = true, 
  textColor,
  size = 'medium'
}: LogoProps) {
  const sizeMap = {
    small: 100,
    medium: 150,
    large: 180
  }
  
  const imageSize = sizeMap[size]
  const fontSizeMap = {
    small: '1.75rem',
    medium: '2.5rem',
    large: '2.75rem'
  }
  
  const textColorValue = textColor || (className.includes('footer') ? 'white' : '#2d5016')

  return (
    <Link href="/" className={`logo-link ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }}>
      <div 
        className="logo-image-wrapper"
        style={{
          width: 'auto',
          height: `${imageSize}px`,
          position: 'relative',
          display: 'inline-block',
          background: 'transparent'
        }}
      >
        <Image
          src="/logo.png"
          alt="Rugari Educate Foundation Logo"
          width={imageSize}
          height={imageSize}
          style={{ 
            width: 'auto',
            height: `${imageSize}px`,
            maxWidth: '100%',
            objectFit: 'contain',
            flexShrink: 0,
            background: 'transparent',
            display: 'block'
          }}
          className="logo-image"
          priority
          quality={100}
        />
      </div>
      {showText && (
        <span style={{ 
          fontSize: fontSizeMap[size], 
          fontWeight: 700, 
          color: textColorValue,
          whiteSpace: 'nowrap',
          letterSpacing: '-0.5px'
        }}>
          Rugari Educate Foundation
        </span>
      )}
    </Link>
  )
}

