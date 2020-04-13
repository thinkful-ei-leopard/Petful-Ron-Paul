(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{25:function(e,t,a){e.exports=a(40)},26:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/dogcat.723fa51c.jpg"},40:function(e,t,a){"use strict";a.r(t);a(26);var n=a(0),l=a.n(n),r=a(22),o=a.n(r),c=a(6),s=a(9),i=a(10),m=a(12),u=a(11),p=a(13),d=a(5),h=a(8),f=a.n(h),g=a(19),E=a(15),b=(a(32),"http://localhost:8000"),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={people:[],dogs:[],cats:[],value:"",loading:!0,name:"",fakePeople:["Laura Palmer","Dale Cooper","Donna Hayward","Leland Palmer","Audrey Horne","Josie Packard","Norma Jennings","James Hurley","Bobby Briggs","Dr. Lawrence Jacoby","Nadine Hurley","Leo Johnson","Catherine Martell","Log Lady","Gordon Cole"]},a.getPeopleAndPets=Object(E.a)(f.a.mark((function e(){var t,n,l,r,o,c,s,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch("".concat(b,"/api/people")),fetch("".concat(b,"/api/pets"))]);case 2:if(t=e.sent,n=Object(g.a)(t,2),l=n[0],r=n[1],l.ok){e.next=8;break}return e.abrupt("return",l.json().then((function(e){return Promise.reject(e)})));case 8:if(r.ok){e.next=10;break}return e.abrupt("return",r.json().then((function(e){return Promise.reject(e)})));case 10:return e.prev=10,e.next=13,Promise.all([l.json(),r.json()]);case 13:o=e.sent,c=Object(g.a)(o,2),s=c[0],i=c[1],a.setState({people:s,cats:i.cats,dogs:i.dogs,loading:!1}),e.next=22;break;case 20:e.prev=20,e.t0=e.catch(10);case 22:case"end":return e.stop()}}),e,null,[[10,20]])}))),a.handleSignUp=function(){var e=Object(E.a)(f.a.mark((function e(t,n){var l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=a.state.fakePeople,e.next=3,fetch("".concat(b,"/api/people"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:n})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}));case 3:return e.next=5,a.getPeopleAndPets();case 5:if(l.includes(n)){e.next=9;break}return a.setState({name:n}),e.next=9,a.startQueue(t);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.randomPet=function(){return["dogs","cats"][Math.round(Math.random())]},a.startQueue=function(e){var t=a.state,n=t.fakePeople,l=t.name,r=t.people,o=0;if(l!==r.allPeople[0])return setInterval((function(){var t=a.state,l=t.name,r=t.people,c=a.randomPet(),s=n[o];l!==r.allPeople[0]?(a.handleAdopt(c,!1),a.handleSignUp(e,s),o<10?o++:o=0):clearInterval()}),5e3);clearInterval()},a.handleAdopt=function(){var e=Object(E.a)(f.a.mark((function e(t){var n,l=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]&&l[1],e.next=3,fetch("".concat(b,"/api/pets"),{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify({type:t,both:n})});case 3:return e.next=5,a.getPeopleAndPets();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){a.setState({value:e.target.value})},a.notifySuccess=function(){alert("congrats! you have made a successful adoption!")},a.renderButtons=function(e,t,n){var r=a.state;if(r.name===r.people.allPeople[0])return l.a.createElement("button",{className:"adopt-button",type:"submit",onClick:function(){a.handleAdopt(e,t),a.notifySuccess()}},"Adopt ",n,"!")},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getPeopleAndPets()}},{key:"render",value:function(){var e=this,t=this.state,a=t.cats,n=t.dogs,r=t.people;return this.state.loading?l.a.createElement(l.a.Fragment,null):l.a.createElement("div",{className:"Adoption"},l.a.createElement("nav",{className:"nav-bar"},l.a.createElement(c.b,{className:"home-link",to:"/"},l.a.createElement("h1",{className:"petful-header"},"Petful"))),l.a.createElement("section",{role:"contentinfo",className:"adoption-info"},l.a.createElement("p",{className:"intro-text"},"Welcome to the adoption page! Cats and dogs are available for adoption based on how long they've been with us. Please input your name to be added to the list. Once it's your turn, you may choose to adopt the dog or cat who is currently up for adoption (or get them both!)."),l.a.createElement("div",{className:"waitlist"},l.a.createElement("h2",{className:"waitlist-header"},"Waitlist"),l.a.createElement("ul",{className:"user-list"},l.a.createElement("li",null,r.allPeople[0]),l.a.createElement("li",null,r.allPeople[1]),l.a.createElement("li",null,r.allPeople[2]),l.a.createElement("li",null,r.allPeople[3]),l.a.createElement("li",null,r.allPeople[4])),l.a.createElement("div",{className:"waitlist-form-container"},l.a.createElement("form",{className:"waitlist-form",autoComplete:"off"},l.a.createElement("label",{htmlFor:"adopter-name"},"Add your name: "),l.a.createElement("input",{id:"adopter-name",autoComplete:"off",type:"text",value:this.state.value,onChange:this.handleChange}),l.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault(),e.handleSignUp(t,e.state.value),e.setState({value:""})}},"Enter"))))),l.a.createElement("main",{className:"pets-container"},l.a.createElement("section",{className:"cats-container"},l.a.createElement("h2",{className:"cats-header"},"Next available cat"),a.length?l.a.createElement("div",null,l.a.createElement("div",{className:"cat-info"},l.a.createElement("img",{className:"available-cat-image",src:a[0].imageURL,alt:a[0].description}),l.a.createElement("p",{className:"cat-name"},l.a.createElement("span",null,"name:")," ",a[0].name," "),l.a.createElement("p",{className:"cat-age"},l.a.createElement("span",null,"age:")," ",a[0].age," "),l.a.createElement("p",{className:"cat-gender"},l.a.createElement("span",null,"gender:")," ",a[0].gender," "),l.a.createElement("p",{className:"cat-breed"},l.a.createElement("span",null,"breed:")," ",a[0].breed," "),l.a.createElement("p",{className:"cat-story"},l.a.createElement("span",null,"story:")," ",a[0].story," ")),l.a.createElement("div",{className:"center"},this.renderButtons("cats",!1,"Me"))):l.a.createElement("h3",null,"No cats left!")),l.a.createElement("div",{className:"center-both"},this.renderButtons("",!0,"Both")),l.a.createElement("section",{className:"dogs-container"},l.a.createElement("h2",{className:"dogs-header"},"Next available dog"),n.length?l.a.createElement("div",null,l.a.createElement("div",{className:"dog-info"},l.a.createElement("img",{className:"available-dog-image",src:n[0].imageURL,alt:n[0].description}),l.a.createElement("p",{className:"dog-name"},l.a.createElement("span",null,"name:")," ",n[0].name),l.a.createElement("p",{className:"dog-age"},l.a.createElement("span",null,"age:")," ",n[0].age," "),l.a.createElement("p",{className:"dog-gender"},l.a.createElement("span",null,"gender:")," ",n[0].gender),l.a.createElement("p",{className:"dog-breed"},l.a.createElement("span",null,"breed:")," ",n[0].breed),l.a.createElement("p",{className:"dog-story"},l.a.createElement("span",null,"story:")," ",n[0].story)),l.a.createElement("div",{className:"center"},this.renderButtons("dogs",!1,"Me"))):l.a.createElement("h3",null,"No dogs left!"))))}}]),t}(n.Component),N=(a(38),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("main",{className:"LandingPage"},l.a.createElement("h1",{className:"header"},"Welcome to Petful!"),l.a.createElement("img",{className:"dogcat",src:a(39),alt:"Dog Cat"}),l.a.createElement("p",null,"We operate on a"," ",l.a.createElement("span",{className:"first-come"},"first-come, first-served")," basis. If you would like to adopt one of our furry friends, click the button below and add your name to the adoption list! Cats and dogs who have been with us the longest will be the first ones available for adoption."),l.a.createElement(c.b,{to:"/adoption",className:"adopt-button"},l.a.createElement("p",null,"Adopt Now!")))}}]),t}(n.Component)),y=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:N}),l.a.createElement(d.a,{exact:!0,path:"/adoption",component:v})))}}]),t}(n.Component);o.a.render(l.a.createElement(c.a,null,l.a.createElement(y,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.101d5a05.chunk.js.map