import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="text-center max-w-2xl">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold orbitron gradient-text mb-4">404</h1>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                <div className="flex gap-4 justify-center flex-wrap">
                    <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                        <Link href="/">
                            Back to Home
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="glass-card">
                        <Link href="/admin">
                            Admin Panel
                        </Link>
                    </Button>
                </div>

                {/* Decorative elements */}
                <div className="mt-16 grid grid-cols-3 gap-4 opacity-20">
                    <div className="h-2 bg-gradient-to-r from-purple-600 to-transparent rounded"></div>
                    <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded"></div>
                    <div className="h-2 bg-gradient-to-l from-purple-600 to-transparent rounded"></div>
                </div>
            </div>
        </div>
    )
}
