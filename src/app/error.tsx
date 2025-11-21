'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="text-center max-w-2xl">
                <div className="mb-8">
                    <div className="text-8xl mb-4">⚠️</div>
                    <h1 className="text-4xl md:text-5xl font-bold orbitron gradient-text mb-4">
                        Something Went Wrong
                    </h1>
                    <p className="text-muted-foreground text-lg mb-4">
                        An unexpected error occurred. Don't worry, it's not your fault!
                    </p>
                    {error.message && (
                        <div className="glass-card p-4 mb-8 text-left">
                            <p className="text-sm text-red-400 font-mono break-all">
                                {error.message}
                            </p>
                        </div>
                    )}
                </div>

                <div className="flex gap-4 justify-center flex-wrap">
                    <Button
                        onClick={reset}
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                        Try Again
                    </Button>
                    <Button
                        onClick={() => window.location.href = '/'}
                        variant="outline"
                        size="lg"
                        className="glass-card"
                    >
                        Back to Home
                    </Button>
                </div>

                {/* Decorative elements */}
                <div className="mt-16 grid grid-cols-3 gap-4 opacity-20">
                    <div className="h-2 bg-gradient-to-r from-red-600 to-transparent rounded"></div>
                    <div className="h-2 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 rounded"></div>
                    <div className="h-2 bg-gradient-to-l from-red-600 to-transparent rounded"></div>
                </div>
            </div>
        </div>
    )
}
