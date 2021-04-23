// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1061217032"] = [{"values":[{"sourceSpan":{"start":[27,1],"name":".spago/web-events/v2.0.1/src/Web/Event/EventTarget.purs","end":[30,26]},"score":2,"packageInfo":{"values":["web-events"],"tag":"Package"},"name":"eventListener","moduleName":"Web.Event.EventTarget","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Web","Event","Internal","Types"],"Event"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeVar","contents":"a"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Web","Event","EventTarget"],"EventListener"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates an EventListener from a normal PureScript Effect function.\n\nThis function itself is effectful as otherwise it would break referential\ntransparency - `eventListener f /= eventListener f`. This is worth noting\nas you can only remove the exact event listener value that was added for\nan `EventTarget`.\n"}],"tag":"SearchResult"}]