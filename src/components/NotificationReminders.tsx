
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Bell, Calendar, Clock, Plus, AlertTriangle, Check, X } from "lucide-react";

export const NotificationReminders = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "Vaccinatie",
      title: "Kennel Hoest vaccinatie",
      date: "2024-06-10",
      daysUntil: -45,
      priority: "Hoog",
      status: "Verlopen",
      enabled: true
    },
    {
      id: 2,
      type: "Controle",
      title: "Jaarlijkse gezondheidscheck",
      date: "2024-08-15",
      daysUntil: 30,
      priority: "Normaal",
      status: "Gepland",
      enabled: true
    },
    {
      id: 3,
      type: "Medicatie",
      title: "Wormen behandeling",
      date: "2024-09-01",
      daysUntil: 47,
      priority: "Normaal",
      status: "Gepland",
      enabled: true
    },
    {
      id: 4,
      type: "Vaccinatie",
      title: "DHP Herhalingsvaccinatie",
      date: "2025-01-15",
      daysUntil: 183,
      priority: "Normaal",
      status: "Gepland",
      enabled: true
    }
  ]);

  const [reminderSettings, setReminderSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: false,
    advanceNotice: "7" // days
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Hoog':
        return 'bg-red-100 text-red-700';
      case 'Normaal':
        return 'bg-blue-100 text-blue-700';
      case 'Laag':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Verlopen':
        return 'bg-red-100 text-red-700';
      case 'Gepland':
        return 'bg-green-100 text-green-700';
      case 'Voltooid':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Verlopen':
        return <AlertTriangle className="w-4 h-4" />;
      case 'Gepland':
        return <Clock className="w-4 h-4" />;
      case 'Voltooid':
        return <Check className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const formatDaysUntil = (days: number) => {
    if (days < 0) {
      return `${Math.abs(days)} dagen geleden`;
    } else if (days === 0) {
      return 'Vandaag';
    } else if (days === 1) {
      return 'Morgen';
    } else if (days <= 7) {
      return `Over ${days} dagen`;
    } else if (days <= 30) {
      return `Over ${Math.ceil(days / 7)} weken`;
    } else {
      return `Over ${Math.ceil(days / 30)} maanden`;
    }
  };

  const upcomingReminders = notifications.filter(n => n.daysUntil >= 0 && n.daysUntil <= 30);
  const overdueReminders = notifications.filter(n => n.daysUntil < 0);

  return (
    <div className="space-y-6">
      {/* Reminders Header */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl">Herinneringen</CardTitle>
                <CardDescription>Beheer afspraken en vaccinatie herinneringen</CardDescription>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Nieuwe Herinnering
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Nieuwe Herinnering Toevoegen</DialogTitle>
                  <DialogDescription>
                    Voeg een nieuwe herinnering toe voor vaccinaties, controles of medicatie.
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
                        <SelectItem value="checkup">Controle</SelectItem>
                        <SelectItem value="medication">Medicatie</SelectItem>
                        <SelectItem value="other">Overig</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Titel</Label>
                    <Input placeholder="Bijv. Rabiës vaccinatie" />
                  </div>
                  <div className="space-y-2">
                    <Label>Datum</Label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Prioriteit</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecteer prioriteit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">Hoog</SelectItem>
                        <SelectItem value="normal">Normaal</SelectItem>
                        <SelectItem value="low">Laag</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Notities</Label>
                    <Textarea placeholder="Aanvullende informatie..." />
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Herinnering Toevoegen
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
      </Card>

      {/* Overdue Reminders */}
      {overdueReminders.length > 0 && (
        <Card className="border-0 shadow-lg border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="w-5 h-5" />
              Verlopen Herinneringen
            </CardTitle>
            <CardDescription className="text-red-600">
              Deze items vereisen onmiddellijke aandacht
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {overdueReminders.map((reminder) => (
              <div key={reminder.id} className="p-4 bg-white border border-red-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{reminder.title}</h4>
                  <div className="flex items-center gap-2">
                    <Badge className={getPriorityColor(reminder.priority)}>
                      {reminder.priority}
                    </Badge>
                    <Badge className={getStatusColor(reminder.status)}>
                      {getStatusIcon(reminder.status)}
                      {reminder.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    {new Date(reminder.date).toLocaleDateString('nl-NL')}
                  </span>
                  <span className="text-red-600 font-medium">
                    {formatDaysUntil(reminder.daysUntil)}
                  </span>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" className="bg-green-500 hover:bg-green-600">
                    <Check className="w-4 h-4 mr-1" />
                    Voltooid
                  </Button>
                  <Button size="sm" variant="outline">
                    <Calendar className="w-4 h-4 mr-1" />
                    Opnieuw Plannen
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Upcoming Reminders */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              Aankomende Herinneringen
            </CardTitle>
            <CardDescription>
              Geplande afspraken en behandelingen
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingReminders.map((reminder) => (
              <div key={reminder.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{reminder.title}</h4>
                  <div className="flex items-center gap-2">
                    <Badge className={getPriorityColor(reminder.priority)}>
                      {reminder.priority}
                    </Badge>
                    <Switch
                      checked={reminder.enabled}
                      onCheckedChange={(checked) => {
                        setNotifications(notifications.map(n => 
                          n.id === reminder.id ? {...n, enabled: checked} : n
                        ));
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    {new Date(reminder.date).toLocaleDateString('nl-NL')}
                  </span>
                  <span className="text-blue-600 font-medium">
                    {formatDaysUntil(reminder.daysUntil)}
                  </span>
                </div>
                <div className="mt-2">
                  <Badge variant="outline" className="text-xs">
                    {reminder.type}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-orange-600" />
              Notificatie Instellingen
            </CardTitle>
            <CardDescription>
              Kies hoe u herinneringen wilt ontvangen
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base font-medium">E-mail notificaties</Label>
                  <p className="text-sm text-gray-500">Ontvang herinneringen via e-mail</p>
                </div>
                <Switch
                  checked={reminderSettings.emailNotifications}
                  onCheckedChange={(checked) => 
                    setReminderSettings({...reminderSettings, emailNotifications: checked})
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base font-medium">Push notificaties</Label>
                  <p className="text-sm text-gray-500">Browser meldingen op uw apparaat</p>
                </div>
                <Switch
                  checked={reminderSettings.pushNotifications}
                  onCheckedChange={(checked) => 
                    setReminderSettings({...reminderSettings, pushNotifications: checked})
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base font-medium">SMS berichten</Label>
                  <p className="text-sm text-gray-500">Tekstberichten naar uw telefoon</p>
                </div>
                <Switch
                  checked={reminderSettings.smsNotifications}
                  onCheckedChange={(checked) => 
                    setReminderSettings({...reminderSettings, smsNotifications: checked})
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Herinnering vooraf</Label>
              <Select 
                value={reminderSettings.advanceNotice} 
                onValueChange={(value) => 
                  setReminderSettings({...reminderSettings, advanceNotice: value})
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 dag van tevoren</SelectItem>
                  <SelectItem value="3">3 dagen van tevoren</SelectItem>
                  <SelectItem value="7">1 week van tevoren</SelectItem>
                  <SelectItem value="14">2 weken van tevoren</SelectItem>
                  <SelectItem value="30">1 maand van tevoren</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Huidige Instellingen</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• E-mail: {reminderSettings.emailNotifications ? 'Ingeschakeld' : 'Uitgeschakeld'}</li>
                <li>• Push: {reminderSettings.pushNotifications ? 'Ingeschakeld' : 'Uitgeschakeld'}</li>
                <li>• SMS: {reminderSettings.smsNotifications ? 'Ingeschakeld' : 'Uitgeschakeld'}</li>
                <li>• Vooraf herinneren: {reminderSettings.advanceNotice} dagen</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
