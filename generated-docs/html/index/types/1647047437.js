// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1647047437"] = [{"values":[{"sourceSpan":{"start":[254,1],"name":".spago/maybe/v4.0.1/src/Data/Maybe.purs","end":[254,52]},"score":26,"packageInfo":{"values":["maybe"],"tag":"Package"},"name":"fromMaybe'","moduleName":"Data.Maybe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Similar to `fromMaybe` but for use in cases where the default value may be\nexpensive to compute. As PureScript is not lazy, the standard `fromMaybe`\nhas to evaluate the default value before returning the result, whereas here\nthe value is only computed when the `Maybe` is known to be `Nothing`.\n\n``` purescript\nfromMaybe' (\\_ -> x) Nothing == x\nfromMaybe' (\\_ -> x) (Just y) == y\n```\n"}],"tag":"SearchResult"}]