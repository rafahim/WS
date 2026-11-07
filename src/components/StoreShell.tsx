import type { ReactNode } from "react";
import StoreNavbar from "@/components/StoreNavbar";
import StoreFooter from "@/components/StoreFooter";

export default function StoreShell({ children }: { children: ReactNode }) {
  return <div className="store-site"><a className="skip-to-content" href="#main-content">Skip to content</a><StoreNavbar /><main id="main-content">{children}</main><StoreFooter /></div>;
}
