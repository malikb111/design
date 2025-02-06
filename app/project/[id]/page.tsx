"use client";
import { projects } from "@/data/projects";
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
} from "lucide-react";
import Avvvatars from "avvvatars-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return null;

  return (
    <div className="min-h-screen bg-[#FAFBFC] dark:bg-[#0A0A0B]">
      <div className="flex flex-col">
        {/* Header identique à la page principale */}
        <header className="h-16 bg-white/70 dark:bg-[#111214]/70 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
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

        {/* Contenu principal */}
        <main className="flex-1">
          {/* Hero section avec les infos principales */}
          <div className="bg-white dark:bg-[#111214] border-b border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-6 py-12 max-w-7xl">
              <div className="flex flex-col gap-8">
                {/* Bouton retour */}
                <Link href="/">
                  <Button variant="ghost" className="group mb-4">
                    <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Retour aux projets
                  </Button>
                </Link>

                {/* En-tête du projet */}
                <div className="flex items-start gap-8">
                  <div className="h-24 w-24 overflow-hidden rounded-2xl">
                    <Avvvatars value={project.title} style="shape" size={96} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h1>
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                        >
                          Open for contributors
                        </Badge>
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-full bg-yellow-400/10">
                            <Star className="h-5 w-5 text-yellow-500" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold">
                              {project.stars}
                            </div>
                            <div className="text-sm text-gray-500">Stars</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-full bg-blue-500/10">
                            <GitFork className="h-5 w-5 text-blue-500" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold">432</div>
                            <div className="text-sm text-gray-500">Forks</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-full bg-green-500/10">
                            <Activity className="h-5 w-5 text-green-500" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold">89</div>
                            <div className="text-sm text-gray-500">
                              Contributeurs
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mt-4">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 mt-8">
                      <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        <GitBranch className="h-4 w-4 mr-2" />
                        Fork Project
                      </Button>
                      <Button variant="outline">
                        <Star className="h-4 w-4 mr-2" />
                        Star Project
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu détaillé */}
          <div className="container mx-auto px-6 py-12 max-w-7xl">
            <div className="grid grid-cols-3 gap-8">
              {/* Colonne principale */}
              <div className="col-span-2 space-y-8">
                {/* À propos */}
                <div className="bg-white dark:bg-[#111214] rounded-xl overflow-hidden">
                  {/* En-tête avec gradient */}
                  <div className="bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border-b border-blue-500/10 dark:border-blue-500/5 p-6">
                    <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                      À propos du projet
                    </h2>
                  </div>

                  <div className="p-6">
                    <div className="prose dark:prose-invert max-w-none space-y-8">
                      {/* Description du projet */}
                      <div className="bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-xl p-6 border border-blue-500/10 dark:border-blue-500/5">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-blue-500/10">
                            <Activity className="h-5 w-5 text-blue-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">
                            État actuel
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <div className="grid grid-cols-3 gap-4 mt-6">
                          <div className="p-4 bg-white/60 dark:bg-gray-800/40 rounded-lg">
                            <div className="font-medium mb-1">Version</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              v2.1.0-beta
                            </div>
                          </div>
                          <div className="p-4 bg-white/60 dark:bg-gray-800/40 rounded-lg">
                            <div className="font-medium mb-1">
                              Dernière mise à jour
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Il y a 2 jours
                            </div>
                          </div>
                          <div className="p-4 bg-white/60 dark:bg-gray-800/40 rounded-lg">
                            <div className="font-medium mb-1">
                              Prochaine version
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              v2.2.0 (Mars 2024)
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Prochaines améliorations */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-purple-500/10">
                            <GitBranch className="h-5 w-5 text-purple-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">
                            Prochaines améliorations
                          </h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-500/[0.05] to-blue-500/[0.05] rounded-lg border border-purple-500/10">
                            <div className="p-2 rounded-lg bg-purple-500/10">
                              <Activity className="h-5 w-5 text-purple-500" />
                            </div>
                            <div>
                              <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-1">
                                API GraphQL
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Migration de l'API REST vers GraphQL pour plus
                                de flexibilité
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-500/[0.05] to-indigo-500/[0.05] rounded-lg border border-blue-500/10">
                            <div className="p-2 rounded-lg bg-blue-500/10">
                              <Users className="h-5 w-5 text-blue-500" />
                            </div>
                            <div>
                              <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-1">
                                Authentification
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Support de l'authentification OAuth et SSO
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Comment contribuer */}
                      <div className="bg-gradient-to-br from-blue-500/[0.08] to-indigo-500/[0.08] rounded-xl p-6 border border-blue-500/10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 rounded-lg bg-green-500/10">
                            <GitBranch className="h-5 w-5 text-green-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">
                            Missions disponibles
                          </h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="group p-4 bg-white/40 dark:bg-gray-800/40 rounded-lg hover:bg-gradient-to-br hover:from-green-500/[0.05] hover:to-blue-500/[0.05] transition-all duration-200">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-green-700 dark:text-green-300">
                                API GraphQL
                              </h4>
                              <Badge className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                                Backend
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                              Implémenter les nouveaux endpoints GraphQL et les
                              resolvers associés
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Activity className="h-4 w-4" />
                                Priorité haute
                              </div>
                              <div className="flex items-center gap-1">
                                <GitBranch className="h-4 w-4" />4 PR en cours
                              </div>
                            </div>
                          </div>
                          <div className="group p-4 bg-white/40 dark:bg-gray-800/40 rounded-lg hover:bg-gradient-to-br hover:from-green-500/[0.05] hover:to-blue-500/[0.05] transition-all duration-200">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-green-700 dark:text-green-300">
                                Tests E2E
                              </h4>
                              <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                Testing
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                              Ajouter des tests E2E avec Cypress pour les
                              nouvelles fonctionnalités
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Activity className="h-4 w-4" />
                                Priorité moyenne
                              </div>
                              <div className="flex items-center gap-1">
                                <GitBranch className="h-4 w-4" />2 PR en cours
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="bg-white dark:bg-[#111214] rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl font-semibold mb-6">
                    Stack technique
                  </h2>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                        Frontend
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech
                          .filter((t) =>
                            ["React", "Vue.js", "TypeScript"].includes(t)
                          )
                          .map((tech) => (
                            <Badge
                              key={tech}
                              className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-3 py-1.5 text-sm"
                            >
                              {tech}
                            </Badge>
                          ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                        Backend
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech
                          .filter((t) =>
                            ["Node.js", "MongoDB", "PostgreSQL"].includes(t)
                          )
                          .map((tech) => (
                            <Badge
                              key={tech}
                              className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-3 py-1.5 text-sm"
                            >
                              {tech}
                            </Badge>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline d'activité */}
                <div className="bg-white dark:bg-[#111214] rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl font-semibold mb-6">
                    Activité récente
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        type: "commit",
                        title: "Update documentation for API endpoints",
                        author: "Alice Johnson",
                        date: "il y a 2 heures",
                      },
                      {
                        type: "pr",
                        title: "Add new feature for user authentication",
                        author: "Bob Smith",
                        date: "il y a 1 jour",
                      },
                      {
                        type: "issue",
                        title: "Fix bug in login form validation",
                        author: "Charlie Brown",
                        date: "il y a 2 jours",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                            {item.type === "commit" && (
                              <GitBranch className="h-4 w-4 text-green-500" />
                            )}
                            {item.type === "pr" && (
                              <GitFork className="h-4 w-4 text-purple-500" />
                            )}
                            {item.type === "issue" && (
                              <MessageSquare className="h-4 w-4 text-blue-500" />
                            )}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{item.title}</span>
                            <span className="text-sm text-gray-500">
                              par {item.author}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500">
                            {item.date}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Créateur */}
                <div className="bg-white dark:bg-[#111214] rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl font-semibold mb-4">Créateur</h2>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 overflow-hidden rounded-full">
                      <Avvvatars
                        value={project.creator.name}
                        style="shape"
                        size={48}
                      />
                    </div>
                    <div>
                      <div className="font-medium text-lg">
                        {project.creator.name}
                      </div>
                      <div className="text-sm text-gray-500">Project Lead</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Projets</span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Contributions</span>
                      <span className="font-medium">234</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Rejoins le</span>
                      <span className="font-medium">Mars 2023</span>
                    </div>
                  </div>
                </div>

                {/* Roles recherchés */}
                <div className="bg-white dark:bg-[#111214] rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl font-semibold mb-4">
                    Roles recherchés
                  </h2>
                  <div className="space-y-3">
                    {project.roles.map((role) => (
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

                {/* Liens */}
                <div className="bg-white dark:bg-[#111214] rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl font-semibold mb-4">Liens</h2>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Github className="h-4 w-4 mr-2" />
                      Voir sur GitHub
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Discussions
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <LinkIcon className="h-4 w-4 mr-2" />
                      Site du projet
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer identique à la page principale */}
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
    </div>
  );
}
