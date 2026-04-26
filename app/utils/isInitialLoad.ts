// Tracks if the page was just hard-refreshed or initially loaded.
// It starts as true, and becomes false after the preloader duration.
// SPA navigations will see this as false.
export let isInitialLoad = true;

if (typeof window !== "undefined") {
  setTimeout(() => {
    isInitialLoad = false;
  }, 2500); // 2.5s is roughly the preloader duration
}
