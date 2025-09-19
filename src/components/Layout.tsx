import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-dvh bg-neutral-900 text-neutral-100">
      <div className=" mx-auto px-2 sm:px-12 md:px-2 :lg:px-2 py-12 sm:container md:container lg:max-w-full">
        {children}
      </div>
    </div>
  );
}
