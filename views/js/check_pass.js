const app = new Vue({

	el:"#app",

	data:{

		colorPassC:'',
		colorPass:'',
		colorUser:'',

		user:'',
		pass:'',
		passR:''

	},

	methods:{

		confirm(e) {

			if (this.pass == this.passR) {

				this.colorPass='bg-successp';
				this.colorPassC='bg-successp';

			} else {

				this.colorPassC='bg-dangerp';
				e.preventDefault();
				
			}

			if (this.user == "") {

				this.colorUser='bg-dangerp';
				e.preventDefault();

			} else {

				this.colorUser='bg-successp';

			}

			if (this.pass == '') {

				this.colorPass='bg-dangerp';
				this.colorPassC='bg-dangerp';
				e.preventDefault();

			} else {

				this.colorPass='bg-successp';

			}

		}

	}

})



	


