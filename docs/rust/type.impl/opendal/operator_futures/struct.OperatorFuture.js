(function() {var type_impls = {
"opendal":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoFuture-for-OperatorFuture%3CI,+O,+F%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/opendal/types/operator/operator_futures.rs.html#79-89\">source</a><a href=\"#impl-IntoFuture-for-OperatorFuture%3CI,+O,+F%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, O, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/into_future/trait.IntoFuture.html\" title=\"trait core::future::into_future::IntoFuture\">IntoFuture</a> for <a class=\"struct\" href=\"opendal/operator_futures/struct.OperatorFuture.html\" title=\"struct opendal::operator_futures::OperatorFuture\">OperatorFuture</a>&lt;I, O, F&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"type\" href=\"opendal/type.Result.html\" title=\"type opendal::Result\">Result</a>&lt;O&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/future/into_future/trait.IntoFuture.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;O, <a class=\"struct\" href=\"opendal/struct.Error.html\" title=\"struct opendal::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>The output that the future will produce on completion.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.IntoFuture\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.IntoFuture\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/future/into_future/trait.IntoFuture.html#associatedtype.IntoFuture\" class=\"associatedtype\">IntoFuture</a> = F</h4></section></summary><div class='docblock'>Which kind of future are we turning this into?</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_future\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/opendal/types/operator/operator_futures.rs.html#86-88\">source</a><a href=\"#method.into_future\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/future/into_future/trait.IntoFuture.html#tymethod.into_future\" class=\"fn\">into_future</a>(self) -&gt; Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/future/into_future/trait.IntoFuture.html#associatedtype.IntoFuture\" title=\"type core::future::into_future::IntoFuture::IntoFuture\">IntoFuture</a></h4></section></summary><div class='docblock'>Creates a future from a value. <a href=\"https://doc.rust-lang.org/nightly/core/future/into_future/trait.IntoFuture.html#tymethod.into_future\">Read more</a></div></details></div></details>","IntoFuture","opendal::types::operator::operator_futures::FutureStat","opendal::types::operator::operator_futures::FuturePresignStat","opendal::types::operator::operator_futures::FuturePresignRead","opendal::types::operator::operator_futures::FuturePresignWrite","opendal::types::operator::operator_futures::FutureRead","opendal::types::operator::operator_futures::FutureReader","opendal::types::operator::operator_futures::FutureWrite","opendal::types::operator::operator_futures::FutureWriter","opendal::types::operator::operator_futures::FutureDelete","opendal::types::operator::operator_futures::FutureList","opendal::types::operator::operator_futures::FutureLister"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()