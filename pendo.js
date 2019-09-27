//Pendo Scripts

// (function(apiKey){
//     (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
//     v=['initialize','identify','updateOptions','pageLoad','trackEvents'];for(w=0,x=v.length;w<x;++w)(function(m){
//         o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
//         y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
//         z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
//         // Call this whenever information about your visitors becomes available
//         // Please use Strings, Numbers, or Bools for value types.
// //pendo.isReady(console.log("is ready"))
//         pendo.initialize({
//             disablecookies: true,
//             visitor: {
//                 id:  'visitor-1',
//                 emailid: 'visitor-1@pendo.io',   // Required if user is logged in
//                 TrialendDate: '2019-06-01 15:04:05',
//                 wodifyDate:  '08/19/2015',
//                 wodifyDatewtime:  '08/19/2015 03:04pm',
//                 Staff_Class: "Temp",
//                 Staff: "Admin",
//                 language: 'de',
//                 solarwindsdate:  "2017-03-08"
//                 //enabledIntegrationVisitors: ['microsoft', 'enforce_modules','blackberry_modules'],
//                 //role: ["Guardian"]
//                 // email:        // Optional
//                 // role:         // Optional
//                 // You can add any additional visitor level key-values here,
//                 // as long as it's not one of the above reserved names.
//             },
//             account: {
//                 id: "pendo-new"     ,     // Highly recommended
//                 enabledIntegrationAccelerators: ['microsoft', 'enforce_modules','blackberry_modules'],
//                 accountfield:  '100',
//                 boolean_flag: false
//                 // name:         // Optional
//                 // planLevel:    // Optional
//                 // planPrice:    // Optional
//                 // creationDate: // Optional
//                 // You can add any additional account level key-values here,
//                 // as long as it's not one of the above reserved names.
//             },
//       	 //   parentAccount: {
//       	  //    id:  'Parent Account 4',
//       	  //     name:   "enabled integration test"      // Optional
//       	      // You can add any additional master account level
//       	      // key-values here.
//       	    //}
//         });
//       })('fd2507d5-0da6-47c2-5189-f087c06e6922');


//EU Pendo Install

// (function(apiKey){
//     (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
//     v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){
//         o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
//         y=e.createElement(n);y.async=!0;y.src='https://cdn.eu.pendo.io/agent/static/'+apiKey+'/pendo.js';
//         z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
//         // Call this whenever information about your visitors becomes available
//         // Please use Strings, Numbers, or Bools for value types.
//         pendo.initialize({
//             visitor: {
//                 id:              'VISITOR-UNIQUE-ID'   // Required if user is logged in
//                 // email:        // Optional
//                 // role:         // Optional
//                 // You can add any additional visitor level key-values here,
//                 // as long as it's not one of the above reserved names.
//             },
//             account: {
//                 id:           'ACCOUNT-UNIQUE-ID' // Highly recommended
//                 // name:         // Optional
//                 // planLevel:    // Optional
//                 // planPrice:    // Optional
//                 // creationDate: // Optional
//                 // You can add any additional account level key-values here,
//                 // as long as it's not one of the above reserved names.
//             }
//         });
// })('27dfe707-9c25-45bb-7000-fd9e1f9a8ade');

//
Segment Install
<script>
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
  analytics.load("YwftWfBNKY9u0JVe3N1yG9yux5RdCggT");
  analytics.page();
  }}();
</script>

<script>
analytics.identify('f4ca124298', {
  name: 'Michael Bolton',
  email: 'mbolton@initech.com'
});
</script>
  
//  <!-- Other Scripts-->
//  <!-- Start of Async Drift Code -->

// <script>
// "use strict";
// !function() {
//   var t = window.driftt = window.drift = window.driftt || [];
//   if (!t.init) {
//     if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
//     t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
//     t.factory = function(e) {
//       return function() {
//         var n = Array.prototype.slice.call(arguments);
//         return n.unshift(e), t.push(n), t;
//       };
//     }, t.methods.forEach(function(e) {
//       t[e] = t.factory(e);
//     }), t.load = function(t) {
//       var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
//       o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
//       var i = document.getElementsByTagName("script")[0];
//       i.parentNode.insertBefore(o, i);
//     };
//   }
// }();
// drift.SNIPPET_VERSION = '0.3.1';
// drift.load('268z87akt9cr');
// </script>




// <script>
// pendo.track("NAME", {
//   PROPERTY1: "Replace with Function Name",
//   PROPERTY2: "PROPERTY2VALUE",
//   PROPERTYN: "PROPERTYNVALUE"
// });
// </script>

// <!--Intercom Install-->
// <script>
//   window.intercomSettings = {
//     app_id: "pjmruj7i",
//     name: "John Doe", // Full name
//     email: "jesse@pendo.io", // Email address
//     created_at: "1312182000" // Signup date as a Unix timestamp
//   };
// </script>
// <script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/pjmruj7i';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();</script>
// 
// <!--Pendo Install for Intercom testing-->
// <script>
// (function(apiKey){
//     (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
//     v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){
//         o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
//         y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
//         z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
//         pendo.initialize({
//             visitor: {
//                 id:  'Pendo-Intercom',
//                 name: "John Doe",
//                 email: 'jesse@pendo.io',
//             },
//             account: {
//                 id: "Intercom"     ,
//                 Company_name: "Intercom",
//                 accountfield:  '100',
//                 boolean_flag: false
//               }
//         });
//       })('fd2507d5-0da6-47c2-5189-f087c06e6922');
// </script>
