import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Camera, Dog, Calendar, FileText, Edit, Save, X } from "lucide-react";

export const PetProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Bella",
    breed: "Golden Retriever",
    birthDate: "2020-03-15",
    chipNumber: "528210001234567",
    weight: "28.5",
    color: "Goudblond",
    gender: "Vrouwelijk",
    notes: "Zeer vriendelijk en energiek. Houdt van zwemmen en wandelen in het park.",
    photo: "/profile-images/profielfoto.jpg"
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to a database
    console.log('Profile saved:', profile);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset changes if needed
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Dog className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl">Huisdierprofiel</CardTitle>
                <CardDescription>Alle basisgegevens van uw huisdier</CardDescription>
              </div>
            </div>
            <Button
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className={isEditing ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"}
            >
              {isEditing ? (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Opslaan
                </>
              ) : (
                <>
                  <Edit className="w-4 h-4 mr-2" />
                  Bewerken
                </>
              )}
            </Button>
          </div>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Photo Section */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="w-5 h-5" />
              Foto
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="relative inline-block">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-48 h-48 object-cover rounded-lg border-4 border-gray-100 shadow-md"
              />
              {isEditing && (
                <Button
                  size="sm"
                  className="absolute -bottom-2 -right-2 rounded-full w-10 h-10 p-0 bg-blue-500 hover:bg-blue-600"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              {isEditing ? "Klik op het camera-icoon om een nieuwe foto te uploaden" : "Profielfoto van " + profile.name}
            </p>
          </CardContent>
        </Card>

        {/* Basic Information */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Basisgegevens
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Naam</Label>
                  {isEditing ? (
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile({...profile, name: e.target.value})}
                    />
                  ) : (
                    <div className="p-2 bg-gray-50 rounded-md font-medium">{profile.name}</div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="breed">Ras</Label>
                  {isEditing ? (
                    <Input
                      id="breed"
                      value={profile.breed}
                      onChange={(e) => setProfile({...profile, breed: e.target.value})}
                    />
                  ) : (
                    <div className="p-2 bg-gray-50 rounded-md">{profile.breed}</div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthDate">Geboortedatum</Label>
                  {isEditing ? (
                    <Input
                      id="birthDate"
                      type="date"
                      value={profile.birthDate}
                      onChange={(e) => setProfile({...profile, birthDate: e.target.value})}
                    />
                  ) : (
                    <div className="p-2 bg-gray-50 rounded-md flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      {new Date(profile.birthDate).toLocaleDateString('nl-NL')}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Geslacht</Label>
                  {isEditing ? (
                    <Select value={profile.gender} onValueChange={(value) => setProfile({...profile, gender: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Mannelijk">Mannelijk</SelectItem>
                        <SelectItem value="Vrouwelijk">Vrouwelijk</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <div className="p-2 bg-gray-50 rounded-md">{profile.gender}</div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight">Gewicht (kg)</Label>
                  {isEditing ? (
                    <Input
                      id="weight"
                      value={profile.weight}
                      onChange={(e) => setProfile({...profile, weight: e.target.value})}
                    />
                  ) : (
                    <div className="p-2 bg-gray-50 rounded-md">{profile.weight} kg</div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="color">Kleur</Label>
                  {isEditing ? (
                    <Input
                      id="color"
                      value={profile.color}
                      onChange={(e) => setProfile({...profile, color: e.target.value})}
                    />
                  ) : (
                    <div className="p-2 bg-gray-50 rounded-md">{profile.color}</div>
                  )}
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="chipNumber">Chipnummer</Label>
                {isEditing ? (
                  <Input
                    id="chipNumber"
                    value={profile.chipNumber}
                    onChange={(e) => setProfile({...profile, chipNumber: e.target.value})}
                    placeholder="15-cijferig chipnummer"
                  />
                ) : (
                  <div className="p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-md border border-blue-200">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-lg font-medium">{profile.chipNumber}</span>
                      <Badge className="bg-blue-100 text-blue-700">Geregistreerd</Badge>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Opmerkingen</Label>
                {isEditing ? (
                  <Textarea
                    id="notes"
                    value={profile.notes}
                    onChange={(e) => setProfile({...profile, notes: e.target.value})}
                    placeholder="Aanvullende informatie over uw huisdier..."
                    rows={3}
                  />
                ) : (
                  <div className="p-3 bg-gray-50 rounded-md whitespace-pre-wrap">{profile.notes}</div>
                )}
              </div>
            </CardContent>
          </Card>

          {isEditing && (
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={handleCancel}>
                <X className="w-4 h-4 mr-2" />
                Annuleren
              </Button>
              <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600">
                <Save className="w-4 h-4 mr-2" />
                Wijzigingen Opslaan
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
