<?php

	require "models/src.php";

?>
<!--=====================================
ERROR 404
======================================-->

<div class="container">

    <div class="row">

        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto my-5">

			<div class="card card-signin my-5">

				<div class="card-body">

					<div class="error-template">

						<h1 class="text-center">Oops!</h1>

						<h2 class="text-center">404 Not Found</h2>

						<div class="error-details my-5 text-center">Sorry, an error has occured, Requested page not found!</div>

						<div class="error-actions text-center">

							<a href="<?php echo $src ?>" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>Take Me Home </a>
						
						</div>

					</div>

				</div>

			</div>

		</div>
		
	</div>
	
</div>