(function () {
  // Detect user's preferred language
  const userLanguage = navigator.language || navigator.userLanguage;
  const preferredLocale = userLanguage.slice(0, 2); // Extract 'en', 'es', 'fr', etc.
  console.log(preferredLocale);
  // Define supported languages
  const supportedLocales = ["en", "es"];
  const defaultLocale = "en";

  // Determine which locale to use
  const locale = supportedLocales.includes(preferredLocale)
    ? preferredLocale
    : defaultLocale;

  // Check if the user is already on a localized page
  const currentPath = window.location.pathname;

  if (
    !currentPath.startsWith(`/${locale}`) &&
    currentPath === "/" &&
    locale !== defaultLocale
  ) {
    window.location.replace(`/${locale}`);
  }
})();
