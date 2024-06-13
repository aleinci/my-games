<?php 

	include 'models/functions.php';
	
?>

<div class="container">

	<div class="row">

		<div class="col-sm-9 col-md-7 col-lg-5 mx-auto">

			<div class="card card-signin my-5">

				<div class="card-body">

					<h1 class="card-title text-center font-weight-bolder text-secondary">Alejandro Games</h1>
					<h5 class="card-title text-center font-weight-bolder text-secondary">Sign In</h5>

					<form class="form-signin" action="./controllers/check_login.php" method="POST">

						<div class="form-label-group">
							<input type="text" id="user" name="user" autocomplete="false" class="form-control" placeholder="Username" required>
							<label for="user">Username</label>
						</div>

						<div class="form-label-group">
							<input type="password" id="pass" name="pass" autocomplete="false" class="form-control" placeholder="Password" required>
							<label for="pass">Password</label>
						</div>

						<br>

						<button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>

						<hr class="my-4">
						
						<a href="register" class="btn btn-lg btn-info btn-block text-uppercase"> Sing up</a>

					</form>

				</div>

			</div>

		</div>

	</div>

</div>

