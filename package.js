Package.describe({
  name: "uzumaxy:sigma",
  summary: "Sigma is a library dedicated to graph drawing.",
  version: "1.0.3",
  git: "https://github.com/uzumaxy/meteor-sigma"
});

Package.onUse(function(api) {

  api.addFiles([
    "uzumaxy:sigma/sigma.min.js",
    "uzumaxy:sigma/plugins/sigma.layout.forceAtlas2.min.js",
    "uzumaxy:sigma/plugins/sigma.parsers.gexf.min.js",
    "uzumaxy:sigma/plugins/sigma.parsers.json.min.js",
    "uzumaxy:sigma/plugins/sigma.plugins.animate.min.js",
    "uzumaxy:sigma/plugins/sigma.plugins.dragNodes.min.js",
    "uzumaxy:sigma/plugins/sigma.plugins.filter.min.js",
    "uzumaxy:sigma/plugins/sigma.plugins.neighborhoods.min.js",
    "uzumaxy:sigma/plugins/sigma.renderers.customShapes.min.js",
    "uzumaxy:sigma/plugins/sigma.statistics.HITS.min.js"
  ], ["client"]);
});