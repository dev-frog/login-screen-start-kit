import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-[100dvh] grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block">
        <Image
          src="/images/ab-wal.jpg"
          width={1200}
          height={800}
          alt="login image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-6">
          <div>
            <h2 className="mt-6 text-center text-4xl font-bold tracking-tight text-foreground">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-lg text-muted-foreground">
              Or{" "}
              <a
                className="font-medium text-primary hover:text-primary/80"
                href="#"
              >
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-lg font-medium text-muted-foreground">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-lg"
                />
              </div>
            </div>
            <div>
              <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-lg font-medium text-muted-foreground">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-lg"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
