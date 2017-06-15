/*eslint-disable*/
var dcafeConfig = {
  "webserviceurls": {
    "dcsession": "https://dev.dcwebservice2-0.dev.cloud.wal-mart.com/dcsession",
    "dcwebservice": "https://dev.dcwebservice2-0.dev.cloud.wal-mart.com/dcwebservice",
    "brandmanagementwebservice": "http://dev.brandmanagementwebservice.dev.cloud.wal-mart.com/brandmanagementwebservice",
    "usagetracking": "https://dev.dcusagetracking.dev.cloud.wal-mart.com/usagetracking",
    "foundationwebservice": "https://dev.wmfoundation.dev.cloud.wal-mart.com/foundationwebservice",
    "weather": "https://dev.dcweatherservice.dev.cloud.wal-mart.com/weather",
    "alertswebservice": "https://dev.alertswebservice.dev.cloud.wal-mart.com/alertswebservice",
    "omniChannel": "https://dev.dcomnichannelservice.dev.cloud.wal-mart.com/omniChannel",
    "misdashboard": "https://dev.dcmisservice.dev.cloud.wal-mart.com/misdashboard",
    "marketingcampaignwebservices": "http://dev.mctwebservice.dev.cloud.wal-mart.com/marketing_campaign_webservices",
    "SimpleSocket": "https://dev.DCMultimodal.dev.cloud.wal-mart.com/SimpleSocket"
  },
  "cdnurl": "https://dev.datacafecommon.dev.cloud.wal-mart.com/",
  /** Simple CSS and JavaScript loader that can use the environment based CDN URL. */
  "load": function(url, fromCdn) {
    // Append the CDN URL to the beginning of the provided URL if the fromCdn parameter is true.  Otherwise,
    // the full URL is required.
    if (fromCdn) {
      url = this.cdnurl + url;
    }
    // Determine whether the URL is for a CSS or JavaScript file and add the appropriate HTML tag to load it.
    if (url.match(/\.css\b/)) {
      document.write('<link rel="stylesheet" href="' + url + '"/>');
    } else if (url.match(/\.js\b/)) {
      document.write('<script src="' + url + '">\x3C/script>');
    } else {
      console.log("Unknown file type in dcafeConfig.load when loading " + url);
      alert("Unknown file type in dcafeConfig.load when loading " + url);
    }
  }
};
