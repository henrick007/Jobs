<?php

$nome = addslashes($_POST['nome']);
$idade = addslashes($_POST['idade']);
$endereco = addslashes($_POST['endereco']);
$bairro = addslashes($_POST['bairro']);
$estado = addslashes($_POST['estado']);
$biografia = addslashes($_POST['biografia']);

if (isset($_POST['atualizar'])) {
    $nome = $_POST["nome"];
    $idade = $_POST["idade"];
    $endereco = $_POST["endereco"];
    $bairro = $_POST["bairro"];
    $estado = $_POST["estado"];
    $biografia = $_POST["biografia"];
};

$host = "localhost";
$banco = "jobs";
$user = "root";
$senha_user = "1234";

$con = mysqli_connect($host, $user, $senha_user, $banco);

if (!$con) {
    die("Conexão falhou." . mysqli_connect_error());
}

$sql = "INSERT INTO usuários (nome, idade, endereco, bairro, estado, biografia) VALUES('$nome', '$idade', '$endereco', '$bairro', '$estado', '$biografia')";

$rs = mysqli_query($con, $sql);

if ($rs) {
    echo "Dados Atualizados com Sucesso!!";
}
