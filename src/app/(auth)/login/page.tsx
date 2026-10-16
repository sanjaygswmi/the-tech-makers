'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import { getClientToken } from '../../(admin)/admin/components/utils/client-utils';
import {
  Box,
  Card,
  Typography,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
  CircularProgress,
} from '@mui/material';

import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';

export default function LoginPage() {
  const router = useRouter();
  const token = getClientToken();

  if (token) {
    router.push('/admin/dashboard');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.status === 1) {
        // HttpOnly cookie already stored by backend
        router.push('/admin/dashboard');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh"
      bgcolor="#f4f6f8"
    >
      <Card sx={{ p: 4, width: 400, boxShadow: 3, borderRadius: 2 }}>
        {/* Logo */}
        <Box display="flex" justifyContent="center" mb={2}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={60}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Box>

        <Typography variant="h5" align="center" gutterBottom>
          Admin Login
        </Typography>
        
        <form onSubmit={handleLogin}>
          {/* Email */}
          <FormControl fullWidth variant="standard" margin="normal">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
              required
            />
          </FormControl>

          {/* Password */}
          <FormControl fullWidth variant="standard" margin="normal">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              required
            />
          </FormControl>

          {/* Login Button with Loader */}
          <Button 
            fullWidth 
            type="submit" 
            variant="contained" 
            color="primary"
            sx={{ mt: 3 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
          </Button>
        </form>
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Link href="/reset-password" style={{ fontSize: 14, color: "#005b9c", textDecoration: "none" }}>
            Forgot password?
          </Link>
        </Box>
      </Card>
    </Box>
  );
}
