(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/logo.daf321ba.svg"},22:function(e,a,t){e.exports=t.p+"static/media/user.b171ffca.svg"},27:function(e,a,t){e.exports=t.p+"static/media/user.31aa4220.svg"},28:function(e,a,t){e.exports=t.p+"static/media/whatsapp.3a8a5d44.svg"},35:function(e,a,t){e.exports=t(72)},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(9),c=t.n(r),i=(t(40),t(41),t(21)),l=t.n(i);var s=function(e){return o.a.createElement("div",{className:"centerPage container"},o.a.createElement("img",{className:"logo",src:l.a,alt:"logo"}),o.a.createElement("h1",null,"\xa1Bienvenido a FastCab!"),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("button",{className:"botonAmarilloChiquito margen",onClick:function(){e.history.push({pathname:"/iniciarsesion"})}},"Iniciar Sesion"),o.a.createElement("button",{className:"botonGrisChiquito margen",onClick:function(){e.history.push({pathname:"/crearcuenta"})}},"Crear Cuenta")))};t(42);var u=function(e){var a="",t="";return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"titulo"},o.a.createElement("h1",null,"Iniciar Sesion")),o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Nombre su Usuario"),o.a.createElement("input",{className:"form-control",placeholder:"Ingrese el nombre de usuario",onChange:function(e){return a=e.target.value}})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Contrase\xf1a"),o.a.createElement("input",{type:"password",className:"form-control",placeholder:"Ingrese su contrase\xf1a",onChange:function(e){return t=e.target.value}}))),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("button",{className:"botonAmarilloChiquito margen",onClick:function(){return function(){var n={usuario:a,"contrase\xf1a":t};fetch("auth/login",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(a){a.json().then((function(a){e.history.push({pathname:"/viajes",user:a.usuario,token:a.token})}))})).catch((function(e){return console.log("Error:",e)}))}()}},"Iniciar Sesion"),o.a.createElement("button",{className:"botonGrisChiquito margen",onClick:function(){e.history.goBack()}},"Regresar")))};t(43);var m=function(e){var a="",t="",n="",r="",c="";return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"titulo2"},o.a.createElement("h1",null,"Crear Cuenta")),o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Nombre de Usuario"),o.a.createElement("input",{className:"form-control",placeholder:"Ingrese un nombre de usuario",onChange:function(e){return a=e.target.value}})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Cedula"),o.a.createElement("input",{className:"form-control",placeholder:"Ingrese su cedula",onChange:function(e){return t=e.target.value}})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Placa"),o.a.createElement("input",{className:"form-control",placeholder:"Ingrese la placa de su vehiculo",onChange:function(e){return n=e.target.value}})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Modelo del Vehiculo"),o.a.createElement("input",{className:"form-control",placeholder:"Ingrese el modelo de su vehiculo",onChange:function(e){return r=e.target.value}})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Contrase\xf1a"),o.a.createElement("input",{type:"password",className:"form-control",placeholder:"Ingrese una contrase\xf1a",onChange:function(e){return c=e.target.value}}))),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("button",{className:"botonAmarilloChiquito margen",onClick:function(){return function(){var o={usuario:a,cedula:t,placa:n,modelo:r,foto:"","contrase\xf1a":c};fetch("auth/create",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}).then((function(a){a.json().then((function(a){e.history.push({pathname:"/viajes",user:a.usuario,token:a.token})}))})).catch((function(e){return console.log("Error:",e)}))}()}},"Crear Cuenta"),o.a.createElement("button",{className:"botonGrisChiquito margen",onClick:function(){e.history.goBack()}},"Regresar")))},h=t(32),p=(t(44),t(22)),d=t.n(p);var f=function(e){return o.a.createElement("div",{className:"navBar"},o.a.createElement("a",{href:"miPerfil"},o.a.createElement("img",{className:"iconoUser",src:d.a,alt:"user icon"})))};t(45);var g=function(e){var a=Object(n.useState)([]),t=Object(h.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){var a=new WebSocket("wss://taxis-whatsapp.herokuapp.com");a.onopen=function(){console.log("open my ws"),a.onmessage=function(e){c(JSON.parse(e.data))}},fetch("data",{headers:{Authorization:"Bearer "+e.location.token}}).then((function(e){return e.json()})).then((function(e){e.err?console.log(JSON.stringify(e.err)):c(e)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(f,null),o.a.createElement("div",{className:"container"},r.map((function(a){return o.a.createElement("div",{className:"card shadow",key:a._id},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},a.direccion),o.a.createElement("button",{className:"botonAmarillo",onClick:function(){return function(a){fetch("taxistas/accept",{method:"POST",body:JSON.stringify({viaje:a,conductor:JSON.stringify({nombre:"Francisco Devia",cedula:"19431215",placa:"RGU-429",carro:"Chevrolet Spark"})}),headers:{"Content-Type":"application/json"}}).then((function(e){return console.log("Exito",e)})).catch((function(e){return console.log("Error:",e)})),a.estado="confirmado",e.history.push({pathname:"/servicio",viaje:a})}(a)}},"Aceptar")))}))))},E=t(23),v=t(24),y=t(33),N=t(25),b=t(34),C=t(26),k=t.n(C),j=function(e){function a(){return Object(E.a)(this,a),Object(y.a)(this,Object(N.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(v.a)(a,[{key:"renderMarkers",value:function(e,a){var t=new a.Geocoder,n=this.props.lat,o=this.props.lon;t.geocode({address:this.props.direccion},(function(t,r){"OK"===r&&(n=t[0].geometry.location.lat(),o=t[0].geometry.location.lng()),new a.Marker({position:{lat:n,lng:o},map:e,title:"Hello World!"}),e.panTo({lat:n,lng:o})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{height:"50vh",width:"100%"}},o.a.createElement(k.a,{bootstrapURLKeys:{key:"AIzaSyBQGovuMsVwP-HAiTWrNAVND5JfnikoPZ8"},defaultCenter:{lat:this.props.lat,lng:this.props.lon},defaultZoom:17,onGoogleApiLoaded:function(a){var t=a.map,n=a.maps;return e.renderMarkers(t,n)},yesIWantToUseGoogleMapApiInternals:!0}))}}]),a}(n.Component),S=(t(67),t(27)),O=t.n(S),w=t(28),x=t.n(w);var T=function(e){var a=e.location.viaje||{direccion:"Universidad de los Andes",estado:"en curso",usuario:"Mateo Devia",numero:"whatsapp:+573132803320"};return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("img",{className:"fotoUsuario",src:O.a,alt:"user icon"}),o.a.createElement("h1",{className:"nombreUsuario"},a.usuario)),o.a.createElement("h2",null,a.direccion),o.a.createElement(j,{lat:5.6984895,lon:-74.03693240000001,direccion:a.direccion}),o.a.createElement("a",{href:"https://wa.me/"+a.numero.split("whatsapp:+")[1]},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"circuloverde"},o.a.createElement("img",{className:"iconoWhatsapp",src:x.a,alt:"user icon"})),o.a.createElement("h4",{className:"textoBoton"},"Enviar mensaje a Whatsapp"))),"confirmado"===a.estado&&o.a.createElement("button",{className:"botonAmarillo margen",onClick:function(){return function(e){fetch("taxistas/llegue",{method:"POST",body:JSON.stringify({viaje:e,conductor:JSON.stringify({nombre:"Francisco Devia",cedula:"19431215",placa:"RGU-429",carro:"Chevrolet Spark"})}),headers:{"Content-Type":"application/json"}}).then((function(e){return console.log("Exito",e)})).catch((function(e){return console.log("Error:",e)})),e.estado="esperando"}(a)}},"Ya llegu\xe9"),"esperando"===a.estado&&o.a.createElement("button",{className:"botonAmarillo margen",onClick:function(){return function(e){fetch("taxistas/recoger",{method:"POST",body:JSON.stringify({viaje:e,conductor:JSON.stringify({nombre:"Francisco Devia",cedula:"19431215",placa:"RGU-429",carro:"Chevrolet Spark"})}),headers:{"Content-Type":"application/json"}}).then((function(e){return console.log("Exito",e)})).catch((function(e){return console.log("Error:",e)})),e.estado="en curso"}(a)}},"Ya recog\xed al usuario"),"en curso"===a.estado&&o.a.createElement("button",{className:"botonAmarillo margen",onClick:function(){return function(a){fetch("taxistas/terminar",{method:"POST",body:JSON.stringify({viaje:a,conductor:JSON.stringify({nombre:"Francisco Devia",cedula:"19431215",placa:"RGU-429",carro:"Chevrolet Spark"})}),headers:{"Content-Type":"application/json"}}).then((function(e){return console.log("Exito",e)})).catch((function(e){return console.log("Error:",e)})),a.estado="en curso",e.history.goBack()}(a)}},"Terminar Recorrido"),o.a.createElement("button",{className:"botonGris margen",onClick:function(){return function(a){fetch("taxistas/cancelar",{method:"POST",body:JSON.stringify({viaje:a,conductor:JSON.stringify({nombre:"Francisco Devia",cedula:"19431215",placa:"RGU-429",carro:"Chevrolet Spark"})}),headers:{"Content-Type":"application/json"}}).then((function(e){return console.log("Exito",e)})).catch((function(e){return console.log("Error:",e)})),a.estado="en curso",e.history.goBack()}(a)}},"Cancelar Viaje"))},J=(t(68),t(29)),A=t(5);var I=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(J.a,null,o.a.createElement(A.c,null,o.a.createElement(A.a,{exact:!0,path:"/",component:function(e){return o.a.createElement(s,{history:e.history,location:e.location})}}),o.a.createElement(A.a,{path:"/iniciarsesion",component:function(e){return o.a.createElement(u,{history:e.history,location:e.location})}}),o.a.createElement(A.a,{path:"/crearcuenta",component:function(e){return o.a.createElement(m,{history:e.history,location:e.location})}}),o.a.createElement(A.a,{path:"/viajes",component:function(e){return o.a.createElement(g,{history:e.history,location:e.location})}}),o.a.createElement(A.a,{path:"/servicio",component:function(e){return o.a.createElement(T,{history:e.history,location:e.location})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.05414f35.chunk.js.map