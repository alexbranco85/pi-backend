SELECT *
	FROM usuario
    INNER JOIN pedido ON usuario.id = pedido.id_usuario
    