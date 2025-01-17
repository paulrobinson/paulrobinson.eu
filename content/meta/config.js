module.exports = {
  siteTitle: "Paul Robinson", // <title>
  shortSiteTitle: "Paul Robinson", // <title> ending for posts and pages
  siteDescription:
    "This is the blog of Paul Robinson. I currently work for Red Hat as an Engineering manager for Quarkus.",
  siteUrl: "http://paulrobinson.eu", // This used to be duckydevine.com, but that makes lots of dead links
  pathPrefix: "",
  siteImage: "/preview.png",
  siteLanguage: "en",

  /* author */
  authorName: "Paul Robinson",
  authorShortName: "Paul",
  authorTwitterAccount: "pfrobinson", // TODO remove this which is only used by Seo.js and is duplication

  /* info */
  headerTitle: "Paul Robinson",
  headerSubTitle: "",

  /* manifest.json */
  manifestName: "Paul Robinson",
  manifestShortName: "PaulBlog", // max 12 characters
  manifestStartUrl: "/index.html",
  manifestBackgroundColor: "white",
  manifestThemeColor: "#666",
  manifestDisplay: "standalone",

  // gravatar
  // Use your Gravatar image. If empty then will use src/images/jpg/avatar.jpg
  // Replace your email adress with md5-code.
  // Example https://www.gravatar.com/avatar/g.strainovic@gmail.com ->
  // gravatarImgMd5: "https://www.gravatar.com/avatar/1db853e4df386e8f699e4b35505dd8c6",
  gravatarImgMd5: "https://www.gravatar.com/avatar/7547596abc7ba4d99b54365e51ed94a4",

  // social
  authorSocialLinks: [
    { name: "twitter", url: "https://twitter.com/pfrobinson", display: "@pfrobinson" },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/drpaulrobinson/",
      display: "Paul Robinson"
    },
    { name: "github", url: "https://github.com/paulrobinson", display: "paulrobinson" },
  ]
};
