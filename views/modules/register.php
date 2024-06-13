<?php 

	include 'models/functions.php';
	require "models/src.php";
	
?>

<div class="container">

	<div class="row">

		<div class="col-sm-9 col-md-7 col-lg-5 mx-auto">

			<div id="app" class="card card-signin my-5">

				<div class="card-body">

					<h1 class="card-title text-center font-weight-bolder text-secondary">Alejandro Games</h1>
					
					<h5 class="card-title text-center font-weight-bolder text-secondary">Sign Up</h5>

					<form class="form-signin" action="./controllers/insert_register.php" method="POST">

						<div class="form-label-group">
							<input :class="[colorUser]" type="text" id="user" name="user" v-model="user" autocomplete="false" class="form-control" placeholder="Username" required>
							<label for="user">Username</label>
						</div>

						<hr class="my-4">

						<div class="form-label-group">
							<input :class="[colorPass]" type="password" id="pass" name="pass" v-model="pass" autocomplete="false" class="form-control" placeholder="Password" required>
							<label for="pass">Password</label>
						</div>

						<div class="form-label-group">
							<input :class="[colorPassC]" type="password" id="passR" name="passR" v-model="passR" autocomplete="false" class="form-control" placeholder="Password" required>
							<label for="passR">Confirm Password</label>
						</div>

						<br>

						<button class="btn btn-lg btn-primary btn-block text-uppercase" @click="confirm" type="submit">Sign up</button>
						
						<hr class="my-4">

						<a href="<?php echo $src ?>" class="btn btn-lg btn-info btn-block text-uppercase"> Sing in</a>

					</form>

				</div>

			</div>

		</div>

	</div>

</div>

<script type="text/javascript" src="<?php echo $url; ?>views/js/vue.js"></script>	
<script type="text/javascript" src="<?php echo $url; ?>views/js/check_pass.js"></script>
