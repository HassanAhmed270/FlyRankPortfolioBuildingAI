import { useState } from "react";

export default function ProjectCard({
  name,
  imageSrc,
  imageAlt,
  summary,
  problem,
  decisions,
  outcome,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-brand-ink/10 rounded-lg p-6 mb-6 bg-white">

      {/* Clicking anywhere in this button toggles expanded/collapsed */}
      <button onClick={() => setIsExpanded(!isExpanded)} className="w-full text-left">

        <h3 className="font-heading font-bold text-2xl text-brand-ink mb-3">
          {name}
        </h3>

        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full rounded-md mb-3"
        />

        <p className="font-body text-base text-brand-ink/80">
          {summary}
        </p>

        <span className="font-body text-sm text-brand-teal mt-3 inline-block">
          {isExpanded ? "Show less −" : "Read the full case study +"}
        </span>
      </button>

      {/* This whole block only renders when isExpanded is true */}
      {isExpanded && (
        <div className="mt-6 space-y-6">
          <div>
            <h4 className="font-heading font-bold text-lg text-brand-indigo mb-1">
              Problem
            </h4>
            <p className="font-body text-base text-brand-ink/80">{problem}</p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg text-brand-indigo mb-1">
              Decisions
            </h4>
            <p className="font-body text-base text-brand-ink/80">{decisions}</p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg text-brand-indigo mb-1">
              Outcome
            </h4>
            <p className="font-body text-base text-brand-ink/80">{outcome}</p>
          </div>
        </div>
      )}
    </div>
  );
}
