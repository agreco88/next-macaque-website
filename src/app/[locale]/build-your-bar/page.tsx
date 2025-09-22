"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import clsx from "clsx";

type Plan = "starter" | "ritual" | "athlete";
type Base = "balanced" | "highProtein" | "lowCarb";

export default function BuildYourBarPage() {
  const t = useTranslations("BuildYourBar");

  const [selectedPlan, setSelectedPlan] = useState<Plan>("starter");
  const [selectedBase, setSelectedBase] = useState<Base>("balanced");

  return (
    <section className="relative min-h-dvh flex flex-col md:flex-row mx-auto bg-black text-white overflow-hidden pt-32">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start px-6">
        {/* Left: Selectors */}
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Select your plan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {(["starter", "ritual", "athlete"] as Plan[]).map((plan) => (
                <button
                  key={plan}
                  onClick={() => setSelectedPlan(plan)}
                  className={clsx(
                    "rounded-lg border p-4 text-center transition-all duration-300",
                    selectedPlan === plan
                      ? "bg-orange-500 border-orange-600 text-black"
                      : "bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800"
                  )}
                >
                  <span className="capitalize font-medium">{plan}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Choose your base</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {(["balanced", "highProtein", "lowCarb"] as Base[]).map(
                (base) => (
                  <button
                    key={base}
                    onClick={() => setSelectedBase(base)}
                    className={clsx(
                      "rounded-lg border p-4 text-center transition-all duration-300",
                      selectedBase === base
                        ? "bg-orange-500 border-orange-600 text-black"
                        : "bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800"
                    )}
                  >
                    <span className="capitalize font-medium">
                      {base === "highProtein"
                        ? "High Protein"
                        : base === "lowCarb"
                        ? "Low Carb"
                        : "Balanced"}
                    </span>
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right: Live Macro Preview */}
        <div className="bg-neutral-900/80 backdrop-blur-md rounded-xl p-6 border border-neutral-800">
          <h2 className="text-xl font-semibold mb-6">Your Bar Overview</h2>
          <ul className="space-y-3 text-sm">
            <li>
              Plan:{" "}
              <span className="font-medium capitalize">{selectedPlan}</span>
            </li>
            <li>
              Base:{" "}
              <span className="font-medium capitalize">{selectedBase}</span>
            </li>
            <li>
              Calories:{" "}
              {selectedBase === "highProtein"
                ? 230
                : selectedBase === "lowCarb"
                ? 180
                : 200}
            </li>
            <li>
              Protein:{" "}
              {selectedBase === "highProtein"
                ? "32g"
                : selectedBase === "lowCarb"
                ? "18g"
                : "22g"}
            </li>
            <li>Fats: {selectedBase === "lowCarb" ? "14g" : "9g"}</li>
            <li>
              Price per bar: $
              {selectedPlan === "athlete"
                ? "169"
                : selectedPlan === "ritual"
                ? "132"
                : "166"}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
