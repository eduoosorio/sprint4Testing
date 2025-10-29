-- Insert sample products for Sky Sneakers

-- Exclusivos (Exclusive/Limited Edition)
INSERT INTO products (name, description, price, category, brand, size_available, color, image_url, stock, featured) VALUES
('Nike Dunk Low "Panda"', 'Edição limitada do clássico Dunk Low em preto e branco. Design atemporal que combina com qualquer look streetwear.', 899.90, 'exclusivos', 'Nike', ARRAY['38', '39', '40', '41', '42', '43', '44'], 'Preto/Branco', '/nike-dunk-low-sneaker.jpg', 15, true),
('Air Jordan 1 Retro High "Chicago"', 'O lendário Air Jordan 1 na colorway icônica Chicago. Peça de colecionador e símbolo da cultura sneaker.', 1499.90, 'exclusivos', 'Nike', ARRAY['39', '40', '41', '42', '43'], 'Vermelho/Branco/Preto', '/premium-air-jordan-sneaker.jpg', 8, true),
('Yeezy Boost 350 V2 "Zebra"', 'Design futurista de Kanye West com Adidas. Conforto incomparável e estilo único que define tendências.', 1299.90, 'exclusivos', 'Adidas', ARRAY['38', '39', '40', '41', '42', '43', '44'], 'Branco/Preto', '/placeholder.svg?height=400&width=400', 12, true);

-- Originais (Authentic Brand New)
INSERT INTO products (name, description, price, category, brand, size_available, color, image_url, stock, featured) VALUES
('Nike Air Max 90', 'Clássico atemporal com tecnologia Air Max visível. Conforto e estilo para o dia a dia.', 699.90, 'originais', 'Nike', ARRAY['38', '39', '40', '41', '42', '43', '44', '45'], 'Branco/Cinza', '/placeholder.svg?height=400&width=400', 25, false),
('Adidas Superstar', 'O icônico tênis com as três listras. Estilo clássico que nunca sai de moda.', 549.90, 'originais', 'Adidas', ARRAY['37', '38', '39', '40', '41', '42', '43', '44'], 'Branco/Preto', '/placeholder.svg?height=400&width=400', 30, false),
('Vans Old Skool', 'O clássico skate shoe que virou ícone streetwear. Durabilidade e estilo garantidos.', 399.90, 'originais', 'Vans', ARRAY['37', '38', '39', '40', '41', '42', '43', '44'], 'Preto/Branco', '/placeholder.svg?height=400&width=400', 40, false),
('Converse Chuck Taylor All Star', 'O tênis mais icônico de todos os tempos. Versatilidade e estilo atemporal.', 329.90, 'originais', 'Converse', ARRAY['36', '37', '38', '39', '40', '41', '42', '43', '44'], 'Preto', '/placeholder.svg?height=400&width=400', 35, false);

-- Réplicas Premium (High-Quality Replicas)
INSERT INTO products (name, description, price, category, brand, size_available, color, image_url, stock, featured) VALUES
('Air Jordan 1 Premium Replica', 'Réplica premium do Air Jordan 1 com acabamento impecável. Qualidade superior e preço acessível.', 449.90, 'replicas', 'Nike Style', ARRAY['38', '39', '40', '41', '42', '43', '44'], 'Preto/Vermelho', '/placeholder.svg?height=400&width=400', 50, false),
('Yeezy 350 Premium Replica', 'Réplica de alta qualidade do Yeezy 350. Conforto e estilo sem comprometer o bolso.', 399.90, 'replicas', 'Adidas Style', ARRAY['38', '39', '40', '41', '42', '43', '44'], 'Cinza', '/placeholder.svg?height=400&width=400', 45, false),
('Dunk Low Premium Replica', 'Réplica premium do Nike Dunk Low. Acabamento de qualidade e design fiel ao original.', 349.90, 'replicas', 'Nike Style', ARRAY['37', '38', '39', '40', '41', '42', '43', '44'], 'Azul/Branco', '/placeholder.svg?height=400&width=400', 60, false),
('Air Force 1 Premium Replica', 'Réplica de alta qualidade do clássico Air Force 1. Estilo urbano com preço acessível.', 329.90, 'replicas', 'Nike Style', ARRAY['38', '39', '40', '41', '42', '43', '44'], 'Branco', '/placeholder.svg?height=400&width=400', 55, false);
