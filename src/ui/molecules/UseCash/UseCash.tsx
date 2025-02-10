import { TitleSecond } from "@/ui/atoms";
import React from "react";

export default function UseCash(): React.ReactNode {
  return (
    <div className="setting-information-cash">
      <div className="cash-spent">
        <TitleSecond text="Cash Spent" />
      </div>
      <div className="cash-remaining">
        <TitleSecond text="Remaining cash" />
      </div>
    </div>
  );
}
