import React from 'react';

/**
 * List of important keywords/patterns to highlight in legal texts.
 * Order matters: longer/more specific patterns first.
 */
const HIGHLIGHT_PATTERNS: { pattern: RegExp; className: string }[] = [
  // Company identifiers
  { pattern: /\bTech N Ctrl\b/g, className: 'font-semibold text-primary-500' },
  { pattern: /\bKiiako\b/g, className: 'font-semibold text-primary-600 dark:text-primary-400' },
  // Legal identifiers
  { pattern: /\bTG-LFW-01-2024-B13-00605\b/g, className: 'font-mono font-semibold text-secondary dark:text-white bg-primary-500/10 px-1.5 py-0.5 rounded' },
  { pattern: /\b1001936284\b/g, className: 'font-mono font-semibold text-secondary dark:text-white bg-primary-500/10 px-1.5 py-0.5 rounded' },
  { pattern: /\bn°\s*2019-014\b/g, className: 'font-semibold text-secondary dark:text-white bg-amber-400/20 px-1.5 py-0.5 rounded' },
  { pattern: /\bn°2019-014\b/g, className: 'font-semibold text-secondary dark:text-white bg-amber-400/20 px-1.5 py-0.5 rounded' },
  { pattern: /\bNo\.\s*2019-014\b/g, className: 'font-semibold text-secondary dark:text-white bg-amber-400/20 px-1.5 py-0.5 rounded' },
  // Financial
  { pattern: /\b1[\s.]000[\s.]000\s*Francs?\s*CFA\b/gi, className: 'font-semibold text-secondary dark:text-white' },
  // Contact
  { pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, className: 'font-semibold text-primary-500 underline underline-offset-2' },
  // URLs
  { pattern: /\bkiiako\.io\b/g, className: 'font-semibold text-primary-500' },
  // Phone
  { pattern: /\+?\s*\(?228\)?\s*[\d\s]+/g, className: 'font-mono font-semibold text-secondary dark:text-white' },
  // Legal forms
  { pattern: /\bSARL\s*U?\b/g, className: 'font-semibold text-secondary dark:text-white uppercase' },
  // Hosting
  { pattern: /\bHostinger\b/g, className: 'font-semibold text-secondary dark:text-white' },
  // Location
  { pattern: /\bAdidogomé\s+Sagbado\b/gi, className: 'font-semibold italic text-secondary dark:text-white' },
  // Law references
  { pattern: /\bloi\s+n°\s*2019-014[^).]*/gi, className: 'italic' },
];

/**
 * Splits a text into segments, wrapping matched patterns with styled <span> elements.
 */
export function highlightText(text: string): React.ReactNode[] {
  // Build a combined regex from all patterns
  const combinedSource = HIGHLIGHT_PATTERNS.map(p => `(${p.pattern.source})`).join('|');
  const combinedRegex = new RegExp(combinedSource, 'gi');

  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let matchIndex = 0;

  text.replace(combinedRegex, (match, ...args) => {
    const offset = args[args.length - 2] as number;

    // Add plain text before this match
    if (offset > lastIndex) {
      result.push(text.slice(lastIndex, offset));
    }

    // Find which pattern matched (groups are in args[0..n-1])
    const groups = args.slice(0, HIGHLIGHT_PATTERNS.length);
    const matchedPatternIdx = groups.findIndex((g) => g !== undefined);
    const className = matchedPatternIdx >= 0
      ? HIGHLIGHT_PATTERNS[matchedPatternIdx].className
      : 'font-semibold';

    result.push(
      <span key={`hl-${offset}-${matchIndex++}`} className={className}>
        {match}
      </span>
    );

    lastIndex = offset + match.length;
    return match;
  });

  // Add remaining plain text
  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }

  return result.length > 0 ? result : [text];
}
