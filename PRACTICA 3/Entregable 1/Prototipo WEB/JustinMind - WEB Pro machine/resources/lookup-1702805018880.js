(function(window, undefined) {
  var dictionary = {
    "b48dec35-c880-415f-8246-c7ca327b95a9": "ConstruirPC_final",
    "afe03610-98a7-40dc-bc9b-ec4722d2b69e": "Seminarios_1",
    "c15567af-8089-4fb4-8151-c665120f2c34": "ConstruirPC_table",
    "40de4712-1c41-43d6-b377-349742ab2d2f": "ConstruirPC_comments",
    "ed76bcdf-382a-4fd2-a15c-4471a3afe681": "ConstruirPC_results",
    "1cc2ef36-e69a-403a-b2bc-160d5c92aea5": "Seminarios",
    "09be4916-ad40-4ea6-9bf9-5b549602f231": "Test",
    "915085f1-f8bf-4f2c-861b-836e6ba1752b": "Test Resultados",
    "66b8d795-74bf-4110-acdc-99de289d42c5": "ConstruirPC",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Inicio",
    "7bebfa16-fc71-4e5e-a8d4-74cbeaf83bb9": "Foros",
    "a868061c-eb15-4890-8f2c-2e4d3afdf0df": "ConstruirPC_details_result",
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