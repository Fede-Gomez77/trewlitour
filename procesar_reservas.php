<?php


// Verificamos si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST")
{    
	// Conexión a la base de datos
    $servername = "localhost";
    $username = "";
    $password = "";
    $dbname = "trewlitours";
	
	$conn = new mysqli($servername, $username, $password, $dbname);
    // Verificar la conexión
    if ($conn->connect_error)
	{
        die("La conexión a la base de datos ha fallado: " . $conn->connect_error);
		exit();
    }

    // Recibimos los datos del formulario
    $nombre = $_POST['firstname'];
    $apellido = $_POST['lastname'];
    $email = $_POST['email'];
    $direccion = $_POST['address'];
    $ciudad = $_POST['city'];
    $codigo_postal = $_POST['zipcode'];
    $telefono = $_POST['phone'];
    $tipo_contacto = isset($_POST['empresa']) ? $_POST['empresa'] : (isset($_POST['particular']) ? $_POST['particular'] : $_POST['otro']);
    $motivo_contacto = implode(", ", $_POST['motivo']);
    $mensaje = $_POST['message'];

    // Insertar datos en la base de datos
    $sql = "INSERT INTO tu_tabla_reservas (nombre, apellido, email, direccion, ciudad, codigo_postal, telefono, tipo_contacto, motivo_contacto, mensaje) 
	VALUES ('$nombre', '$apellido', '$email', '$direccion', '$ciudad', '$codigo_postal', '$telefono', '$tipo_contacto', '$motivo_contacto', '$mensaje')";

	$correcto = "";
	
    if ($conn->query($sql) === TRUE)
	{
		$last_id = $conn->insert_id;
        echo "Datos de reserva ingresados correctamente.";
		$correcto = "ok";		
    } 
	else
	{
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    // Cerrar la conexión
    $conn->close();
	
	if ($correcto == "ok")
	{
		echo "<script>onclick=window.location.href='gracias.php';</script>";
		exit();
	}	
	else
	{
		die();
		exit();
	}
} 
else 
{
    // Si alguien intenta acceder directamente a este script, redirigirlo a la página de inicio
    header("Location: index.html");
    exit();
}
?>
