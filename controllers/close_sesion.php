<?php

    session_start();

    session_destroy();

    require "../models/src.php";

    header("location: ". $src);

?>