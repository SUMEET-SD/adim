(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2kGi":function(t,e,s){"use strict";s("WQJm")},"AT+L":function(t,e,s){"use strict";s.r(e);var n={data:function(){return{user:{identifier:"",password:""}}},methods:{login:function(){var t=this,e=this.user.identifier,s=this.user.password;console.log({identifier:e,password:s}),this.$store.dispatch("login",{identifier:e,password:s}).then((function(){return t.$router.push("/home")})).catch((function(e){t.$router.push("/"),console.error({err:e})}))}}},o=s("KHd+"),r={components:{LoginForm:Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid min-h-screen place-items-center "},[s("div",{staticClass:"w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 shadow-lg rounded-xl"},[t._m(0),s("hr",{staticClass:"mb-7 mt-2"}),s("form",{attrs:{onsubmit:"return false",autocomplete:"off"}},[s("div",{},[s("label",{staticClass:" block mt-2 text-xs font-semibold text-gray-600 uppercase",attrs:{for:"email"}},[t._v("E-mail")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.identifier,expression:"user.identifier"}],staticClass:" rounded block w-full p-3 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner",attrs:{id:"email",type:"email",name:"email",placeholder:"sumeet.damse@email.com",autocomplete:"email",required:""},domProps:{value:t.user.identifier},on:{input:function(e){e.target.composing||t.$set(t.user,"identifier",e.target.value)}}})]),s("div",{},[s("label",{staticClass:" block mt-2 text-xs font-semibold text-gray-600 uppercase",attrs:{for:"password"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:" rounded block w-full p-3 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner",attrs:{id:"password",type:"password",name:"password",placeholder:"********",autocomplete:"new-password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),s("button",{staticClass:"rounded w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-pink-500 shadow-lg focus:outline-none hover:bg-pink-600 hover:shadow-none",attrs:{type:"submit"},on:{click:t.login}},[t._v("\n\t\t\t\tLogin\n\t\t\t")]),s("g-link",{attrs:{to:"/signup/"}},[s("p",{staticClass:"flex justify-between inline-block mt-4 text-xs text-gray-1000 cursor-pointer hover:text-black"},[t._v("\n\t\t\t\t\tDon't have an Account?\n\t\t\t\t")])])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"text-xl font-semibold"},[this._v("\n\t\t\tLogin\n\t\t\t"),e("span",{staticClass:"font-normal"},[this._v("and Enjoy the Platform")])])}],!1,null,null,null).exports}},a=(s("2kGi"),Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("LoginForm")],1)}),[],!1,null,null,null));e.default=a.exports},WQJm:function(t,e,s){}}]);