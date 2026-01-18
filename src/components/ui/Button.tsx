import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  pulse?: boolean
  className?: string
}

export function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  pulse = false,
  className = '',
}: ButtonProps) {
  const baseStyles = 'relative font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center'

  const variants = {
    primary: 'bg-orange-500 text-white hover:bg-orange-400 active:bg-orange-600',
    secondary: 'bg-dark-700 text-white hover:bg-dark-600 border border-dark-600',
    outline: 'bg-transparent text-orange-500 border-2 border-orange-500 hover:bg-orange-500/10',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const content = (
    <motion.span
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileTap={{ scale: 0.97 }}
      style={pulse ? { boxShadow: '0 0 20px rgba(255, 107, 0, 0.4)' } : undefined}
    >
      {pulse && (
        <>
          <span className="absolute inset-0 rounded-full bg-orange-500 pulse-ring" />
          <span className="absolute inset-0 rounded-full bg-orange-500 pulse-ring" style={{ animationDelay: '0.5s' }} />
        </>
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} className="inline-block">
      {content}
    </button>
  )
}
