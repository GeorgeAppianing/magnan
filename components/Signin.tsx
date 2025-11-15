import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Signin() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#141414]">
      <Card className="w-full max-w-sm bg-black text-white">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                placeholder="*********"
              />
            </div>
            <Button type="submit" className="w-full bg-white text-black">
              Login
            </Button>
          </form>
        </CardContent>
        {/* <CardFooter className="flex flex-col gap-2">
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
          <Link
            href="/signup"
            className="text-sm underline-offset-4 hover:underline"
          >
            Don’t have an account? Sign up
          </Link>
        </CardFooter> */}
      </Card>
    </div>
  );
}
