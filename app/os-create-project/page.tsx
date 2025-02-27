"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Star,
  GitFork,
  Calendar,
  Users,
  ArrowLeft,
  Link as LinkIcon,
  MessageSquare,
  GitBranch,
  Activity,
  Home,
  Compass,
  Book,
  Plus,
  Bell,
  User,
  Settings,
  LogOut,
  Heart,
  Upload,
  Code,
  Briefcase,
  Target,
  Layers,
  CheckCircle,
  Globe,
  Lock,
  Database,
  Cloud,
  Wrench,
  Layout,
  Terminal,
} from "lucide-react";
import Avvvatars from "avvvatars-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function OSCreateProject() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  return (
    <div className="min-h-screen bg-[#FAFBFC] dark:bg-[#0A0A0B]">
      <div className="flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white/70 dark:bg-[#111214]/70 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
          <div className="container mx-auto px-6 max-w-7xl h-full">
            <div className="h-full flex items-center justify-between">
              <div className="flex items-center gap-8">
                <Link href="/">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 text-transparent bg-clip-text">
                      OpenSource Together
                    </span>
                  </div>
                </Link>

                <nav className="hidden md:flex items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 px-4 text-sm font-medium flex items-center gap-2"
                  >
                    <Home className="h-4 w-4" />
                    Home
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 px-4 text-sm font-medium flex items-center gap-2"
                  >
                    <Compass className="h-4 w-4" />
                    Explore
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 px-4 text-sm font-medium flex items-center gap-2"
                  >
                    <Star className="h-4 w-4" />
                    Starred
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 px-4 text-sm font-medium flex items-center gap-2"
                  >
                    <Book className="h-4 w-4" />
                    Guide
                  </Button>
                </nav>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-7 w-[1px] bg-gray-200 dark:bg-gray-700" />
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="relative w-9 h-9 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <Bell className="h-4 w-4" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full" />
                  </Button>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-9 w-9 p-0 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                      >
                        <div className="flex items-center justify-center h-7 w-7 overflow-hidden">
                          <Avvvatars
                            value="username@email.com"
                            style="shape"
                            size={28}
                          />
                        </div>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 mt-2" align="end">
                      <div className="px-2 pt-2 pb-4">
                        <div className="flex flex-col">
                          <p className="text-sm font-medium">username</p>
                          <p className="text-xs text-gray-500">
                            user@example.com
                          </p>
                        </div>
                      </div>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="py-2">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="py-2">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="py-2">
                        <Star className="mr-2 h-4 w-4" />
                        <span>Starred Projects</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="py-2 text-red-600 dark:text-red-400">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link href="/">
                <Button variant="ghost" className="group">
                  <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Retour
                </Button>
              </Link>
            </div>

            {/* Title Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 text-transparent bg-clip-text mb-4">
                Créer un Nouveau Projet
              </h1>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Lancez votre projet open source et trouvez des contributeurs
                passionnés pour vous aider à le réaliser.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex items-center justify-between max-w-2xl mx-auto mb-4">
                {[1, 2, 3].map((stepNumber) => (
                  <div key={stepNumber} className="flex items-center">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        stepNumber === step
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                          : stepNumber < step
                          ? "bg-green-500 text-white"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-400"
                      }`}
                    >
                      {stepNumber < step ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        stepNumber
                      )}
                    </div>
                    {stepNumber < totalSteps && (
                      <div
                        className={`w-24 h-1 mx-2 rounded ${
                          stepNumber < step
                            ? "bg-green-500"
                            : "bg-gray-100 dark:bg-gray-800"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between max-w-2xl mx-auto text-sm">
                <span className="text-gray-600 dark:text-gray-400">
                  Informations
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  Technologies
                </span>
                <span className="text-gray-600 dark:text-gray-400">Équipe</span>
              </div>
            </div>

            {/* Form Steps */}
            <div className="bg-white dark:bg-[#111214] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              {step === 1 && (
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label htmlFor="project-name">Nom du projet</Label>
                      <Input
                        id="project-name"
                        placeholder="ex: EcoTrack, DevFlow, etc."
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-4">
                      <Label htmlFor="project-description">Description</Label>
                      <Textarea
                        id="project-description"
                        placeholder="Décrivez votre projet en quelques phrases..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="space-y-4">
                      <Label htmlFor="project-category">Catégorie</Label>
                      <Select>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Sélectionnez une catégorie" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-app">
                            Application Web
                          </SelectItem>
                          <SelectItem value="mobile-app">
                            Application Mobile
                          </SelectItem>
                          <SelectItem value="desktop-app">
                            Application Desktop
                          </SelectItem>
                          <SelectItem value="library">
                            Bibliothèque/Framework
                          </SelectItem>
                          <SelectItem value="api">API/Backend</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      <Label>Visibilité</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <Button
                          variant="outline"
                          className="h-24 flex flex-col items-center justify-center gap-2 hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
                        >
                          <Globe className="h-6 w-6 text-blue-500" />
                          <span className="font-medium">Public</span>
                          <span className="text-xs text-gray-500">
                            Visible par tous
                          </span>
                        </Button>
                        <Button
                          variant="outline"
                          className="h-24 flex flex-col items-center justify-center gap-2 hover:border-purple-500 hover:bg-purple-50/50 dark:hover:bg-purple-900/20"
                        >
                          <Lock className="h-6 w-6 text-purple-500" />
                          <span className="font-medium">Privé</span>
                          <span className="text-xs text-gray-500">
                            Sur invitation uniquement
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label>Stack Technique</Label>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { icon: Code, label: "React", color: "blue" },
                          { icon: Code, label: "Vue.js", color: "green" },
                          { icon: Code, label: "Angular", color: "red" },
                          { icon: Code, label: "Node.js", color: "green" },
                          { icon: Database, label: "MongoDB", color: "green" },
                          {
                            icon: Database,
                            label: "PostgreSQL",
                            color: "blue",
                          },
                          { icon: Cloud, label: "AWS", color: "orange" },
                          { icon: Cloud, label: "Azure", color: "blue" },
                          { icon: Wrench, label: "Docker", color: "blue" },
                        ].map((tech) => (
                          <Button
                            key={tech.label}
                            variant="outline"
                            className="h-20 flex flex-col items-center justify-center gap-2 hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
                          >
                            <tech.icon className="h-5 w-5 text-blue-500" />
                            <span className="text-sm font-medium">
                              {tech.label}
                            </span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label>Outils de Développement</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <Button
                          variant="outline"
                          className="h-24 flex flex-col items-center justify-center gap-2 hover:border-purple-500 hover:bg-purple-50/50 dark:hover:bg-purple-900/20"
                        >
                          <Github className="h-6 w-6 text-purple-500" />
                          <span className="font-medium">GitHub</span>
                          <span className="text-xs text-gray-500">
                            Gestion de code
                          </span>
                        </Button>
                        <Button
                          variant="outline"
                          className="h-24 flex flex-col items-center justify-center gap-2 hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
                        >
                          <MessageSquare className="h-6 w-6 text-blue-500" />
                          <span className="font-medium">Discord</span>
                          <span className="text-xs text-gray-500">
                            Communication
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label>Rôles Recherchés</Label>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          {
                            icon: Code,
                            role: "Frontend Developer",
                            desc: "Interface utilisateur",
                            color: "blue",
                          },
                          {
                            icon: Database,
                            role: "Backend Developer",
                            desc: "API et base de données",
                            color: "green",
                          },
                          {
                            icon: Layout,
                            role: "UI/UX Designer",
                            desc: "Design et expérience",
                            color: "purple",
                          },
                          {
                            icon: Terminal,
                            role: "DevOps",
                            desc: "Infrastructure et déploiement",
                            color: "orange",
                          },
                        ].map((role) => (
                          <Button
                            key={role.role}
                            variant="outline"
                            className="h-24 flex flex-col items-center justify-center gap-2 hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
                          >
                            <role.icon className="h-6 w-6 text-blue-500" />
                            <span className="font-medium">{role.role}</span>
                            <span className="text-xs text-gray-500">
                              {role.desc}
                            </span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label htmlFor="team-size">
                        Taille de l'équipe souhaitée
                      </Label>
                      <Select>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Sélectionnez une taille d'équipe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">
                            Petite (2-5 personnes)
                          </SelectItem>
                          <SelectItem value="medium">
                            Moyenne (5-10 personnes)
                          </SelectItem>
                          <SelectItem value="large">
                            Grande (10+ personnes)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="border-t border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-900/50">
                <div className="flex justify-between">
                  <Button
                    variant="ghost"
                    onClick={() => setStep(Math.max(1, step - 1))}
                    disabled={step === 1}
                  >
                    Précédent
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                    onClick={() => {
                      if (step < totalSteps) {
                        setStep(step + 1);
                      } else {
                        // Handle form submission
                      }
                    }}
                  >
                    {step === totalSteps ? "Créer le projet" : "Suivant"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-[#111214] border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto py-16 px-6">
            <div className="grid grid-cols-2 gap-16">
              <div className="flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 text-transparent bg-clip-text">
                      OpenSource Together
                    </span>
                  </div>
                  <p className="text-base text-gray-600 dark:text-gray-400 max-w-md">
                    Une plateforme open source créée par la communauté, pour la
                    communauté. Rejoignez-nous pour construire l'avenir du
                    développement collaboratif.
                  </p>
                </div>

                <div className="flex items-center gap-6 mt-8">
                  <Button
                    variant="link"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="link"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Discord
                  </Button>
                  <Button
                    variant="link"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Twitter
                  </Button>
                </div>
              </div>

              <div className="flex flex-col items-end justify-between">
                <div className="text-right">
                  <div className="inline-block bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 p-8 rounded-2xl">
                    <div className="flex flex-col items-end gap-6">
                      <div className="flex items-center gap-2">
                        <Github className="h-6 w-6 text-gray-400 dark:text-gray-500" />
                        <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-700" />
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-500 text-sm font-medium">
                            <Star className="h-4 w-4" />
                            2.4k
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium">
                            <GitFork className="h-4 w-4" />
                            432
                          </div>
                        </div>
                      </div>
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 rounded-xl font-medium transition-all duration-200 group"
                      >
                        <div className="flex items-center gap-3">
                          <Star className="h-5 w-5 transition-transform group-hover:scale-110" />
                          <span className="font-medium">Star sur GitHub</span>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span>Open Source</span>
                  <span className="block w-1 h-1 rounded-full bg-gray-400" />
                  <span>Made with 💙</span>
                  <span className="block w-1 h-1 rounded-full bg-gray-400" />
                  <span>© 2024</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
