(function(window, undefined) {
  var dictionary = {
    "744e4e48-0e58-4474-aea0-8a80ad9105fb": "sidebar",
    "cce4db67-2c87-4dbc-a3d5-7cf5b61ceb9b": "seguimiento",
    "aed536bf-313e-4e1b-b978-8f1cf9a2af30": "IA",
    "c3bc425b-a644-4ece-b3b3-c2dcb40b7a39": "foro",
    "3cc93ca5-0c27-4e03-b4f8-daad7ddc3997": "montar",
    "861c4414-1f19-4d36-bb69-fc0e71fa0b38": "vr",
    "1e4f9859-94c4-45bb-8752-04fb36244b68": "formulario",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);