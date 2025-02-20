"use client";
import { useRouter } from "next/navigation";
import { IconWarning } from "..";
import "./sectionInProgress.styles.scss";
import { Button } from "@/ui/atoms";

export default function SectionInProgress(): React.ReactNode {
  const router = useRouter();
  return (
    <main className="content-in-progress">
      <section className="progress-section">
        <span className="section-icon">
          <IconWarning />
        </span>
        <h2 className="section-title">In Progress</h2>
        <p className="section-paragraph">
          These views are in progress. We're working to enable them soon. Stay
          tuned!
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
