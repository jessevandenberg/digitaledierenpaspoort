
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PetProfile } from "@/components/PetProfile";
import { MedicalRecord } from "@/components/MedicalRecord";
import { QRCodeGenerator } from "@/components/QRCodeGenerator";
import { NotificationReminders } from "@/components/NotificationReminders";
import { Camera, Shield, Smartphone, Bell, QrCode, Heart } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Digitale Huisdierenpas</h1>
                <p className="text-sm text-gray-600">Veilig • Overzichtelijk • Toegankelijk</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
              Profiel Aanmaken
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              Nieuw: QR-code functionaliteit beschikbaar
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Alle <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">huisdiergegevens</span> op één plek
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Bewaar, beheer en deel belangrijke informatie over je huisdier veilig en eenvoudig. 
              Van vaccinaties tot noodcontacten - alles binnen handbereik.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Compleet Profiel</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Foto, naam, ras, chipnummer en alle basisgegevens overzichtelijk opgeslagen
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Medisch Dossier</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Vaccinaties, allergieën en behandelingen digitaal bijhouden
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <QrCode className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">QR-code Delen</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Snelle toegang tot noodgegevens voor dierenartsen en oppassers
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Application */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Uw Huisdierenpas Dashboard</h3>
            <p className="text-gray-600">Beheer alle informatie van uw huisdier op één centrale plek</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-white border border-gray-200 p-1 rounded-lg shadow-sm">
              <TabsTrigger 
                value="profile" 
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-green-500 data-[state=active]:text-white"
              >
                <Camera className="w-4 h-4" />
                <span className="hidden sm:inline">Profiel</span>
              </TabsTrigger>
              <TabsTrigger 
                value="medical"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-green-500 data-[state=active]:text-white"
              >
                <Shield className="w-4 h-4" />
                <span className="hidden sm:inline">Medisch</span>
              </TabsTrigger>
              <TabsTrigger 
                value="qr"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-green-500 data-[state=active]:text-white"
              >
                <QrCode className="w-4 h-4" />
                <span className="hidden sm:inline">QR-code</span>
              </TabsTrigger>
              <TabsTrigger 
                value="reminders"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-green-500 data-[state=active]:text-white"
              >
                <Bell className="w-4 h-4" />
                <span className="hidden sm:inline">Herinneringen</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <PetProfile />
            </TabsContent>

            <TabsContent value="medical" className="space-y-6">
              <MedicalRecord />
            </TabsContent>

            <TabsContent value="qr" className="space-y-6">
              <QRCodeGenerator />
            </TabsContent>

            <TabsContent value="reminders" className="space-y-6">
              <NotificationReminders />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4 mt-16">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900">Digitale Huisdierenpas</h4>
          </div>
          <p className="text-gray-600 mb-4">
            Veilig, overzichtelijk en toegankelijk voor alle huisdiereigenaren
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              Veilig opgeslagen
            </span>
            <span className="flex items-center gap-1">
              <Smartphone className="w-4 h-4" />
              Mobielvriendelijk
            </span>
            <span className="flex items-center gap-1">
              <Bell className="w-4 h-4" />
              Slimme herinneringen
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
