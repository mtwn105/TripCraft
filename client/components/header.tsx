"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Luggage, Menu, X } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  async function handleLogout() {
    try {
      await authClient.signOut();
      toast.success("Logged out successfully");
      router.push("/");
    } catch (error) {
      toast.error("Failed to log out");
      console.error("Logout error:", error);
    }
  }

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <h1 className="text-2xl font-bold text-accent">TripCraft AI</h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            {session?.user && (
              <Link
                href="/plans"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Luggage className="w-4 h-4" />
                My Plans
              </Link>
            )}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {isPending ? (
              <div className="w-24 h-8 bg-muted/50 animate-pulse rounded-md" />
            ) : session?.user ? (
              <div className="flex items-center gap-4">
                <div className="text-sm hidden lg:block">
                  <span className="text-muted-foreground">Welcome, </span>
                  <span className="font-medium">
                    {session.user.name || session.user.email}
                  </span>
                </div>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/auth">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/plan">
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <nav className="flex flex-col gap-4">
              {session?.user && (
                <Link
                  href="/plans"
                  className="flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Luggage className="w-5 h-5" />
                  My Plans
                </Link>
              )}
            </nav>
            <div className="border-t border-border pt-4">
              {isPending ? (
                <div className="w-full h-10 bg-muted/50 animate-pulse rounded-md" />
              ) : session?.user ? (
                <div className="flex flex-col items-start gap-4">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Welcome, </span>
                    <span className="font-medium">
                      {session.user.name || session.user.email}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link href="/auth" className="w-full">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/plan" className="w-full">
                    <Button
                      className="bg-primary hover:bg-primary/90 w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
