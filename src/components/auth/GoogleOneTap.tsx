'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string
            callback: (response: { credential: string }) => void
            auto_select?: boolean
            cancel_on_tap_outside?: boolean
          }) => void
          prompt: (notification?: (notification: { isNotDisplayed: () => boolean; getNotDisplayedReason: () => string }) => void) => void
        }
      }
    }
  }
}

export default function GoogleOneTap() {
  useEffect(() => {
    const initializeGoogleOneTap = () => {
      if (typeof window !== 'undefined' && window.google) {
        const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

        if (!clientId) {
          console.warn('Google Client ID not configured. Please set NEXT_PUBLIC_GOOGLE_CLIENT_ID environment variable.')
          return
        }

        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: handleCredentialResponse,
          auto_select: false,
          cancel_on_tap_outside: true,
        })

        window.google.accounts.id.prompt((notification) => {
          if (notification.isNotDisplayed()) {
            console.log('One Tap not displayed:', notification.getNotDisplayedReason())
          }
        })
      }
    }

    // Wait for Google script to load
    if (window.google) {
      initializeGoogleOneTap()
    } else {
      const checkGoogle = setInterval(() => {
        if (window.google) {
          clearInterval(checkGoogle)
          initializeGoogleOneTap()
        }
      }, 100)

      return () => clearInterval(checkGoogle)
    }
  }, [])

  const handleCredentialResponse = async (response: { credential: string }) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

      const result = await fetch(`${apiUrl}auth/google/showcase`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key' : process.env.NEXT_API_KEY as string || "A/=h6eucodZfZVqgC3G`=>L=M]/$j}8*0o[lZ!ER@Y"
        },
        body: JSON.stringify({ credential: response.credential })
      })

      const data = await result.json()

      if (result.ok) {
        if (data.data.action === 'login') {
          console.log('✅ Connexion réussie:', data.data.user)
          window.location.href = data.data.redirectUrl
        }
      } else if (result.status === 202) {
        if (data.data.action === 'register') {
          console.log('ℹ️ Redirection vers création de compte avec données Google')
          sessionStorage.setItem('googleData', JSON.stringify(data.data.googleData))
          window.location.href = data.data.redirectUrl
        }
      } else {
        console.error('Erreur de connexion:', data.message)
      }
    } catch (error) {
      console.error('Error handling Google Sign-In:', error)
    }
  }

  return null
}
