SELECT usuario.nome,
	   usuario.email
FROM usuario
INNER JOIN pedido ON usuario.id = pedido.id_usuario