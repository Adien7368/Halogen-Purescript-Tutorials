// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["466881284"] = [{"values":[{"sourceSpan":{"start":[162,1],"name":".spago/foldable-traversable/v4.1.1/src/Data/TraversableWithIndex.purs","end":[168,19]},"score":19,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"mapAccumRWithIndex","moduleName":"Data.TraversableWithIndex","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["i",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","TraversableWithIndex"],"TraversableWithIndex"],"constraintArgs":[{"tag":"TypeVar","contents":"i"},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"i"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Traversable","Accum"],"Accum"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"b"}]}]}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Traversable","Accum"],"Accum"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"b"}]}}]}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Fold a data structure from the right with access to the indices, keeping\nall intermediate results instead of only the final result.\n\nUnlike `scanrWithIndex`, `imapAccumRWithIndex` allows the type of accumulator to differ\nfrom the element type of the final data structure.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[131,1],"name":".spago/foldable-traversable/v4.1.1/src/Data/TraversableWithIndex.purs","end":[137,19]},"score":19,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"mapAccumLWithIndex","moduleName":"Data.TraversableWithIndex","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["i",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","TraversableWithIndex"],"TraversableWithIndex"],"constraintArgs":[{"tag":"TypeVar","contents":"i"},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"i"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Traversable","Accum"],"Accum"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"b"}]}]}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Traversable","Accum"],"Accum"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"b"}]}}]}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Fold a data structure from the left with access to the indices, keeping\nall intermediate results instead of only the final result.\n\nUnlike `scanlWithIndex`, `mapAccumLWithIndex` allows the type of accumulator to differ\nfrom the element type of the final data structure.\n"}],"tag":"SearchResult"}]