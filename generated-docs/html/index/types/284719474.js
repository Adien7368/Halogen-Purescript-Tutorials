// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["284719474"] = [{"values":[{"sourceSpan":{"start":[130,1],"name":".spago/halogen/v5.1.1/src/Halogen/Query/EventSource.purs","end":[130,47]},"score":0,"packageInfo":{"values":["halogen"],"tag":"Package"},"name":"emit","moduleName":"Halogen.Query.EventSource","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Query","EventSource"],"Emitter"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Emits an action via the emitter. For example:\n\n``` purescript\ndata Action = Notify String\n\nmyEventSource = EventSource.affEventSource \\emitter -> do\n  Aff.delay (Milliseconds 1000.0)\n  EventSource.emit emitter (Notify \"hello\")\n  pure mempty\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[169,1],"name":".spago/effect/v2.0.1/src/Effect/Uncurried.purs","end":[170,33]},"score":16,"packageInfo":{"values":["effect"],"tag":"Package"},"name":"runEffectFn1","moduleName":"Effect.Uncurried","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Uncurried"],"EffectFn1"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"r"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeVar","contents":"r"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]