// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1878678269"] = [{"values":[{"sourceSpan":{"start":[10,1],"name":".spago/foreign-object/v2.0.3/src/Foreign/Object/Unsafe.purs","end":[10,64]},"score":1,"packageInfo":{"values":["foreign-object"],"tag":"Package"},"name":"unsafeIndex","moduleName":"Foreign.Object.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Unsafely get the value for a key in a object.\n\nThis function does not check whether the key exists in the object.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[1120,1],"name":".spago/arrays/v5.3.1/src/Data/Array.purs","end":[1120,56]},"score":5,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"unsafeIndex","moduleName":"Data.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim"],"Partial"],"constraintArgs":[]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Find the element of an array at the specified index.\n\n```purescript\nunsafePartial $ unsafeIndex [\"a\", \"b\", \"c\"] 1 = \"b\"\n```\n\nUsing `unsafeIndex` with an out-of-range index will not immediately raise a runtime error.\nInstead, the result will be undefined. Most attempts to subsequently use the result will\ncause a runtime error, of course, but this is not guaranteed, and is dependent on the backend;\nsome programs will continue to run as if nothing is wrong. For example, in the JavaScript backend,\nthe expression `unsafePartial (unsafeIndex [true] 1)` has type `Boolean`;\nsince this expression evaluates to `undefined`, attempting to use it in an `if` statement will cause\nthe else branch to be taken.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[442,1],"name":".spago/arrays/v5.3.1/src/Data/Array/NonEmpty.purs","end":[442,64]},"score":5,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"unsafeIndex","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim"],"Partial"],"constraintArgs":[]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]