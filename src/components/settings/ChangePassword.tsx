import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { validatePassword } from '../../utils/validation';

export function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validatePassword(newPassword);
    
    if (!validation.isValid) {
      setError(validation.errors[0]);
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    // Handle password change logic here
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="password"
        label="Current Password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        required
      />
      <Input
        type="password"
        label="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <Input
        type="password"
        label="Confirm New Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit">Change Password</Button>
    </form>
  );
}