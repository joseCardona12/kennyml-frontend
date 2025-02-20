"use client";
import { IconBlocked } from "@/assets/icons";
import "./sectionErrorCredentials.styles.scss";
import { Button } from "@/ui/atoms";
import { useRouter } from "next/navigation";

export default function SectionErrorCredentials(): React.ReactNode {
  const router = useRouter();
  return (
    <main className="content-error-credentials">
      <section className="credentials-section">
        <span className="section-icon">
          <IconBlocked />
        </span>
        <h2 className="section-title">Error credentials</h2>
        <p className="section-paragraph">
          <span className="paragraph-mark">Access denied:</span> Invalid
          credentials or session expired. Please log in to continue.
        </p>
        <Button
          text="Go back login"
          type="button"
          onClick={() => router.push("/")}
        />
      </section>
    </main>
  );
}
