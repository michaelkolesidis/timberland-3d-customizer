// Checks whether the user is using a mobile device
export function isMobile(): boolean {
  const isNavigatorObject = typeof navigator === "object" && navigator !== null;
  const UA = isNavigatorObject ? navigator.userAgent : "";

  const hasMaxTouchPoints =
    "maxTouchPoints" in navigator &&
    (navigator as Navigator & { maxTouchPoints?: number }).maxTouchPoints! > 0;
  const hasMsMaxTouchPoints =
    "msMaxTouchPoints" in navigator &&
    (navigator as Navigator & { msMaxTouchPoints?: number }).msMaxTouchPoints! >
      0;
  const hasTouchScreenKeywords =
    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
    /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);

  return hasMaxTouchPoints || hasMsMaxTouchPoints || hasTouchScreenKeywords;
}
