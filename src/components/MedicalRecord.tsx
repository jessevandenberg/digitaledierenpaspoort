
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Calendar, Bell, Plus, FileText, AlertTriangle } from "lucide-react";

export const MedicalRecord = () => {
  const [vaccinations, setVaccinations] = useState([
    {
      id: 1,
      name: "Hondenziekte (DHP)",
      date: "2024-01-15",
      nextDue: "2025-01-15",
      veterinarian: "Dierenkliniek Amsterdam",
      status: "Actueel"
    },
    {
      id: 2,
      name: "Rabiës",
      date: "2024-01-15",
      nextDue: "2027-01-15",
      veterinarian: "Dierenkliniek Amsterdam",
      status: "Actueel"
    },
    {
      id: 3,
      name: "Kennel Hoest",
      date: "2023-06-10",
      nextDue: "2024-06-10",
      veterinarian: "Dierenkliniek Zuid",
      status: "Verlopen"
    }
  ]);

  const [treatments, setTreatments] = useState([
    {
      id: 1,
      date: "2024-02-20",
      type: "Controle",
      description: "Jaarlijkse gezondheidscheck. Alles in orde.",
      veterinarian: "Dr. van der Berg",
      diagnosis: "Gezond"
    },
    {
      id: 2,
      date: "2024-01-05",
      type: "Behandeling",
      description: "Oorontsteking behandeld met medicatie",
      veterinarian: "Dr. Jansen",
      diagnosis: "Otitis externa"
    }
  ]);

  const [allergies] = useState([
    { id: 1, allergen: "Kip", severity: "Matig", symptoms: "Huidirritatie, jeuk" },
    { id: 2, allergen: "Granen", severity: "Licht", symptoms: "Spijsverteringsproblemen" }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Actueel':
        return 'bg-green-100 text-green-700';
      case 'Verlopen':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Hoog':
        return 'bg-red-100 text-red-700';
      case 'Matig':
        return 'bg-yellow-100 text-yellow-700';
      case 'Licht':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Medical Header */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl">Medisch Dossier</CardTitle>
                <CardDescription>Vaccinaties, behandelingen en allergieën van Bella</CardDescription>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-green-500 hover:bg-green-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Nieuwe Entry
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Nieuwe Medische Entry Toevoegen</DialogTitle>
                  <DialogDescription>
                    Voeg een nieuwe vaccinatie, behandeling of allergie toe aan het medisch dossier.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecteer type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vaccination">Vaccinatie</SelectItem>
                        <SelectItem value="treatment">Behandeling</SelectItem>
                        <SelectItem value="allergy">Allergie</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Datum</Label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Beschrijving</Label>
                    <Textarea placeholder="Beschrijf de vaccinatie, behandeling of allergie..." />
                  </div>
                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    Entry Toevoegen
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Vaccinations */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              Vaccinaties
            </CardTitle>
            <CardDescription>Overzicht van alle toegediende vaccinaties</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {vaccinations.map((vaccination) => (
              <div key={vaccination.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{vaccination.name}</h4>
                  <Badge className={getStatusColor(vaccination.status)}>
                    {vaccination.status}
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Toegediend: {new Date(vaccination.date).toLocaleDateString('nl-NL')}
                  </div>
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4" />
                    Volgende: {new Date(vaccination.nextDue).toLocaleDateString('nl-NL')}
                  </div>
                  <div className="text-xs text-gray-500">
                    {vaccination.veterinarian}
                  </div>
                </div>

                {vaccination.status === 'Verlopen' && (
                  <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-md">
                    <div className="flex items-center gap-2 text-red-700 text-sm">
                      <AlertTriangle className="w-4 h-4" />
                      Vaccinatie is verlopen - plan een afspraak
                    </div>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Allergies */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
              Allergieën
            </CardTitle>
            <CardDescription>Bekende allergieën en intoleranties</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {allergies.map((allergy) => (
              <div key={allergy.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{allergy.allergen}</h4>
                  <Badge className={getSeverityColor(allergy.severity)}>
                    {allergy.severity}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Symptomen:</strong> {allergy.symptoms}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Medical History */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            Behandelgeschiedenis
          </CardTitle>
          <CardDescription>Chronologisch overzicht van alle behandelingen</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {treatments.map((treatment, index) => (
              <div key={treatment.id}>
                <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{treatment.type}</h4>
                      <span className="text-sm text-gray-500">
                        {new Date(treatment.date).toLocaleDateString('nl-NL')}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-1">{treatment.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Dr. {treatment.veterinarian}</span>
                      <Badge variant="outline">{treatment.diagnosis}</Badge>
                    </div>
                  </div>
                </div>
                {index < treatments.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
