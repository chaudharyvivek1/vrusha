'use client'

import { Box, Typography } from '@mui/material'
import { keyframes } from '@mui/system'
import { useRouter } from 'next/navigation'; 
import { useEffect, useState } from 'react'

const gridShift = keyframes`
  from {
    background-position: 0 0, 0 0;
  }
  to {
    background-position: 0 0, 80px 80px;
  }
`

const glowPulse = keyframes`
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.04);
  }
`

const nameRise = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`

const fadeOut = keyframes`
  0%, 82% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
`

export default function Intro () {
  const [show, setShow] = useState(true)
  const router = useRouter();
//  useEffect(() => {
//     const timer = setTimeout(() => {
//       setShow(false)
//     }, 2200) // match fadeOut duration

//     return () => clearTimeout(timer)
//   }, [])

  // 🚀 Step 2: navigate AFTER state change

    // if (!show) {
    //   router.push('/home')
    // }

 // ⏱ control intro duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  // 🚀 SAFE navigation (async)
  useEffect(() => {
    // if (!show) {
      const navTimer = setTimeout(() => {
        router.push('/home')
      }
      , 
      2200) 

      return () => clearTimeout(navTimer)
    // }
  }, [show, router])

  if (!show) return null

  // if (!show) return null

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#050816',
        background:
          'radial-gradient(circle at center, rgba(87, 197, 255, 0.18), transparent 42%), linear-gradient(135deg, #050816 0%, #07111f 55%, #020409 100%)',
        animation: `${fadeOut} 2.2s ease forwards`
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(126, 207, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(126, 207, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
          animation: `${gridShift} 18s linear infinite`,
          opacity: 0.4
        }}
      />

      <Box
        sx={{
          position: 'relative',
          px: 4,
          py: 3,
          borderRadius: 5,
          border: '1px solid rgba(126, 224, 255, 0.16)',
          backgroundColor: 'rgba(4, 10, 22, 0.64)',
          boxShadow: '0 24px 90px rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(16px)'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: -2,
            borderRadius: 5,
            border: '1px solid rgba(108, 248, 185, 0.08)',
            animation: `${glowPulse} 2s ease-in-out infinite`
          }}
        />
        <Typography
          component="h1"
          sx={{
            position: 'relative',
            fontSize: { xs: '3.25rem', sm: '4.5rem', md: '6.5rem' },
            lineHeight: 0.95,
            fontWeight: 800,
            letterSpacing: '-0.08em',
            color: '#e8f4ff',
            textShadow: '0 0 34px rgba(126, 224, 255, 0.16)',
            animation: `${nameRise} 900ms ease both`
          }}
        >
          Vrusha
        </Typography>
      </Box>
    </Box>
  )
}