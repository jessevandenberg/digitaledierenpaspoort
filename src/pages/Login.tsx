
import { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuleer login proces - in een echte app zou je hier authenticatie doen
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-50 to-yellow-50 relative overflow-hidden flex items-center justify-center">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/30 rounded-blob animate-float" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-200/30 rounded-organic animate-float" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-orange-300/20 rounded-blob animate-float" style={{animationDelay: '2s'}} />
      
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b-2 border-orange-400 fixed top-0 left-0 right-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-serif font-bold text-gray-900">
                Digitale Huisdierenpas
              </h1>
            </Link>
            
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-full">
              Profiel Aanmaken
            </Button>
          </div>
        </div>
      </header>

      {/* Login Form */}
      <div className="w-full max-w-md px-4 mt-16">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
            Digitale Huisdierenpas
          </h2>
          <p className="text-gray-600">
            Log in om toegang te krijgen tot je account
          </p>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0 rounded-2xl">
          <CardHeader className="pb-6">
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  E-mailadres
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jouw@email.nl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-lg border-gray-200 focus:border-orange-400 focus:ring-orange-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Wachtwoord
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="........"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-lg border-gray-200 focus:border-orange-400 focus:ring-orange-400"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <LogIn className="w-5 h-5" />
                Inloggen
              </Button>

              <div className="text-center space-y-4">
                <Link to="#" className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                  Wachtwoord vergeten?
                </Link>
                
                <p className="text-sm text-gray-600">
                  Nog geen account?{" "}
                  <Link to="#" className="text-orange-500 hover:text-orange-600 font-medium">
                    Registreer hier
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-orange-100 to-yellow-100 border-t border-orange-200 py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <h4 className="text-lg font-serif font-bold text-gray-900">Digitale Huisdierenpas</h4>
          </div>
          <p className="text-gray-600 text-sm">
            Veilig, overzichtelijk en toegankelijk voor alle huisdiereigenaren
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Login;
