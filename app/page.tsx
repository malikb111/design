"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  Bell,
  Menu,
  Compass,
  Star,
  Users,
  Settings,
  LogOut,
  Home,
  ChevronDown,
  User,
  Plus,
  Activity,
  Clock,
  Book,
  ArrowUpDown,
  Github,
  GitFork,
  Info,
  Calendar,
  Link as LinkIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Avvvatars from "avvvatars-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { projects } from "@/data/projects";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function HomeComponent() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <div className="min-h-screen bg-[#FAFBFC] dark:bg-[#0A0A0B]">
      <div className="flex flex-col">
        {/* Navbar réorganisée */}
        <header className="h-16 bg-white/70 dark:bg-[#111214]/70 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-6 max-w-7xl h-full">
            <div className="h-full flex items-center justify-between">
              <div className="flex items-center gap-8">
                {/* Logo amélioré */}
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 text-transparent bg-clip-text">
                    OpenSource Together
                  </span>
                </div>

                {/* Navigation principale */}
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
                {/* Bouton Create revu */}
                <Button
                  size="sm"
                  className="h-9 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 rounded-lg font-medium transition-all duration-200 group"
                >
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                      <div className="h-4 w-4 rounded-full bg-white/40 flex items-center justify-center">
                        <Plus className="h-3 w-3" />
                      </div>
                    </div>
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      Create Project
                    </span>
                  </div>
                </Button>

                {/* Séparateur vertical */}
                <div className="h-7 w-[1px] bg-gray-200 dark:bg-gray-700" />

                {/* Groupe notifications et profil */}
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

        {/* Main content area avec sidebar de filtres */}
        <main className="bg-[#FAFBFC] dark:bg-[#0A0A0B]">
          <div className="container mx-auto px-6 py-8 max-w-7xl">
            <div className="flex flex-col gap-6 mb-16">
              <div className="relative">
                <div className="space-y-2">
                  <h2 className="text-4xl font-bold">
                    Welcome back{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
                      Byron Love
                    </span>{" "}
                    👋
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-xl text-gray-600 dark:text-gray-400">
                      90 projets ont été ajoutés cette semaine
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              {/* Sidebar de filtres */}
              <div className="w-64 flex-shrink-0">
                <div className="sticky top-8 space-y-6">
                  {/* Section Technologies */}
                  <div className="bg-white dark:bg-[#111214] rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "Vue",
                        "Node.js",
                        "Python",
                        "TypeScript",
                        "MongoDB",
                        "PostgreSQL",
                      ].map((tech) => (
                        <Button
                          key={tech}
                          variant="ghost"
                          size="sm"
                          className="h-7 text-xs bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                        >
                          {tech}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Section Roles */}
                  <div className="bg-white dark:bg-[#111214] rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Roles Needed
                    </h3>
                    <div className="space-y-2">
                      {[
                        "Frontend",
                        "Backend",
                        "Full Stack",
                        "DevOps",
                        "UI/UX",
                        "Data Science",
                      ].map((role) => (
                        <div key={role} className="flex items-center">
                          <Checkbox id={role} className="rounded" />
                          <label
                            htmlFor={role}
                            className="text-sm text-gray-600 dark:text-gray-400 ml-2 cursor-pointer"
                          >
                            {role}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section Difficulté */}
                  <div className="bg-white dark:bg-[#111214] rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Difficulty Level
                    </h3>
                    <div className="space-y-2">
                      {["Beginner", "Intermediate", "Advanced"].map((level) => (
                        <div key={level} className="flex items-center">
                          <RadioGroup defaultValue="beginner">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value={level.toLowerCase()}
                                id={level}
                              />
                              <Label
                                htmlFor={level}
                                className="text-sm text-gray-600 dark:text-gray-400"
                              >
                                {level}
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Liste des projets - reste inchangée */}
              <div className="flex-1">
                {/* Nouvelle position de la barre de recherche avec tri */}
                <div className="mb-6 flex gap-3 items-center">
                  <div className="relative flex-1 max-w-xl">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      placeholder="Rechercher des projets..."
                      className="w-full pl-10 pr-4 py-2 h-10 bg-white dark:bg-[#111214] hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 dark:hover:border-blue-500/30 transition-all focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
                    />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 min-w-[140px]"
                      >
                        <Clock className="h-4 w-4" />
                        Plus récents
                        <ChevronDown className="h-4 w-4 ml-auto" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[140px]">
                      <DropdownMenuItem className="flex items-center">
                        <Star className="h-4 w-4 mr-2" />
                        Plus populaires
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        Plus récents
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center">
                        <Activity className="h-4 w-4 mr-2" />
                        Plus actifs
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex flex-col gap-4">
                  {projects.map((project) => (
                    <Card
                      key={project.id}
                      className="group border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111214] hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 rounded-lg overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex gap-4">
                            <div className="flex items-center justify-center h-12 w-12 overflow-hidden">
                              <Avvvatars
                                value={project.title}
                                style="shape"
                                size={48}
                                border={false}
                                shadow={true}
                              />
                            </div>
                            <div className="flex flex-col">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-lg font-semibold text-[#1E293B] dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                  {project.title}
                                </h3>
                                <Badge
                                  variant="secondary"
                                  className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                                >
                                  Open for contributors
                                </Badge>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-7 w-7 p-0 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                                  onClick={() => setSelectedProject(project)}
                                >
                                  <Info className="h-4 w-4 text-gray-500" />
                                </Button>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                {project.description}
                              </p>
                              <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                  <div className="h-5 w-5 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                                      {project.creator.name.charAt(0)}
                                    </span>
                                  </div>
                                  <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {project.creator.name}
                                  </span>
                                </div>
                                <div className="flex gap-4">
                                  {project.tech.map((tech) => (
                                    <Badge
                                      key={tech}
                                      variant="secondary"
                                      className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-9 px-3 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                            >
                              <div className="flex items-center gap-1.5">
                                <Star
                                  className={`h-5 w-5 ${
                                    project.isStarred
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-gray-400 dark:text-gray-600"
                                  }`}
                                />
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                  {project.stars}
                                </span>
                              </div>
                            </Button>
                            <Button
                              variant="ghost"
                              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                            >
                              <Link
                                href={`/project/${project.id}`}
                                className="flex items-center"
                              >
                                View Project →
                              </Link>
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                          <div className="flex items-center gap-4">
                            <h4 className="text-sm font-medium text-[#1E293B] dark:text-white">
                              Roles Needed:
                            </h4>
                            <div className="flex gap-2">
                              {project.roles.map((role) => (
                                <Badge
                                  key={role}
                                  variant="outline"
                                  className="border-gray-200 dark:border-gray-700"
                                >
                                  <Users className="h-3.5 w-3.5 mr-1.5 text-gray-500/70" />
                                  {role}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-[#111214] border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto py-16 px-6">
            <div className="grid grid-cols-2 gap-16">
              {/* Colonne de gauche */}
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

              {/* Colonne de droite */}
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

      {/* Modal */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 overflow-hidden rounded-xl">
                    <Avvvatars
                      value={selectedProject.title}
                      style="shape"
                      size={64}
                      border={false}
                      shadow={true}
                    />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl mb-2 flex items-center gap-3">
                      {selectedProject.title}
                      <Badge
                        variant="secondary"
                        className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                      >
                        Open for contributors
                      </Badge>
                    </DialogTitle>
                    <DialogDescription className="text-base">
                      {selectedProject.description}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-8">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-4 bg-gradient-to-br from-yellow-500/5 via-yellow-500/10 to-yellow-500/5 rounded-xl border border-yellow-500/10">
                    <Star className="h-5 w-5 text-yellow-500 mb-2" />
                    <div className="text-2xl font-bold text-yellow-500">
                      {selectedProject.stars}
                    </div>
                    <div className="text-sm text-gray-500">Stars</div>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-500/5 via-blue-500/10 to-blue-500/5 rounded-xl border border-blue-500/10">
                    <GitFork className="h-5 w-5 text-blue-500 mb-2" />
                    <div className="text-2xl font-bold text-blue-500">432</div>
                    <div className="text-sm text-gray-500">Forks</div>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-gradient-to-br from-green-500/5 via-green-500/10 to-green-500/5 rounded-xl border border-green-500/10">
                    <Calendar className="h-5 w-5 text-green-500 mb-2" />
                    <div className="text-2xl font-bold text-green-500">
                      3 mois
                    </div>
                    <div className="text-sm text-gray-500">Actif depuis</div>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Roles */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Roles recherchés
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedProject.roles.map((role) => (
                      <div
                        key={role}
                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                      >
                        <Users className="h-5 w-5 text-gray-400" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Creator */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Créateur du projet
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full">
                      <Avvvatars
                        value={selectedProject.creator.name}
                        style="shape"
                        size={40}
                      />
                    </div>
                    <div>
                      <div className="font-medium">
                        {selectedProject.creator.name}
                      </div>
                      <div className="text-sm text-gray-500">Project Lead</div>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <LinkIcon className="h-4 w-4 mr-2" />
                    Voir le projet
                  </Button>
                  <Button variant="outline">
                    <Github className="h-4 w-4 mr-2" />
                    Voir sur GitHub
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
