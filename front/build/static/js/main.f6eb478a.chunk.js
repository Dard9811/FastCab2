(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/logo.daf321ba.svg"},27:function(e,t,a){e.exports=a.p+"static/media/user.b171ffca.svg"},30:function(e,t,a){e.exports=a.p+"static/media/user.31aa4220.svg"},31:function(e,t,a){e.exports=a.p+"static/media/whatsapp.3a8a5d44.svg"},32:function(e,t,a){e.exports=a.p+"static/media/flecha.6d79aeff.svg"},37:function(e,t,a){e.exports=a(75)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),c=a.n(r),l=(a(42),a(43),a(26)),i=a.n(l);var s=function(e){return o.a.createElement("div",{className:"centerPage container"},o.a.createElement("img",{className:"logo",src:i.a,alt:"logo"}),o.a.createElement("h1",null,"\xa1Bienvenido a FastCab!"),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("button",{className:"botonAmarilloChiquito margen",onClick:function(){e.history.push({pathname:"/iniciarsesion"})}},"Iniciar Sesion"),o.a.createElement("button",{className:"botonGrisChiquito margen",onClick:function(){e.history.push({pathname:"/crearcuenta"})}},"Crear Cuenta")))};a(44);var u=function(e){var t="",a="";return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"titulo"},o.a.createElement("h1",null,"Iniciar Sesion")),o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Nombre su Usuario"),o.a.createElement("input",{className:"form-control",placeholder:"Ingrese el nombre de usuario",onChange:function(e){return t=e.target.value}})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Contrase\xf1a"),o.a.createElement("input",{type:"password",className:"form-control",placeholder:"Ingrese su contrase\xf1a",onChange:function(e){return a=e.target.value}}))),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("button",{className:"botonAmarilloChiquito margen",onClick:function(){return function(){var n={usuario:t,"contrase\xf1a":a};fetch("auth/login",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(t){t.json().then((function(t){e.history.push({pathname:"/viajes",conductor:t.usuario,token:t.token})}))})).catch((function(e){return console.log("Error:",e)}))}()}},"Iniciar Sesion"),o.a.createElement("button",{className:"botonGrisChiquito margen",onClick:function(){e.history.goBack()}},"Regresar")))};a(45);var m=function(e){var t="",a="",n="",r="",c="",l="";return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"titulo2"},o.a.createElement("h1",null,"Crear Cuenta")),o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Nombre de Usuario"),o.a.createElement("input",{className:"form-control",placeholder:"Ingrese un nombre de usuario",onChange:function(e){return t=e.target.value}})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Numero de Whatsapp"),o.a.createElement("input",{className:"form-control",placeholder:"Ingrese su numero de Whatsapp",onChange:function(e){return a=e.target.value}})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Cedula"),o.a.createElement("input",{className:"form-control",placeholder:"Ingrese su cedula",onChange:function(e){return n=e.target.value}})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Placa"),o.a.createElement("input",{className:"form-control",placeholder:"Ingrese la placa de su vehiculo",onChange:function(e){return r=e.target.value}})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Modelo del Vehiculo"),o.a.createElement("input",{className:"form-control",placeholder:"Ingrese el modelo de su vehiculo",onChange:function(e){return c=e.target.value}})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Contrase\xf1a"),o.a.createElement("input",{type:"password",className:"form-control",placeholder:"Ingrese una contrase\xf1a",onChange:function(e){return l=e.target.value}}))),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("button",{className:"botonAmarilloChiquito margen",onClick:function(){return function(){var o={usuario:t,numero:a,cedula:n,placa:r,modelo:c,foto:"","contrase\xf1a":l};fetch("auth/create",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}).then((function(t){t.json().then((function(t){e.history.push({pathname:"/viajes",conductor:t.usuario,token:t.token})}))})).catch((function(e){return console.log("Error:",e)}))}()}},"Crear Cuenta"),o.a.createElement("button",{className:"botonGrisChiquito margen",onClick:function(){e.history.goBack()}},"Regresar")))},h=a(36),p=(a(46),a(27)),d=a.n(p);var f=function(e){return o.a.createElement("div",{className:"navBar"},o.a.createElement("img",{onClick:function(){e.history.push({pathname:"/miperfil",conductor:e.location.conductor,token:e.location.token})},className:"iconoUser",src:d.a,alt:"user icon"}))};a(47);var v=function(e){var t=Object(n.useState)([]),a=Object(h.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=new WebSocket("wss://taxis-whatsapp.herokuapp.com");t.onopen=function(){console.log("open my ws"),t.onmessage=function(e){c(JSON.parse(e.data))}},fetch("data",{headers:{Authorization:"Bearer "+e.location.token}}).then((function(e){return e.json()})).then((function(e){e.err?console.log(JSON.stringify(e.err)):c(e)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(f,{history:e.history,location:e.location}),o.a.createElement("div",{className:"container"},r.map((function(t){return o.a.createElement("div",{className:"card shadow",key:t._id},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},t.direccion),o.a.createElement("button",{className:"botonAmarillo",onClick:function(){return function(t){var a=JSON.stringify({viaje:t,conductor:e.location.conductor});fetch("taxistas/accept",{method:"POST",body:a,headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.location.token}}).then((function(e){})).catch((function(e){return console.log("Error:",e)})),t.estado="confirmado",e.history.push({pathname:"/servicio",viaje:t,conductor:e.location.conductor,token:e.location.token})}(t)}},"Aceptar")))}))))},E=a(28),g=a(8),b=a(9),y=a(11),j=a(10),N=a(12),C=a(29),k=a.n(C),O=function(e){function t(){return Object(g.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(b.a)(t,[{key:"renderMarkers",value:function(e,t){var a=new t.Geocoder,n=this.props.lat,o=this.props.lon;a.geocode({address:this.props.direccion},(function(a,r){"OK"===r&&(n=a[0].geometry.location.lat(),o=a[0].geometry.location.lng()),new t.Marker({position:{lat:n,lng:o},map:e,title:"Hello World!"}),e.panTo({lat:n,lng:o})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{height:"50vh",width:"100%"}},o.a.createElement(k.a,{bootstrapURLKeys:{key:"AIzaSyBQGovuMsVwP-HAiTWrNAVND5JfnikoPZ8"},defaultCenter:{lat:this.props.lat,lng:this.props.lon},defaultZoom:17,onGoogleApiLoaded:function(t){var a=t.map,n=t.maps;return e.renderMarkers(a,n)},yesIWantToUseGoogleMapApiInternals:!0}))}}]),t}(n.Component),S=(a(69),a(30)),w=a.n(S),P=a(31),A=a.n(P);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var J=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(y.a)(this,Object(j.a)(t).call(this,e))).handleRecoger=function(e){fetch("taxistas/recoger",{method:"POST",body:JSON.stringify({viaje:e,conductor:JSON.stringify({nombre:"Francisco Devia",cedula:"19431215",placa:"RGU-429",carro:"Chevrolet Spark"})}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+a.props.location.token}}).then((function(e){})).catch((function(e){return console.log("Error:",e)}));var t=B({},a.state.viaje);t.estado="en curso",a.setState({viaje:t})},a.handleLlegue=function(e){fetch("taxistas/llegue",{method:"POST",body:JSON.stringify({viaje:e,conductor:JSON.stringify({nombre:"Francisco Devia",cedula:"19431215",placa:"RGU-429",carro:"Chevrolet Spark"})}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+a.props.location.token}}).then((function(e){})).catch((function(e){return console.log("Error:",e)}));var t=B({},a.state.viaje);t.estado="esperando",a.setState({viaje:t})},a.handleTerminar=function(e){fetch("taxistas/terminar",{method:"POST",body:JSON.stringify({viaje:e,conductor:JSON.stringify({nombre:"Francisco Devia",cedula:"19431215",placa:"RGU-429",carro:"Chevrolet Spark"})}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+a.props.location.token}}).then((function(e){})).catch((function(e){return console.log("Error:",e)}));var t=B({},a.state.viaje);t.estado="terminado",a.setState({viaje:t}),a.props.history.push({pathname:"/viajes",conductor:a.props.location.conductor,token:a.props.location.token})},a.handleCancelar=function(e){fetch("taxistas/cancelar",{method:"POST",body:JSON.stringify({viaje:e,conductor:JSON.stringify({nombre:"Francisco Devia",cedula:"19431215",placa:"RGU-429",carro:"Chevrolet Spark"})}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+a.props.location.token}}).then((function(e){})).catch((function(e){return console.log("Error:",e)}));var t=B({},a.state.viaje);t.estado="cancelado",a.setState({viaje:t}),a.props.history.push({pathname:"/viajes",conductor:a.props.location.conductor,token:a.props.location.token})},a.state={viaje:e.location.viaje},a}return Object(N.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("img",{className:"fotoUsuario",src:w.a,alt:"user icon"}),o.a.createElement("h1",{className:"nombreUsuario"},this.state.viaje.numero)),o.a.createElement("h2",null,this.state.viaje.direccion),o.a.createElement(O,{lat:5.6984895,lon:-74.03693240000001,direccion:this.state.viaje.direccion}),o.a.createElement("a",{href:"https://wa.me/"+this.state.viaje.numero.split("whatsapp:+")[1]},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"circuloverde"},o.a.createElement("img",{className:"iconoWhatsapp",src:A.a,alt:"user icon"})),o.a.createElement("h4",{className:"textoBoton"},"Enviar mensaje a Whatsapp"))),"confirmado"===this.state.viaje.estado&&o.a.createElement("button",{className:"botonAmarillo margen",onClick:function(){return e.handleLlegue(e.state.viaje)}},"Ya llegu\xe9"),"esperando"===this.state.viaje.estado&&o.a.createElement("button",{className:"botonAmarillo margen",onClick:function(){return e.handleRecoger(e.state.viaje)}},"Ya recog\xed al usuario"),"en curso"===this.state.viaje.estado&&o.a.createElement("button",{className:"botonAmarillo margen",onClick:function(){return e.handleTerminar(e.state.viaje)}},"Terminar Recorrido"),o.a.createElement("button",{className:"botonGris margen",onClick:function(){return e.handleCancelar(e.state.viaje)}},"Cancelar Viaje"))}}]),t}(n.Component),I=a(32),x=a.n(I),G=(a(70),function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(y.a)(this,Object(j.a)(t).call(this,e))).handleCerrarSesion=function(){a.props.history.push({pathname:"/"})},a.goBack=function(){a.props.history.push({pathname:"/viajes",conductor:a.props.location.conductor,token:a.props.location.token})},a.state={},a}return Object(N.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"navBar container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("img",{onClick:this.goBack,className:"flechaAtras",src:x.a,alt:"back icon"}),o.a.createElement("h1",{className:"tituloMiPerfil"},"Mi Perfil"))),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"titulo2"},o.a.createElement("h1",null,this.props.location.conductor.usuario),o.a.createElement("h2",null,"Conductor Registrado")),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement("h3",null,"Numero de Whatsapp"),o.a.createElement("label",null,"3132803320")),o.a.createElement("div",null,o.a.createElement("h3",null,"Cedula"),o.a.createElement("label",null,this.props.location.conductor.cedula)),o.a.createElement("div",null,o.a.createElement("h3",null,"Modelo del Vehiculo"),o.a.createElement("label",null,this.props.location.conductor.modelo)),o.a.createElement("div",null,o.a.createElement("h3",null,"Placa"),o.a.createElement("label",null,this.props.location.conductor.placa)),o.a.createElement("button",{className:"botonAmarillo margen",onClick:this.handleCerrarSesion},"Cerrar Sesi\xf3n")))}}]),t}(n.Component)),R=(a(71),a(33)),U=a(5);var W=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(R.a,null,o.a.createElement(U.c,null,o.a.createElement(U.a,{exact:!0,path:"/",component:function(e){return o.a.createElement(s,{history:e.history,location:e.location})}}),o.a.createElement(U.a,{path:"/iniciarsesion",component:function(e){return o.a.createElement(u,{history:e.history,location:e.location})}}),o.a.createElement(U.a,{path:"/crearcuenta",component:function(e){return o.a.createElement(m,{history:e.history,location:e.location})}}),o.a.createElement(U.a,{path:"/viajes",component:function(e){return o.a.createElement(v,{history:e.history,location:e.location})}}),o.a.createElement(U.a,{path:"/servicio",component:function(e){return o.a.createElement(J,{history:e.history,location:e.location})}}),o.a.createElement(U.a,{path:"/miPerfil",component:function(e){return o.a.createElement(G,{history:e.history,location:e.location})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.f6eb478a.chunk.js.map