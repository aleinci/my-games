<?php
	if (!file_exists("models/functions.php")) {
		require "route.php";
	}

	//Route::ctrRoute() = /games.coachteen.academy/;

	// $src = "http://localhost" . Route::ctrRoute();
	$src = "http://192.168.0.106" . Route::ctrRoute();