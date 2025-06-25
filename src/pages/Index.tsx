
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Shield, Smartphone, Bell, QrCode, Heart, Sparkles, Zap, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-retro-pink/10 via-white to-retro-blue/10 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-retro-yellow/20 rounded-blob animate-float" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-retro-purple/20 rounded-organic animate-float" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-retro-green/15 rounded-blob animate-float" style={{animationDelay: '2s'}} />
      
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b-4 border-retro-red sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-retro-red to-retro-pink rounded-organic flex items-center justify-center animate-pulse-glow">
                <Heart className="w-8 h-8 text-white animate-float" />
              </div>
              <div>
                <h1 className="text-3xl font-serif font-bold text-gray-900 bg-gradient-to-r from-retro-red to-retro-purple bg-clip-text text-transparent">
                  Digitale Huisdierenpas
                </h1>
                <p className="text-lg text-gray-600 font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-retro-yellow" />
                  Veilig • Overzichtelijk • Toegankelijk
                  <Zap className="w-4 h-4 text-retro-blue" />
                </p>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <Link to="/dashboard">
                <Button className="bg-gradient-to-r from-retro-blue to-retro-green hover:from-retro-green hover:to-retro-blue text-white font-bold text-lg px-6 py-3 rounded-blob transform hover:scale-105 transition-all duration-300 shadow-xl border-2 border-white/20">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <Link to="/login">
                <Button className="bg-gradient-to-r from-retro-purple via-retro-blue to-retro-green hover:from-retro-green hover:via-retro-blue hover:to-retro-purple text-white font-bold text-lg px-6 py-3 rounded-blob transform hover:scale-105 transition-all duration-300 shadow-xl border-2 border-white/20">
                  <User className="w-5 h-5 mr-2" />
                  Inloggen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 md:py-20 w-full">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left side - Text content */}
            <div>
              <h2 className="text-5xl md:text-7xl font-serif font-black text-gray-900 mb-8 leading-tight">
                Alle{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-retro-red via-retro-pink to-retro-purple animate-pulse">
                  huisdiergegevens
                </span>
                <br />
                op één plek
              </h2>
              <p className="text-2xl text-gray-700 mb-12 leading-relaxed font-medium">
                Bewaar, beheer en deel belangrijke informatie over je huisdier{" "}
                <span className="font-bold text-retro-purple">veilig</span> en{" "}
                <span className="font-bold text-retro-blue">eenvoudig</span>.
                Van vaccinaties tot noodcontacten - alles binnen handbereik.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/dashboard">
                  <Button className="bg-gradient-to-r from-retro-red to-retro-pink hover:from-retro-pink hover:to-retro-red text-white font-bold text-xl px-10 py-6 rounded-blob transform hover:scale-105 transition-all duration-300 shadow-2xl border-4 border-white/30 w-full sm:w-auto">
                    <ArrowRight className="w-6 h-6 mr-3" />
                    Start Dashboard
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" className="border-4 border-retro-purple text-retro-purple hover:bg-retro-purple hover:text-white font-bold text-xl px-10 py-6 rounded-organic transform hover:scale-105 transition-all duration-300 shadow-xl w-full sm:w-auto">
                    <User className="w-6 h-6 mr-3" />
                    Inloggen
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right side - Dog image */}
            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
                <img 
                  src="/images/hond.png" 
                  alt="Schattige hond" 
                  className="w-full max-w-lg mx-auto rounded-blob shadow-3xl border-8 border-white/50 backdrop-blur-sm"
                />
              </div>
              {/* Decorative elements around the image */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-retro-yellow/30 rounded-organic animate-float" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-retro-pink/20 rounded-blob animate-float" style={{animationDelay: '1.5s'}} />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-retro-yellow/10 rounded-blob overflow-hidden group">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-retro-blue to-retro-green rounded-organic flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                  <Camera className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-serif font-bold text-retro-purple">Compleet Profiel</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  Foto, naam, ras, chipnummer en alle basisgegevens opgeslagen
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-retro-green/10 rounded-organic overflow-hidden group">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-retro-red to-retro-pink rounded-blob flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-serif font-bold text-retro-red">Medisch Dossier</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  Vaccinaties, allergieën en behandelingen digitaal bijhouden
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-retro-purple/10 rounded-blob overflow-hidden group">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-retro-purple to-retro-blue rounded-organic flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                  <QrCode className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-serif font-bold text-retro-blue">QR-code Delen</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  Snelle toegang tot noodgegevens voor dierenartsen en oppassers
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-retro-purple/20 to-retro-blue/20 border-t-4 border-retro-yellow py-16 px-4 mt-20 relative">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-retro-red to-retro-pink rounded-organic flex items-center justify-center animate-pulse">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-2xl font-serif font-bold text-gray-900">Digitale Huisdierenpas</h4>
          </div>
          <p className="text-xl text-gray-700 mb-8 font-medium">
            Veilig, overzichtelijk en toegankelijk voor alle huisdiereigenaren
          </p>
          <div className="flex items-center justify-center space-x-12 text-lg text-gray-600">
            <span className="flex items-center gap-2 font-medium">
              <Shield className="w-6 h-6 text-retro-green" />
              Veilig opgeslagen
            </span>
            <span className="flex items-center gap-2 font-medium">
              <Smartphone className="w-6 h-6 text-retro-blue" />
              Mobielvriendelijk
            </span>
            <span className="flex items-center gap-2 font-medium">
              <Bell className="w-6 h-6 text-retro-yellow" />
              Slimme herinneringen
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
