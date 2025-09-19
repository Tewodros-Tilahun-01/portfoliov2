import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-dvh relative text-neutral-100">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/path/to/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-neutral-900/60"></div>
      <div className="relative z-10 mx-auto px-2 sm:px-12 md:px-2 lg:px-2 py-12 pb-8 sm:container md:container lg:max-w-full">
        {children}
      </div>
    </div>
  );
}
