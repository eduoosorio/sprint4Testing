-- Add default role to user_profiles table
ALTER TABLE user_profiles 
ADD COLUMN IF NOT EXISTS role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'admin'));

-- Update existing profiles without role
UPDATE user_profiles 
SET role = 'user' 
WHERE role IS NULL;
