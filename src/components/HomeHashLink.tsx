"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

import { resolveHomeHashHref } from "@/lib/nav-href";

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

export function HomeHashLink({ href, ...rest }: Props) {
  const pathname = usePathname();
  return <Link href={resolveHomeHashHref(pathname, href)} {...rest} />;
}
