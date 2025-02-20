"use client";
import { useAuthUserState } from "@/app/core/application/global-state";
import UtilApp from "@/app/core/application/util/utilApplication.util";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthUser({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const router = useRouter();
  const { setData } = useAuthUserState((state) => state);

  useEffect(() => {
    const getCookie = UtilApp.getCookies("user-credentials");
    if (!getCookie) return;
    setData(getCookie);
  }, []);
  return <>{children}</>;
}
