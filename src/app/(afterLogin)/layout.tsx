import { ReactNode } from "react";

export default async function AfterLoginLayout({
    children
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>after login 레이아웃{children}</div>
    )
}

// RootLayout -> HomeLayout -> Home