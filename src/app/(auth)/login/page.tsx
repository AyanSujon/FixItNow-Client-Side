"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"

import Container from "@/components/common/Layout"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Container>
      <div className="flex min-h-screen items-center justify-center">
        <Card className="w-full max-w-sm shadow-lg">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-primary text-2xl font-bold">
              Welcome Back
            </CardTitle>

            <CardDescription>
              Login to your account to continue.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form className="space-y-5">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>

                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="focus-visible:ring-ring"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>

                  <Link
                    href="/forgot-password"
                    className="text-primary text-sm transition-colors hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    className="pr-11 focus-visible:ring-ring"
                  />

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute top-1/2 right-1 h-8 w-8 -translate-y-1/2 hover:bg-transparent"
                  >
                    {showPassword ? (
                      <EyeOff className="text-muted-foreground h-4 w-4" />
                    ) : (
                      <Eye className="text-muted-foreground h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>

          <CardFooter className="justify-center">
            <p className="text-muted-foreground text-sm">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-primary font-medium transition-colors hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </Container>
  )
}