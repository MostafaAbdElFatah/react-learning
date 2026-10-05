import type { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <main className="min-h-dvh bg-linear-to-b from-cyan-200 to-white to-[60vh]">
      {children}
    </main>
  );
}
