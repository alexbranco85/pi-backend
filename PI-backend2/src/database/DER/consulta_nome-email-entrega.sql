SELECT usuario.nome,
	   usuario.email,
       pedido.id,
       pedido.status,
       pedido.entrega
FROM usuario
INNER JOIN pedido ON usuario.id = pedido.id_usuario