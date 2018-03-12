import Vue from 'vue'
import App from "./app.vue"

// import './style.css';


new Vue({
	el:"#app",
//	template:'<App/>'
    render: h=>h(App)

})

//document.getElementById("app").innerHTML="hello vue"
