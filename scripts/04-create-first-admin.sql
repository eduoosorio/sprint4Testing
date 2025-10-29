-- IMPORTANTE: Substitua 'SEU_EMAIL_AQUI@example.com' pelo email que você vai usar para criar sua conta admin
-- Primeiro, crie sua conta normalmente pelo site (signup)
-- Depois, execute este script para tornar sua conta admin

-- Atualizar o perfil do usuário para admin baseado no email
UPDATE user_profiles 
SET role = 'admin' 
WHERE id = (
  SELECT id FROM auth.users 
  WHERE email = 'SEU_EMAIL_AQUI@example.com'
);

-- Verificar se funcionou
SELECT 
  u.email,
  p.full_name,
  p.role,
  p.created_at
FROM auth.users u
JOIN user_profiles p ON u.id = p.id
WHERE p.role = 'admin';
