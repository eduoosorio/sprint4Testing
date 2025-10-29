-- Remove completamente a tabela user_profiles e recria do zero
-- Isso resolve o problema de recursão infinita nas políticas RLS

-- 1. Remover todas as políticas existentes
DROP POLICY IF EXISTS "Users can view own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON user_profiles;
DROP POLICY IF EXISTS "Enable read access for users" ON user_profiles;
DROP POLICY IF EXISTS "Enable insert for users" ON user_profiles;
DROP POLICY IF EXISTS "Enable update for users" ON user_profiles;

-- 2. Remover a tabela se existir
DROP TABLE IF EXISTS user_profiles CASCADE;

-- 3. Recriar a tabela do zero
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  phone TEXT,
  address TEXT,
  city TEXT,
  state TEXT,
  zip_code TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Habilitar RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- 5. Criar políticas RLS SIMPLES (sem recursão)
-- Política para SELECT (visualizar)
CREATE POLICY "Users can view own profile"
ON user_profiles
FOR SELECT
USING (auth.uid() = id);

-- Política para INSERT (criar)
CREATE POLICY "Users can insert own profile"
ON user_profiles
FOR INSERT
WITH CHECK (auth.uid() = id);

-- Política para UPDATE (atualizar)
CREATE POLICY "Users can update own profile"
ON user_profiles
FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- 6. Criar índice para melhor performance
CREATE INDEX IF NOT EXISTS idx_user_profiles_id ON user_profiles(id);

-- 7. Comentários para documentação
COMMENT ON TABLE user_profiles IS 'Perfis de usuários com informações adicionais';
COMMENT ON COLUMN user_profiles.role IS 'Papel do usuário: user ou admin';
