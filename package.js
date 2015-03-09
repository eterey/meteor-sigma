Package.describe({
  name: "uzumaxy:sigma",
  summary: "Sigma is a library dedicated to graph drawing. It makes easy to publish networks on Web pages, and allows developers to integrate network exploration in rich Web applications.",
  version: "1.0.3",
  git: "https://github.com/uzumaxy/meteor-sigma"
});

Package.onUse(function(api) {

  api.addFiles([
    "uzumaxy:sigma/sigma.min.js",
    'sigma.layout.forceAtlas2.min.js',
    'sigma.parsers.gexf.min.js',
    'sigma.parsers.json.min.js',
    'sigma.plugins.animate.min.js',
    'sigma.plugins.dragNodes.min.js',
    'sigma.plugins.filter.min.js',
    'sigma.plugins.neighborhoods.min.js',
    'sigma.renderers.customShapes.min.js',
    'sigma.statistics.HITS.min.js'
  ], ["client"]);
});