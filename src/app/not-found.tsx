export default function NotFound() {
    return (
      <main className="
        relative min-h-dvh grid place-items-center p-8 text-center 
        [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]
        [background-size:40px_40px]
      ">
        <div>
          <h1 className="text-2xl font-mono">404 — Not found</h1>
          <p className="text-muted-foreground mt-2">Couldn’t find that page.</p>
          <a href="/" className="mt-6 inline-block underline">Go home</a>
        </div>
      </main>
    );
  }
  