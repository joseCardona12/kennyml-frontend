"use client";
import "./loadingWrapper.styles.scss";

import { useEffect, useState } from "react";

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div>
      </div>
    );
  }
  return <>{children}</>;
}
