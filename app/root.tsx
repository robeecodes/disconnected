import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { useState } from "react";
import styled from "@emotion/styled";

import type { Route } from "./+types/root";
import "./app.css";

import { GlobalContext } from "./contexts/GlobalContext";
import { ButtonBox } from "./globals/components/Box";

export const links: Route.LinksFunction = () => [];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const SoundButton = styled(ButtonBox)({
  position: "fixed",
  top: "1rem",
  left: "1rem",
  zIndex: 20,

  padding: ".5em",

  fontFamily: "Gamja Flower",
  fontSize: "var(--fs-md)",

  background: "none",
  border: "none",
  color: "var(--font-dark)",

  div: {
    marginLeft: "-1.2em",
    marginTop: "-1.2em",
  },

  img: {
    transition: "transform 0.3s ease",
  },

  ":hover": {
    img: {
      ":last-of-type": {
        transform: "translate(.25rem, .25rem)",
      },
    },
  },
});

export default function App() {
  const [globalState, setGlobalState] = useState({ audio: false });
  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      <SoundButton onClick={() => setGlobalState((prev) => ({ ...prev, audio: !prev.audio }))}>
        {globalState.audio ? "Mute" : "Unmute"}
      </SoundButton>
      <Outlet />
    </GlobalContext.Provider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
