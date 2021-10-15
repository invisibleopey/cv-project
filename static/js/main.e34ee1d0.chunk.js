(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{22:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(12),i=n.n(s),o=n(3),r=n(10),l=n(13),d=n(14),h=n(16),j=n(15),b=n(0);var u=function(e){var t=e.handleChange,n=e.genInfo;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"General Information"}),Object(b.jsxs)("form",{action:"#",className:"gen-info",children:[Object(b.jsx)("input",{type:"text",name:"firstName",value:n.firstName,onChange:t,placeholder:"First Name"}),Object(b.jsx)("input",{type:"text",name:"lastName",value:n.lastName,onChange:t,placeholder:"Last Name"}),Object(b.jsx)("input",{type:"text",name:"title",value:n.title,onChange:t,placeholder:"Title"}),Object(b.jsx)("input",{type:"text",name:"address",value:n.address,onChange:t,placeholder:"Address"}),Object(b.jsx)("input",{type:"email",name:"email",value:n.email,onChange:t,placeholder:"Email"}),Object(b.jsx)("input",{type:"text",name:"phoneNumber",value:n.phoneNumber,onChange:t,placeholder:"Phone Number"}),Object(b.jsx)("textarea",{name:"description",cols:"10",rows:"10",placeholder:"Description",value:n.description,onChange:t})]})]})};var p=function(e){var t=e.school,n=e.handleChange,a=e.handleSchoolSubmit;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Education"}),Object(b.jsxs)("form",{action:"#",className:"education",onSubmit:a,children:[Object(b.jsx)("input",{type:"text",name:"name",value:t.name,onChange:n,placeholder:"University Name"}),Object(b.jsx)("input",{type:"text",name:"city",value:t.city,onChange:n,placeholder:"City"}),Object(b.jsx)("input",{type:"text",name:"degree",value:t.degree,onChange:n,placeholder:"Degree"}),Object(b.jsx)("input",{type:"text",name:"subject",value:t.subject,onChange:n,placeholder:"Subject"}),Object(b.jsx)("input",{type:"text",name:"startDate",value:t.startDate,onChange:n,placeholder:"From"}),Object(b.jsx)("input",{type:"text",name:"endDate",value:t.endDate,onChange:n,placeholder:"To"}),Object(b.jsx)("button",{type:"submit",children:"ADD"})]})]})};var m=function(e){var t=e.job,n=e.handleChange,a=e.handleJobSubmit;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Experience"}),Object(b.jsxs)("form",{action:"#",className:"experience",onSubmit:a,children:[Object(b.jsx)("input",{type:"text",name:"position",value:t.position,placeholder:"Position",onChange:n}),Object(b.jsx)("input",{type:"text",name:"company",value:t.company,placeholder:"Company",onChange:n}),Object(b.jsx)("input",{type:"text",name:"city",value:t.city,placeholder:"City",onChange:n}),Object(b.jsx)("input",{type:"text",name:"startDate",value:t.startDate,placeholder:"From",onChange:n}),Object(b.jsx)("input",{type:"text",name:"endDate",value:t.endDate,placeholder:"To",onChange:n}),Object(b.jsx)("button",{type:"submit",children:"ADD"})]})]})},x=(n(22),n(4)),O=n(6);var v=function(e){var t=e.genInfo,n=e.schools,a=e.jobs,c=e.handleDelete,s=e.handleSchoolEdit,i=e.handleJobEdit;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"overview-hero",children:[Object(b.jsx)("h2",{children:"".concat(t.firstName," ").concat(t.lastName)}),Object(b.jsx)("h3",{children:t.title})]}),Object(b.jsxs)("div",{className:"overview-main",children:[Object(b.jsxs)("div",{className:"contact-details",children:[Object(b.jsx)("h3",{children:"Contact Details"}),Object(b.jsxs)("p",{children:["Address: ",t.address]}),Object(b.jsxs)("p",{children:["Email: ",t.email]}),Object(b.jsxs)("p",{children:["Phone Number: ",t.phoneNumber]})]}),Object(b.jsxs)("div",{className:"description",children:[Object(b.jsx)("h3",{children:"Description"}),Object(b.jsx)("p",{children:t.description})]}),Object(b.jsxs)("div",{className:"overview-edu",children:[Object(b.jsx)("h3",{children:"Education"}),n.map((function(e){return Object(b.jsxs)("div",{className:"schools",id:e.id,children:[Object(b.jsx)("div",{children:Object(b.jsx)("h4",{children:"".concat(e.startDate," - ").concat(e.endDate)})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"".concat(e.name,", ").concat(e.city)}),Object(b.jsxs)("p",{children:["Degree: ",e.degree]}),Object(b.jsxs)("p",{children:["Subject: ",e.subject]})]}),Object(b.jsx)(x.a,{icon:O.a,onClick:s,className:"icons"}),Object(b.jsx)(x.a,{icon:O.b,onClick:c,className:"icons"})]},e.id)}))]}),Object(b.jsxs)("div",{className:"overview-exp",children:[Object(b.jsx)("h3",{children:"Experience"}),a.map((function(e){return Object(b.jsxs)("div",{className:"jobs",id:e.id,children:[Object(b.jsx)("div",{children:Object(b.jsx)("h4",{children:"".concat(e.startDate," - ").concat(e.endDate)})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"".concat(e.position)}),Object(b.jsx)("p",{children:"".concat(e.company,", ").concat(e.city)})]}),Object(b.jsx)(x.a,{icon:O.a,onClick:i,className:"icons"}),Object(b.jsx)(x.a,{icon:O.b,onClick:c,className:"icons"})]},e.id)}))]})]})]})},g=n(7),f=n.n(g),y=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t,n=e.target,c=n.name,s=n.value;switch(e.target.parentNode.className){case"gen-info":t="genInfo";break;case"education":t="school";break;case"experience":t="job"}a.setState((function(e){return Object(o.a)({},t,Object(r.a)(Object(r.a)({},e[t]),{},Object(o.a)({},c,s)))}))},a.handleDelete=function(e){var t,n=e.target.parentNode.parentElement.id;switch(e.target.parentNode.parentElement.className){case"schools":t="schools";break;case"jobs":t="jobs"}a.setState(Object(o.a)({},t,a.state[t].filter((function(e){return e.id!==n}))))},a.handleSchoolSubmit=function(e){e.preventDefault(),a.setState({schools:a.state.schools.concat(a.state.school),school:{name:"",city:"",degree:"",subject:"",startDate:"",endDate:"",id:f()()}})},a.handleSchoolEdit=function(e){var t=e.target.parentNode.parentElement.id;a.setState((function(e){var n=e.schools.find((function(e){return e.id===t}));return{school:{name:n.name,city:n.city,degree:n.degree,subject:n.subject,startDate:n.startDate,endDate:n.endDate,id:n.id},schools:e.schools.filter((function(e){return e.id!==t}))}}))},a.handleJobSubmit=function(e){e.preventDefault(),a.setState({jobs:a.state.jobs.concat(a.state.job),job:{position:"",company:"",city:"",startDate:"",endDate:"",id:f()()}})},a.handleJobEdit=function(e){var t=e.target.parentNode.parentElement.id;a.setState((function(e){var n=e.jobs.find((function(e){return e.id===t}));return{job:{position:n.position,company:n.company,city:n.city,startDate:n.startDate,endDate:n.endDate,id:n.id},jobs:e.jobs.filter((function(e){return e.id!==t}))}}))},a.state={genInfo:{firstName:"",lastName:"",title:"",address:"",email:"",phoneNumber:"",description:""},school:{name:"",city:"",degree:"",subject:"",startDate:"",endDate:"",id:f()()},schools:[],job:{position:"",company:"",city:"",startDate:"",endDate:"",id:f()()},jobs:[]},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.genInfo,n=e.school,a=e.schools,c=e.job,s=e.jobs;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)("h1",{children:"Resume Regenetor with React"})}),Object(b.jsxs)("main",{children:[Object(b.jsxs)("div",{className:"form-container",children:[Object(b.jsx)(u,{genInfo:t,handleChange:this.handleChange}),Object(b.jsx)(p,{school:n,handleChange:this.handleChange,handleSchoolSubmit:this.handleSchoolSubmit}),Object(b.jsx)(m,{job:c,handleChange:this.handleChange,handleJobSubmit:this.handleJobSubmit})]}),Object(b.jsx)("div",{className:"overview-container",children:Object(b.jsx)(v,{genInfo:t,schools:a,jobs:s,handleDelete:this.handleDelete,handleSchoolEdit:this.handleSchoolEdit,handleJobEdit:this.handleJobEdit})})]})]})}}]),n}(a.Component);i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.e34ee1d0.chunk.js.map