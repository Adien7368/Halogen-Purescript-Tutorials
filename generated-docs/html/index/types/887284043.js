// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["887284043"] = [{"values":[{"sourceSpan":{"start":[278,1],"name":".spago/newtype/v3.0.0/src/Data/Newtype.purs","end":[286,7]},"score":21,"packageInfo":{"values":["newtype"],"tag":"Package"},"name":"under2","moduleName":"Data.Newtype","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["t",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"s"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"t"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeVar","contents":"s"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The opposite of `over2`: lowers a binary function that operates on `Newtype`d\nvalues to operate on the wrapped value instead.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[250,1],"name":".spago/newtype/v3.0.0/src/Data/Newtype.purs","end":[258,7]},"score":21,"packageInfo":{"values":["newtype"],"tag":"Package"},"name":"over2","moduleName":"Data.Newtype","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["t",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"s"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"t"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeVar","contents":"s"}]}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lifts a binary function to operate over newtypes.\n\n``` purescript\nnewtype Meter = Meter Int\nderive newtype instance newtypeMeter :: Newtype Meter _\nnewtype SquareMeter = SquareMeter Int\nderive newtype instance newtypeSquareMeter :: Newtype SquareMeter _\n\narea :: Meter -> Meter -> SquareMeter\narea = over2 Meter (*)\n```\n\nThe above example also demonstrates that the return type is polymorphic\nhere too.\n"}],"tag":"SearchResult"}]