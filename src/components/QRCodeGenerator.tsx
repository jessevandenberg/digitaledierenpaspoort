
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { QrCode, Share2, Download, Eye, EyeOff, Shield, Phone, FileText } from "lucide-react";

export const QRCodeGenerator = () => {
  const [shareSettings, setShareSettings] = useState({
    basicInfo: true,
    medical: false,
    emergencyContact: true,
    fullProfile: false
  });

  const [emergencyContact, setEmergencyContact] = useState({
    name: "Jan Pietersen",
    phone: "+31 6 12345678",
    relation: "Eigenaar"
  });

  const [shareUrl] = useState("https://digitale-huisdierenpas.nl/share/bella-abc123");

  const generateQRCode = () => {
    // In a real application, this would generate an actual QR code
    console.log('QR Code generated with settings:', shareSettings);
  };

  const downloadQRCode = () => {
    // In a real application, this would download the QR code image
    console.log('Downloading QR code...');
  };

  return (
    <div className="space-y-6">
      {/* QR Header */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <QrCode className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">QR-code Generator</CardTitle>
              <CardDescription>Deel noodgegevens veilig en snel met anderen</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Privacy Settings */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              Privacy Instellingen
            </CardTitle>
            <CardDescription>
              Kies welke informatie u wilt delen via de QR-code
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base font-medium">Basisinformatie</Label>
                  <p className="text-sm text-gray-500">Naam, ras, geslacht, chipnummer</p>
                </div>
                <Switch
                  checked={shareSettings.basicInfo}
                  onCheckedChange={(checked) => 
                    setShareSettings({...shareSettings, basicInfo: checked})
                  }
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base font-medium">Noodcontact</Label>
                  <p className="text-sm text-gray-500">Contactgegevens eigenaar</p>
                </div>
                <Switch
                  checked={shareSettings.emergencyContact}
                  onCheckedChange={(checked) => 
                    setShareSettings({...shareSettings, emergencyContact: checked})
                  }
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base font-medium">Medische gegevens</Label>
                  <p className="text-sm text-gray-500">Allergieën, medicatie, aandoeningen</p>
                </div>
                <Switch
                  checked={shareSettings.medical}
                  onCheckedChange={(checked) => 
                    setShareSettings({...shareSettings, medical: checked})
                  }
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base font-medium">Volledig profiel</Label>
                  <p className="text-sm text-gray-500">Alle opgeslagen informatie</p>
                </div>
                <Switch
                  checked={shareSettings.fullProfile}
                  onCheckedChange={(checked) => 
                    setShareSettings({...shareSettings, fullProfile: checked})
                  }
                />
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Noodcontact
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-700">Naam:</span>
                  <span className="text-sm font-medium text-blue-900">{emergencyContact.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-700">Telefoon:</span>
                  <span className="text-sm font-medium text-blue-900">{emergencyContact.phone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-700">Relatie:</span>
                  <span className="text-sm font-medium text-blue-900">{emergencyContact.relation}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* QR Code Display */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <QrCode className="w-5 h-5 text-purple-600" />
              Gegenereerde QR-code
            </CardTitle>
            <CardDescription>
              Scan deze code voor toegang tot de gedeelde informatie
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            {/* QR Code Placeholder */}
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-100 to-blue-100 border-2 border-purple-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <QrCode className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <p className="text-sm text-purple-600">QR-code verschijnt hier</p>
                <p className="text-xs text-purple-500 mt-1">na het genereren</p>
              </div>
            </div>

            {/* Generation Button */}
            <Button 
              onClick={generateQRCode}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              <QrCode className="w-4 h-4 mr-2" />
              Genereer QR-code
            </Button>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" onClick={downloadQRCode}>
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Button variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Delen
              </Button>
            </div>

            {/* Share URL */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Deel-URL</Label>
              <div className="flex space-x-2">
                <Input 
                  value={shareUrl} 
                  readOnly 
                  className="font-mono text-sm"
                />
                <Button size="icon" variant="outline">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Privacy Notice */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-green-900 mb-2">Privacy & Beveiliging</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Gedeelde links zijn beveiligd en verlopen automatisch na 30 dagen</li>
                <li>• U kunt op elk moment de toegang intrekken</li>
                <li>• Alleen de door u geselecteerde informatie wordt gedeeld</li>
                <li>• Geen gevoelige gegevens worden zonder uw toestemming getoond</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
