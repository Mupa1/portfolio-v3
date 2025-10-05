export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent("click", "button", `${buttonName} - ${location}`);
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent("submit", "form", formName);
};

// Track external link clicks
export const trackExternalLink = (url: string) => {
  trackEvent("click", "external_link", url);
};

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  trackEvent("click", "social", platform);
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
