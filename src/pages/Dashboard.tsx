
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { PetProfile } from "@/components/PetProfile";
import { MedicalRecord } from "@/components/MedicalRecord";
import { QRCodeGenerator } from "@/components/QRCodeGenerator";
import { NotificationReminders } from "@/components/NotificationReminders";
import { Camera, Shield, QrCode, Bell, Heart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

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
              <Link to="/" className="flex items-center gap-2 text-retro-purple hover:text-retro-red transition-colors">
                <ArrowLeft className="w-6 h-6" />
                <span className="font-serif font-bold">Terug</span>
              </Link>
              <div className="w-16 h-16 bg-gradient-to-br from-retro-red to-retro-pink rounded-organic flex items-center justify-center animate-pulse-glow">
                <Heart className="w-8 h-8 text-white animate-float" />
              </div>
              <div>
                <h1 className="text-3xl font-serif font-bold text-gray-900 bg-gradient-to-r from-retro-red to-retro-purple bg-clip-text text-transparent">
                  Uw Huisdierenpas Dashboard
                </h1>
                <p className="text-lg text-gray-600 font-medium">
                  Beheer alle informatie van uw huisdier op één centrale plek
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-white/80 backdrop-blur-md border-4 border-retro-yellow p-2 rounded-blob shadow-2xl h-20">
              <TabsTrigger 
                value="profile" 
                className="flex items-center gap-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-retro-red data-[state=active]:to-retro-pink data-[state=active]:text-white font-bold text-lg rounded-organic transition-all duration-300 hover:scale-105"
              >
                <Camera className="w-6 h-6" />
                <span className="hidden sm:inline font-serif">Profiel</span>
              </TabsTrigger>
              <TabsTrigger 
                value="medical"
                className="flex items-center gap-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-retro-green data-[state=active]:to-retro-blue data-[state=active]:text-white font-bold text-lg rounded-blob transition-all duration-300 hover:scale-105"
              >
                <Shield className="w-6 h-6" />
                <span className="hidden sm:inline font-serif">Medisch</span>
              </TabsTrigger>
              <TabsTrigger 
                value="qr"
                className="flex items-center gap-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-retro-purple data-[state=active]:to-retro-pink data-[state=active]:text-white font-bold text-lg rounded-organic transition-all duration-300 hover:scale-105"
              >
                <QrCode className="w-6 h-6" />
                <span className="hidden sm:inline font-serif">QR-code</span>
              </TabsTrigger>
              <TabsTrigger 
                value="reminders"
                className="flex items-center gap-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-retro-yellow data-[state=active]:to-retro-green data-[state=active]:text-white font-bold text-lg rounded-blob transition-all duration-300 hover:scale-105"
              >
                <Bell className="w-6 h-6" />
                <span className="hidden sm:inline font-serif">Herinneringen</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-8 animate-fade-in">
              <PetProfile />
            </TabsContent>

            <TabsContent value="medical" className="space-y-8 animate-fade-in">
              <MedicalRecord />
            </TabsContent>

            <TabsContent value="qr" className="space-y-8 animate-fade-in">
              <QRCodeGenerator />
            </TabsContent>

            <TabsContent value="reminders" className="space-y-8 animate-fade-in">
              <NotificationReminders />
            </TabsContent>
          </Tabs>
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
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
