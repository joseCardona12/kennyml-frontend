"use client";

import { useEffect, useState } from "react";
import UtilApp from "./core/application/util/utilApplication.util";
import { ILoginResponse, IRegisterResponse } from "./core/application/dtos";
import { usePathname, useRouter } from "next/navigation";
import { routes } from "./routes";
import { IRouterState } from "./core/application/interfaces";

export default function PrivateRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  // const router = useRouter();
  // const pathname = usePathname();
  // const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  // useEffect(() => {
  //   const validateRoute = async () => {
  //     const getCookie = UtilApp.getCookies("user-credentials");
  //     console.log("ok", getCookie);
  //     const publicRoutes = routes.public.find(
  //       (route: IRouterState) => route.path === pathname
  //     );
  //     const privateRoutes = routes.private.find(
  //       (route: IRouterState) => route.path === pathname
  //     );

  //     if (privateRoutes?.path === pathname && !getCookie) {
  //       console.log("error");
  //       console.log({ message: "Error, is required all credentials" });
  //       router.push("/error-credentials");
  //       return;
  //     }

  //     const AUTHUSER = getCookie as ILoginResponse | IRegisterResponse;
  //     const AUTHROLE: number = AUTHUSER?.user?.role_id;

  //     if (publicRoutes?.path === pathname && AUTHUSER) {
  //       console.log("public rou path getcookie");
  //       router.push("/dashboard");
  //       return;
  //     }

  //     if (
  //       privateRoutes?.path === pathname &&
  //       (AUTHROLE === 2 || AUTHROLE === 3)
  //     ) {
  //       console.log("In progress");
  //       router.push("/in-progress");
  //       return;
  //     }
  //     setIsAuthorized(true);
  //   };

  //   validateRoute();
  // }, [pathname, router]);

  // if (!isAuthorized) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <div className="spinner"></div>
  //     </div>
  //   );
  // }

  return <>{children}</>;
}
