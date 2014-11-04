var cssshrink = Npm.require('cssshrink');

Plugin.registerSourceHandler("css", function (compileStep) {
  var oldPath = compileStep.inputPath,
    source = compileStep.read().toString('utf8');

  try {
    compileStep.addStylesheet({
      path: oldPath,
      data: cssshrink.shrink(source),
      sourceMap: compiler.getSourceMap()
    });
  } catch (err) {
    compileStep.error({
      message: err.message
    });
  }
});