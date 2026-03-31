"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { withBasePath } from "../lib/base-path";
import { headerNavigation, topBarItems } from "../lib/site-data";
import { cn } from "../../lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);

  useEffect(() => {
    setMenuOpen(false);
    setOpenMobileGroup(null);
  }, [pathname]);

  return (
    <>
      <header className="topbar">
        <div className="container topbar-grid">
          {topBarItems.map((item) => (
            <a className="topbar-item" href={item.href} key={item.label} target="_blank" rel="noreferrer">
              <span className="eyebrow">{item.label}</span>
              <span className="topbar-copy">{item.copy}</span>
            </a>
          ))}
        </div>
      </header>

      <nav className="nav" style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: "var(--paper)" }}>
        <div className="container nav-row">
          <div className="nav-shell w-full">
            <div className="grid min-h-[66px] grid-cols-[auto_1fr] items-center gap-4 min-[980px]:grid-cols-[auto_1fr_auto] min-[980px]:gap-8">
              <Link className="brand shrink-0" href="/" aria-label="Veterinary Business Institute home">
                <img src={withBasePath("/assets/logo.svg")} alt="Veterinary Business Institute" />
              </Link>

              <NavigationMenu className="nav-menu-root hidden min-[980px]:flex min-[980px]:justify-center" aria-label="Main">
                <NavigationMenuList className="nav-menu-list">
                  {headerNavigation.map((item) => {
                    if (item.type === "link") {
                      const isActive = pathname === item.href;

                      return (
                        <NavigationMenuItem key={item.href}>
                          <NavigationMenuLink
                            asChild
                            className={cn(navigationMenuTriggerStyle(), "nav-menu-link", isActive && "is-active")}
                          >
                            <Link href={item.href} aria-current={isActive ? "page" : undefined}>
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      );
                    }

                    const isActive = pathname === item.href || item.items.some((child) => pathname === child.href);

                    return (
                      <NavigationMenuItem key={item.label}>
                        <NavigationMenuTrigger
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "nav-menu-trigger",
                            isActive && "is-active"
                          )}
                        >
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="nav-menu-content">
                          <div className="nav-dropdown-shell">
                            <Link className="nav-dropdown-feature" href={item.href}>
                              <span className="card-label">{item.label}</span>
                              <h3>{item.label}</h3>
                              <p>{item.description}</p>
                            </Link>
                            <div className="nav-dropdown-list">
                              {item.items.map((child) => {
                                const childActive = pathname === child.href;

                                return (
                                  <Link
                                    className={cn("nav-dropdown-item", childActive && "is-active")}
                                    href={child.href}
                                    key={child.href}
                                  >
                                    <span>{child.label}</span>
                                    <p>{child.description}</p>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
                <NavigationMenuIndicator className="nav-menu-indicator" />
              </NavigationMenu>

              <Link
                className="button button-primary button-compact nav-cta hidden min-[980px]:inline-flex min-[980px]:whitespace-nowrap"
                href="/contact"
              >
                <span aria-hidden="true" className="nav-cta-fill" />
                <span className="nav-cta-label">Contact Now</span>
                <span aria-hidden="true" className="nav-cta-icon">&rarr;</span>
              </Link>

              <button
                className="menu-toggle ml-auto inline-flex min-[980px]:hidden"
                type="button"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>

        <div className={cn("container min-[980px]:hidden", !menuOpen && "hidden")}>
          <div className="mt-3 rounded-[24px] border border-[var(--border)] bg-white/95 p-5 shadow-[0_24px_60px_rgba(16,35,32,0.12)] backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {headerNavigation.map((item) => {
                if (item.type === "link") {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-base font-semibold text-[var(--ink-700)] transition-colors",
                        isActive && "bg-[rgba(47,107,69,0.12)] text-[var(--teal-500)]"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                }

                const isOpen = openMobileGroup === item.label;
                const isActive = pathname === item.href || item.items.some((child) => pathname === child.href);

                return (
                  <div className="mobile-nav-group" key={item.label}>
                    <div className="mobile-nav-row">
                      <Link
                        href={item.href}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className={cn("mobile-nav-link", isActive && "is-active")}
                      >
                        {item.label}
                      </Link>
                      <button
                        className="mobile-nav-toggle"
                        type="button"
                        aria-expanded={isOpen}
                        aria-label={isOpen ? `Collapse ${item.label}` : `Expand ${item.label}`}
                        onClick={() => setOpenMobileGroup((current) => (current === item.label ? null : item.label))}
                      >
                        <span className={cn("mobile-nav-chevron", isOpen && "is-open")} />
                      </button>
                    </div>

                    {isOpen ? (
                      <div className="mobile-nav-children">
                        {item.items.map((child) => {
                          const childActive = pathname === child.href;

                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              aria-current={childActive ? "page" : undefined}
                              className={cn("mobile-nav-child", childActive && "is-active")}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                );
              })}

              <Link className="button button-primary nav-cta mt-2" href="/contact">
                <span aria-hidden="true" className="nav-cta-fill" />
                <span className="nav-cta-label">Contact Now</span>
                <span aria-hidden="true" className="nav-cta-icon">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

