/* Website-only, cookieless Umami analytics. Preserve existing analytics. */
(function () {
  if (navigator.doNotTrack === '1' || navigator.globalPrivacyControl === true) return;
  var script = document.createElement('script');
  script.src = 'https://aiaiai.help/umami/script.js';
  script.async = true;
  script.dataset.websiteId = '84ef8108-8b9b-4430-a523-c7303c2b3918';
  script.dataset.hostUrl = 'https://aiaiai.help/umami';
  script.dataset.domains = 'ai-scarlett.github.io';
  script.dataset.doNotTrack = 'true';
  script.dataset.excludeSearch = 'true';
  script.dataset.excludeHash = 'true';
  document.head.appendChild(script);
})();
