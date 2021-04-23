// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["609132456"] = [{"values":[{"sourceSpan":{"start":[100,1],"name":".spago/exceptions/v4.0.0/src/Effect/Exception.purs","end":[100,53]},"score":6,"packageInfo":{"values":["exceptions"],"tag":"Package"},"name":"try","moduleName":"Effect.Exception","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Effect","Exception"],"Error"]}]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Runs an Eff and returns eventual Exceptions as a `Left` value. If the\ncomputation succeeds the result gets wrapped in a `Right`.\n\nFor example:\n\n```purescript\nmain :: forall eff. Effect Unit\nmain = do\n  result <- try (readTextFile UTF8 \"README.md\")\n  case result of\n    Right lines ->\n      Console.log (\"README: \\n\" <> lines )\n    Left error ->\n      Console.error (\"Couldn't open README.md. Error was: \" <> show error)\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[264,1],"name":".spago/aff/v5.1.2/src/Effect/Aff.purs","end":[264,44]},"score":5,"packageInfo":{"values":["aff"],"tag":"Package"},"name":"attempt","moduleName":"Effect.Aff","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Effect","Exception"],"Error"]}]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A monomorphic version of `try`. Catches thrown errors and lifts them\ninto an `Either`.\n"}],"tag":"SearchResult"}]