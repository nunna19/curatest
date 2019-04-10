(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(20),s=a.n(r),i=(a(29),a(2)),l=a(3),c=a(5),u=a(4),h=a(6),d=(a(11),a(10)),m=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"box"},n.a.createElement("h6",null,"Diabetes"),n.a.createElement("p",null,"Diabetes is a disease in which your blood glucose, or blood sugar, levels are too high. Glucose comes from the foods you eat. Insulin is a hormone that helps the glucose get into your cells to give them energy. With type 1 diabetes, your body does not make insulin. With type 2 diabetes, the more common type, your body does not make or use insulin well. Without enough insulin, the glucose stays in your blood. You can also have prediabetes. This means that your blood sugar is higher than normal but not high enough to be called diabetes. Having prediabetes puts you at a higher risk of getting type 2 diabetes. Over time, having too much glucose in your blood can cause serious problems. It can damage your eyes, kidneys, and nerves. Diabetes can also cause heart disease, stroke and even the need to remove a limb. Pregnant women can also get diabetes, called gestational diabetes. Blood tests can show if you have diabetes. One type of test, the A1C, can also check on how you are managing your diabetes. Exercise, weight control and sticking to your meal plan can help control your diabetes. You should also monitor your blood glucose level and take medicine if prescribed. NIH: National Institute of Diabetes and Digestive and Kidney Diseases"))}}]),t}(o.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"box"},n.a.createElement("h6",null,"Cholesterol"),n.a.createElement("p",null,"Cholesterol is a waxy substance found in your blood. Your body needs cholesterol to build healthy cells, but high levels of cholesterol can increase your risk of heart disease. With high cholesterol, you can develop fatty deposits in your blood vessels. Eventually, these deposits grow, making it difficult for enough blood to flow through your arteries. Sometimes, those deposits can break suddenly and form a clot that causes a heart attack or stroke. High cholesterol can be inherited, but it's often the result of unhealthy lifestyle choices, which make it preventable and treatable. A healthy diet, regular exercise and sometimes medication can help reduce high cholesterol."))}}]),t}(o.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"box"},n.a.createElement("h6",null,"Hypertension"),n.a.createElement("p",null,"High blood pressure is a common condition in which the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems, such as heart disease. Blood pressure is determined both by the amount of blood your heart pumps and the amount of resistance to blood flow in your arteries. The more blood your heart pumps and the narrower your arteries, the higher your blood pressure. You can have high blood pressure (hypertension) for years without any symptoms. Even without symptoms, damage to blood vessels and your heart continues and can be detected. Uncontrolled high blood pressure increases your risk of serious health problems, including heart attack and stroke. High blood pressure generally develops over many years, and it affects nearly everyone eventually. Fortunately, high blood pressure can be easily detected. And once you know you have high blood pressure, you can work with your doctor to control it."))}}]),t}(o.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"box"},n.a.createElement("h6",null,"Weight-Loss"),n.a.createElement("p",null,"There are many ways to lose a lot of weight fast. However, most of them will make you hungry and unsatisfied. If you don't have iron willpower, then hunger will cause you to give up on these plans quickly. The plan outlined here will: Reduce your appetite significantly. Make you lose weight quickly, without hunger. Improve your metabolic health at the same time. Here is a simple 3-step plan to lose weight fast."))}}]),t}(o.Component),g=a(23),f=a(13),v=[{card:"Diabetes"},{card:"Cholesterol"},{card:"Hypertension"},{card:"Weight-Loss"}],w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).updateSearch=function(e){var t=Object(g.a)(a.state.cardComponents),o=e.target.value,n=t.filter(function(e){return e.card.toLocaleLowerCase().includes(o)});""==o&&(n=[]),a.setState({filterCardComponent:n,search:o})},a.showComponent=function(){return a.state.filterCardComponent.map(function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("p",null,n.a.createElement(f.b,{to:"./".concat(e.card)},e.card)))})},a.state={cardComponents:v,filterCardComponent:[]},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"NavBar"},n.a.createElement("img",{width:"20px",src:"./search.png",alt:""}),n.a.createElement("input",{type:"text",value:this.state.search,placeholder:"Search...",onChange:this.updateSearch}),this.showComponent())}}]),t}(o.Component),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).search=function(){},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement(w,null),n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/Diabetes",component:function(t){return n.a.createElement(m,Object.assign({},t,e.state))}}),n.a.createElement(d.a,{exact:!0,path:"/Cholesterol",component:function(t){return n.a.createElement(b,Object.assign({},t,e.state))}}),n.a.createElement(d.a,{exact:!0,path:"/Hypertension",component:function(t){return n.a.createElement(p,Object.assign({},t,e.state))}}),n.a.createElement(d.a,{exact:!0,path:"/Weight-Loss",component:function(t){return n.a.createElement(y,Object.assign({},t,e.state))}})))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(f.a,null,n.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.a3fc526d.chunk.js.map