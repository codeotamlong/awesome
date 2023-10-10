/*
** ADD-ONS - CUSTOMIZE UI
*/

// Un-check singature extension
user_pref("xpinstall.signatures.required", false);
user_pref("xpinstall.whitelist.required", false);

// No exception on extension
user_pref("extensions.webextensions.restrictedDomains", "");

// Enable userChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Compact mode
user_pref("browser.compactmode.show", true);

// Native Dark mode (?)
//user_pref("browser.display.use_system_colors", false );
//user_pref("browser.display.background_color", "#c0c0c0" );
//user_pref("browser.display.foreground_color", "#000000" );
//user_pref("browser.visited_color", "#aa3700" );
//user_pref("browser.anchor_color", "#800040" );
//user_pref("browser.display.document_color_use", 2 );

// Native Font
user_pref("font.name.serif.x-western", "Arial" );
user_pref("browser.display.use_document_fonts", 0 );

// Smooth scroll
user_pref("apz.overscroll.enabled", true);
user_pref("general.smoothScroll", true);
user_pref("mousewheel.enable_pixel_scrolling", false );
user_pref("mousewheel.default.delta_multiplier_y", 275 );
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 200 );
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 50 );

/*
** SPEED
*/

// Reduce render rate
user_pref("nglayout.initialpaint.delay", 2000);
user_pref("nglayout.initialpaint.delay_in_oopif", 2000);

// Force RAM cache, uncomment // to enable
// user_pref("browser.cache.disk.enable", false);
// user_pref("browser.cache.memory.enable", true);
// user_pref("browser.cache.memory.capacity", 524288);
// user_pref("browser.cache.memory.max_entry_size", 512000);

// Force RAM cache - Disable RCWN
user_pref("network.http.rcwn.enabled", false);

// Disable SkeletonUI
user_pref("browser.startup.preXulSkeletonUI", false );

// Reduce disk read/write
user_pref("browser.sessionstore.idleDelay", 3600000);
user_pref("browser.sessionstore.interval", 3600000);
user_pref("browser.sessionstore.collect_zoom", false);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
user_pref("browser.sessionhistory.max_total_viewers", 0);

/*
** NETWORK
*/

// Disable OSCP
user_pref("security.OCSP.enabled", 0);

// Enable CrLite
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);

// Next DNS
user_pref("network.trr.uri", "https://doh3.dns.nextdns.io");
user_pref("network.trr.custom_uri", "https://doh3.dns.nextdns.io");
user_pref("network.trr.mode", 2);

// Enable QUICv2
user_pref("network.http.http3.alt-svc-mapping-for-testing", 'doh3.dns.nextdns.io; h3=":443"; quicv="709a50c4,1", dns.google; h3=":443"; quicv="709a50c4,1"');

// Optimize HTTP3:
user_pref("network.http.http3.send_background_tabs_deprioritization", true );
user_pref("network.http.http3.version_negotiation.enabled", true );
user_pref("security.tls.ech.grease_http3", true );

// Force NextDNS on HTTP3 and QUICv2 by altsvc:
user_pref("network.http.http3.alt-svc-mapping-for-testing", 'doh3.dns.nextdns.io;h3=":443"; quicv="6b3343cf,1"' );

// Trr
user_pref("network.dns.skipTRR-when-parental-control-enabled", false );
user_pref("network.trr.async_connInfo", true );
user_pref("network.trr.confirmation_telemetry_enabled", false );
// user_pref("network.trr.custom_uri", "https://doh3.dns.nextdns.io" );
user_pref("network.trr.disable-ECS", false );
user_pref("network.trr.mode", 3 );
// user_pref("network.trr.uri", "https://doh3.dns.nextdns.io" );

// Unlimited DNS queries
user_pref("network.dnsCacheEntries", -1 );



/*
** MISC
*/

// Enable Early Hints
user_pref("network.early-hints.enabled", true);
user_pref("network.early-hints.preconnect.enabled", true);
user_pref("network.early-hints.preconnect.max_connections", 20);

// Enable punycode
user_pref("network.IDN_show_punycode", true);

// Bypass Cookie Banners: 
//      1 - Decline ALL (DECLINE - if FAILED, KEEP banner); 
//      2 - Hide ALL    (DECLINE - if FAILED, ACCEPTS - to remove banner);
user_pref("cookiebanners.service.mode", 2 );
user_pref("cookiebanners.service.mode.privateBrowsing", 2 );
// Bypass Cookie Banners - emulator CLICK, cookie INJECTOR:
user_pref("cookiebanners.bannerClicking.enabled", true );
user_pref("cookiebanners.cookieInjector.enabled", true );


/*
** PRIVACY
*/

// Anti Tracking+Canvas Fingerprint+Font Fingerprint
user_pref("privacy.resistFingerprinting", true);

// Disable Pocket and Accessibility
user_pref("extensions.pocket.enabled", false);
user_pref("accessibility.force_disabled", 1);

// Enable Multi-Account Container
user_pref("privacy.userContext.enabled", true); //enable Multi-Account Container
user_pref("privacy.userContext.ui.enabled", true); //enable Multi-Account Container

/*** [SECTION 0200]: GEOLOCATION / LANGUAGE / LOCALE ***/
user_pref("_user.js.parrot", "0200 syntax error: the parrot's definitely deceased!");
/* 0201: use Mozilla geolocation service instead of Google if permission is granted [FF74+]
 * Optionally enable logging to the console (defaults to false) ***/
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
   // user_pref("geo.provider.network.logging.enabled", true); // [HIDDEN PREF]
/* 0202: disable using the OS's geolocation service ***/
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX]
user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]

/*** [SECTION 0300]: QUIETER FOX ***/
user_pref("_user.js.parrot", "0300 syntax error: the parrot's not pinin' for the fjords!");
/** RECOMMENDATIONS ***/
/* 0320: disable recommendation pane in about:addons (uses Google Analytics) ***/
user_pref("extensions.getAddons.showPane", false); // [HIDDEN PREF]
/* 0321: disable recommendations in about:addons' Extensions and Themes panes [FF68+] ***/
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
/* 0322: disable personalized Extension Recommendations in about:addons and AMO [FF65+]
 * [NOTE] This pref has no effect when Health Reports (0331) are disabled
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to make personalized extension recommendations
 * [1] https://support.mozilla.org/kb/personalized-extension-recommendations ***/
user_pref("browser.discovery.enabled", false);

/** TELEMETRY ***/
/* 0330: disable new data submission [FF41+]
 * If disabled, no policy is shown or upload takes place, ever
 * [1] https://bugzilla.mozilla.org/1195552 ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
/* 0331: disable Health Reports
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send technical... data ***/
user_pref("datareporting.healthreport.uploadEnabled", false);
/* 0332: disable telemetry
 * The "unified" pref affects the behavior of the "enabled" pref
 * - If "unified" is false then "enabled" controls the telemetry module
 * - If "unified" is true then "enabled" only controls whether to record extended data
 * [NOTE] "toolkit.telemetry.enabled" is now LOCKED to reflect prerelease (true) or release builds (false) [2]
 * [1] https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/internals/preferences.html
 * [2] https://medium.com/georg-fritzsche/data-preference-changes-in-firefox-58-2d5df9c428b5 ***/
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE]
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
/* 0333: disable Telemetry Coverage
 * [1] https://blog.mozilla.org/data/2018/08/20/effectively-measuring-search-in-firefox/ ***/
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");
/* 0334: disable PingCentre telemetry (used in several System Add-ons) [FF57+]
 * Defense-in-depth: currently covered by 0331 ***/
user_pref("browser.ping-centre.telemetry", false);
/* 0335: disable Firefox Home (Activity Stream) telemetry ***/
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/** STUDIES ***/
/* 0340: disable Studies
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to install and run studies ***/
user_pref("app.shield.optoutstudies.enabled", false);
/* 0341: disable Normandy/Shield [FF60+]
 * Shield is a telemetry system that can push and test "recipes"
 * [1] https://mozilla.github.io/normandy/ ***/
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** CRASH REPORTS ***/
/* 0350: disable Crash Reports ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
   // user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // [FF51+] [DEFAULT: false]
/* 0351: enforce no submission of backlogged Crash Reports [FF58+]
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send backlogged crash reports  ***/
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [DEFAULT: false]

/** OTHER ***/
/* 0360: disable Captive Portal detection
 * [1] https://www.eff.org/deeplinks/2017/08/how-captive-portals-interfere-wireless-security-and-privacy ***/
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // [FF52+]
/* 0361: disable Network Connectivity checks [FF65+]
 * [1] https://bugzilla.mozilla.org/1460537 ***/
user_pref("network.connectivity-service.enabled", false);

/*** [SECTION 0400]: SAFE BROWSING (SB)
   SB has taken many steps to preserve privacy. If required, a full url is never sent
   to Google, only a part-hash of the prefix, hidden with noise of other real part-hashes.
   Firefox takes measures such as stripping out identifying parameters and since SBv4 (FF57+)
   doesn't even use cookies. (#Turn on browser.safebrowsing.debug to monitor this activity)

   [1] https://feeding.cloud.geek.nz/posts/how-safe-browsing-works-in-firefox/
   [2] https://wiki.mozilla.org/Security/Safe_Browsing
   [3] https://support.mozilla.org/kb/how-does-phishing-and-malware-protection-work
   [4] https://educatedguesswork.org/posts/safe-browsing-privacy/
***/
user_pref("_user.js.parrot", "0400 syntax error: the parrot's passed on!");
/* 0401: disable SB (Safe Browsing)
 * [WARNING] Do this at your own risk! These are the master switches
 * [SETTING] Privacy & Security>Security>... Block dangerous and deceptive content ***/
   // user_pref("browser.safebrowsing.malware.enabled", false);
   // user_pref("browser.safebrowsing.phishing.enabled", false);
/* 0402: disable SB checks for downloads (both local lookups + remote)
 * This is the master switch for the safebrowsing.downloads* prefs (0403, 0404)
 * [SETTING] Privacy & Security>Security>... "Block dangerous downloads" ***/
   // user_pref("browser.safebrowsing.downloads.enabled", false);
/* 0403: disable SB checks for downloads (remote)
 * To verify the safety of certain executable files, Firefox may submit some information about the
 * file, including the name, origin, size and a cryptographic hash of the contents, to the Google
 * Safe Browsing service which helps Firefox determine whether or not the file should be blocked
 * [SETUP-SECURITY] If you do not understand this, or you want this protection, then override this ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
   // user_pref("browser.safebrowsing.downloads.remote.url", ""); // Defense-in-depth
/* 0404: disable SB checks for unwanted software
 * [SETTING] Privacy & Security>Security>... "Warn you about unwanted and uncommon software" ***/
   // user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
   // user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
/* 0405: disable "ignore this warning" on SB warnings [FF45+]
 * If clicked, it bypasses the block for that session. This is a means for admins to enforce SB
 * [TEST] see https://github.com/arkenfox/user.js/wiki/Appendix-A-Test-Sites#-mozilla
 * [1] https://bugzilla.mozilla.org/1226490 ***/
   // user_pref("browser.safebrowsing.allowOverride", false);
   
   
//
//
//
user_pref("userchrome.floating-findbar-on-right.enabled", true);