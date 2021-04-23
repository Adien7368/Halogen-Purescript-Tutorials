// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["63437464"] = [{"values":[{"sourceSpan":{"start":[12,1],"name":".spago/partial/v2.0.1/src/Partial.purs","end":[12,61]},"score":11,"packageInfo":{"values":["partial"],"tag":"Package"},"name":"crashWith","moduleName":"Partial","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim"],"Partial"],"constraintArgs":[]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A partial function which crashes on any input with the specified message.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[19,1],"name":".spago/partial/v2.0.1/src/Partial/Unsafe.purs","end":[19,41]},"score":11,"packageInfo":{"values":["partial"],"tag":"Package"},"name":"unsafeCrashWith","moduleName":"Partial.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A function which crashes with the specified error message.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[12,1],"name":".spago/partial/v2.0.1/src/Partial/Unsafe.purs","end":[12,62]},"score":11,"packageInfo":{"values":["partial"],"tag":"Package"},"name":"unsafePartial","moduleName":"Partial.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim"],"Partial"],"constraintArgs":[]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Discharge a partiality constraint, unsafely.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[109,3],"name":".spago/halogen/v5.1.1/src/Halogen/HTML/Core.purs","end":[109,32]},"score":0,"packageInfo":{"values":["halogen"],"tag":"Package"},"name":"toPropValue","moduleName":"Halogen.HTML.Core","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Halogen","HTML","Core"],"IsProp"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Halogen","HTML","Core"],"IsProp"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Halogen","VDom","DOM","Prop"],"PropValue"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[5,1],"name":".spago/globals/v5.0.0/src/Global/Unsafe.purs","end":[5,56]},"score":2,"packageInfo":{"values":["globals"],"tag":"Package"},"name":"unsafeStringify","moduleName":"Global.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Uses the global JSON object to turn anything into a string. Careful! Trying\nto serialize functions returns undefined\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[94,1],"name":".spago/foreign/v5.0.0/src/Foreign.purs","end":[94,59]},"score":4,"packageInfo":{"values":["foreign"],"tag":"Package"},"name":"unsafeFromForeign","moduleName":"Foreign","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Unsafely coerce a `Foreign` value.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[91,1],"name":".spago/foreign/v5.0.0/src/Foreign.purs","end":[91,57]},"score":4,"packageInfo":{"values":["foreign"],"tag":"Package"},"name":"unsafeToForeign","moduleName":"Foreign","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Coerce any value to the a `Foreign` value.\n\nThis is considered unsafe as it's only intended to be used on primitive\nJavaScript types, rather than PureScript types. Exporting PureScript values\nvia the FFI can be dangerous as they can be mutated by code outside the\nPureScript program, resulting in difficult to diagnose problems elsewhere.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[13,1],"name":".spago/exceptions/v4.0.0/src/Effect/Exception/Unsafe.purs","end":[13,37]},"score":6,"packageInfo":{"values":["exceptions"],"tag":"Package"},"name":"unsafeThrow","moduleName":"Effect.Exception.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Defined as `unsafeThrowException <<< error`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[9,1],"name":".spago/exceptions/v4.0.0/src/Effect/Exception/Unsafe.purs","end":[9,45]},"score":6,"packageInfo":{"values":["exceptions"],"tag":"Package"},"name":"unsafeThrowException","moduleName":"Effect.Exception.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Effect","Exception"],"Error"]}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Throw an exception in pure code. This function should be used very\nsparingly, as it can cause unexpected crashes at runtime.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[24,1],"name":".spago/prelude/v4.1.1/src/Data/Void.purs","end":[24,30]},"score":47,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"absurd","moduleName":"Data.Void","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Void"],"Void"]}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Eliminator for the `Void` type.\nUseful for stating that some code branch is impossible because you've\n\"acquired\" a value of type `Void` (which you can't).\n\n```purescript\nrightOnly :: forall t . Either Void t -> t\nrightOnly (Left v) = absurd v\nrightOnly (Right t) = t\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[98,1],"name":".spago/datetime/v4.1.1/src/Data/Time/Duration.purs","end":[98,49]},"score":4,"packageInfo":{"values":["datetime"],"tag":"Package"},"name":"negateDuration","moduleName":"Data.Time.Duration","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Negates a duration, turning a positive duration negative or a negative\nduration positive.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[90,3],"name":".spago/datetime/v4.1.1/src/Data/Time/Duration.purs","end":[90,34]},"score":4,"packageInfo":{"values":["datetime"],"tag":"Package"},"name":"toDuration","moduleName":"Data.Time.Duration","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","Time","Duration"],"Duration"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Time","Duration"],"Milliseconds"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[89,3],"name":".spago/datetime/v4.1.1/src/Data/Time/Duration.purs","end":[89,36]},"score":4,"packageInfo":{"values":["datetime"],"tag":"Package"},"name":"fromDuration","moduleName":"Data.Time.Duration","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","Time","Duration"],"Duration"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Time","Duration"],"Milliseconds"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[18,3],"name":".spago/prelude/v4.1.1/src/Data/Show.purs","end":[18,22]},"score":47,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"show","moduleName":"Data.Show","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","Show"],"Show"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Show"],"Show"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[43,1],"name":".spago/prelude/v4.1.1/src/Data/Ring.purs","end":[43,37]},"score":47,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"negate","moduleName":"Data.Ring","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring"],"Ring"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"`negate x` can be used as a shorthand for `zero - x`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[207,1],"name":".spago/prelude/v4.1.1/src/Data/Ord.purs","end":[207,46]},"score":47,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"signum","moduleName":"Data.Ord","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring"],"Ring"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The sign function; always evaluates to either `one` or `negate one`. For\nany `x`, we should have `signum x * abs x == x`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[202,1],"name":".spago/prelude/v4.1.1/src/Data/Ord.purs","end":[202,43]},"score":47,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"abs","moduleName":"Data.Ord","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring"],"Ring"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The absolute value function. `abs x` is defined as `if x >= zero then x\nelse negate x`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[45,3],"name":".spago/prelude/v4.1.1/src/Data/HeytingAlgebra.purs","end":[45,16]},"score":47,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"not","moduleName":"Data.HeytingAlgebra","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","HeytingAlgebra"],"HeytingAlgebra"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","HeytingAlgebra"],"HeytingAlgebra"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[64,3],"name":".spago/prelude/v4.1.1/src/Data/EuclideanRing.purs","end":[64,21]},"score":47,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"degree","moduleName":"Data.EuclideanRing","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","EuclideanRing"],"EuclideanRing"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","EuclideanRing"],"EuclideanRing"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[303,1],"name":".spago/enums/v4.0.1/src/Data/Enum.purs","end":[303,48]},"score":3,"packageInfo":{"values":["enums"],"tag":"Package"},"name":"defaultFromEnum","moduleName":"Data.Enum","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Enum"],"Enum"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Provides a default implementation for `fromEnum`.\n\n- Assumes `toEnum 0 = Just bottom`.\n- Cannot be used in conjuction with `defaultPred`.\n\nRuns in `O(n)` where `n` is `fromEnum a`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[116,3],"name":".spago/enums/v4.0.1/src/Data/Enum.purs","end":[116,23]},"score":3,"packageInfo":{"values":["enums"],"tag":"Package"},"name":"fromEnum","moduleName":"Data.Enum","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","Enum"],"BoundedEnum"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Enum"],"BoundedEnum"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[30,3],"name":".spago/prelude/v4.1.1/src/Data/DivisionRing.purs","end":[30,18]},"score":47,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"recip","moduleName":"Data.DivisionRing","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","DivisionRing"],"DivisionRing"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","DivisionRing"],"DivisionRing"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]