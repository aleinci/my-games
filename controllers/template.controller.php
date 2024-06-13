<?php

	class TemplateController{

		/*=============================================
		WE CALL THE TEMPLATE
		=============================================*/

		public function template(){
			//if the class doesn´t exists then it loads 
			//the document that holds the class in local path mode.
			include "views/template.php";
		}

	}
	
