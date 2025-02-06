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
  Heart,
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
                        <Users className="h-4 w-4 mr-2" />
                        Rejoindre
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
                {/* Roles recherchés */}
                <div className="bg-white dark:bg-[#111214] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                  <div className="bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border-b border-blue-500/10 dark:border-blue-500/5 p-6">
                    <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                      Roles recherchés
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {project.roles.map((role) => (
                        <div
                          key={role}
                          className="group relative flex flex-col p-4 bg-gray-50 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500/[0.03] hover:to-indigo-500/[0.03] rounded-lg transition-all duration-200"
                        >
                          <div className="flex items-start gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/[0.05] to-indigo-500/[0.05] group-hover:from-blue-500/[0.08] group-hover:to-indigo-500/[0.08] transition-all duration-200">
                              <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <div className="font-medium text-gray-900 dark:text-gray-100">
                                  {role}
                                </div>
                                <Badge
                                  variant="secondary"
                                  className="bg-gradient-to-r from-blue-500/[0.05] to-indigo-500/[0.05] text-blue-700 dark:text-blue-300 text-xs"
                                >
                                  {role.includes("Frontend")
                                    ? "Frontend"
                                    : role.includes("Backend")
                                    ? "Backend"
                                    : role.includes("Full Stack")
                                    ? "Full Stack"
                                    : role.includes("DevOps")
                                    ? "DevOps"
                                    : role.includes("UI/UX")
                                    ? "Design"
                                    : role.includes("Data")
                                    ? "Data"
                                    : "Other"}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {role === "Frontend Dev" &&
                                  "Développement de l'interface utilisateur et expérience client"}
                                {role === "Backend Dev" &&
                                  "Architecture API et gestion des bases de données"}
                                {role === "DevOps" &&
                                  "Infrastructure cloud et automatisation des déploiements"}
                                {role === "UI/UX Designer" &&
                                  "Design d'interface et recherche utilisateur"}
                                {role === "Full Stack Dev" &&
                                  "Développement frontend et backend de bout en bout"}
                                {role === "Data Scientist" &&
                                  "Analyse de données et modèles de machine learning"}
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full mt-auto bg-white dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white group-hover:border-transparent transition-all duration-200"
                          >
                            <div className="flex items-center justify-center gap-2">
                              <Users className="h-4 w-4" />
                              <span>Postuler</span>
                            </div>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* À propos */}
                <div className="bg-white dark:bg-[#111214] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                  <div className="border-b border-gray-200 dark:border-gray-700 p-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      À propos du projet
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="prose dark:prose-invert max-w-none space-y-8">
                      {/* Description du projet - README */}
                      <div className="bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-xl overflow-hidden">
                        {/* En-tête du README */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-blue-500/10">
                              <Book className="h-5 w-5 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">
                              README.md
                            </h3>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-500"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Voir sur GitHub
                          </Button>
                        </div>

                        {/* Contenu du README */}
                        <div className="p-6 prose dark:prose-invert max-w-none">
                          <div className="flex items-center gap-4 mb-8">
                            <div className="flex gap-2">
                              <Badge
                                variant="secondary"
                                className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                              >
                                v2.1.0
                              </Badge>
                              <Badge
                                variant="secondary"
                                className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                              >
                                89% coverage
                              </Badge>
                              <Badge
                                variant="secondary"
                                className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                              >
                                TypeScript
                              </Badge>
                            </div>
                          </div>

                          <div className="space-y-6">
                            {/* Introduction */}
                            <div>
                              <h1 className="text-3xl font-bold mb-4">
                                {project.title}
                              </h1>
                              <p className="text-gray-600 dark:text-gray-400 mb-6">
                                {project.description}
                              </p>
                            </div>

                            {/* Installation */}
                            <div>
                              <h2 className="text-xl font-semibold mb-3">
                                🚀 Installation
                              </h2>
                              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                                <code className="text-sm text-gray-200">
                                  git clone https://github.com/username/
                                  {project.title.toLowerCase()}.git
                                  <br />
                                  cd {project.title.toLowerCase()}
                                  <br />
                                  npm install
                                  <br />
                                  npm run dev
                                </code>
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <h2 className="text-xl font-semibold mb-3">
                                ✨ Fonctionnalités
                              </h2>
                              <ul className="space-y-2 list-disc list-inside mb-6">
                                <li>API REST avec documentation Swagger</li>
                                <li>Authentication avec JWT et OAuth</li>
                                <li>
                                  Interface utilisateur responsive et moderne
                                </li>
                                <li>Tests automatisés (Unit, E2E)</li>
                              </ul>
                            </div>

                            {/* Stack technique */}
                            <div>
                              <h2 className="text-xl font-semibold mb-3">
                                🛠 Stack Technique
                              </h2>
                              <div className="grid grid-cols-3 gap-4 mb-6">
                                <div>
                                  <h3 className="font-medium mb-2">Frontend</h3>
                                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                    {project.tech
                                      .filter((t) =>
                                        [
                                          "React",
                                          "Vue.js",
                                          "TypeScript",
                                        ].includes(t)
                                      )
                                      .map((tech) => (
                                        <li
                                          key={tech}
                                          className="flex items-center gap-2"
                                        >
                                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                          {tech}
                                        </li>
                                      ))}
                                  </ul>
                                </div>
                                <div>
                                  <h3 className="font-medium mb-2">Backend</h3>
                                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                    {project.tech
                                      .filter((t) =>
                                        [
                                          "Node.js",
                                          "MongoDB",
                                          "PostgreSQL",
                                        ].includes(t)
                                      )
                                      .map((tech) => (
                                        <li
                                          key={tech}
                                          className="flex items-center gap-2"
                                        >
                                          <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                          {tech}
                                        </li>
                                      ))}
                                  </ul>
                                </div>
                                <div>
                                  <h3 className="font-medium mb-2">DevOps</h3>
                                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                    <li className="flex items-center gap-2">
                                      <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                                      Docker
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                                      GitHub Actions
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Contribution */}
                            <div>
                              <h2 className="text-xl font-semibold mb-3">
                                👥 Comment Contribuer
                              </h2>
                              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                                <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">
                                  Nous sommes ravis d'accueillir de nouveaux
                                  contributeurs ! Voici les étapes pour
                                  commencer :
                                </p>
                                <ol className="list-decimal list-inside space-y-2 text-sm text-blue-600 dark:text-blue-400">
                                  <li>Fork le projet</li>
                                  <li>Créez votre branche de fonctionnalité</li>
                                  <li>Committez vos changements</li>
                                  <li>Push vers la branche</li>
                                  <li>Ouvrez une Pull Request</li>
                                </ol>
                              </div>
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
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Informations */}
                <div className="bg-white dark:bg-[#111214] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                  <div className="border-b border-gray-200 dark:border-gray-700 p-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Informations
                    </h2>
                  </div>
                  <div className="p-6">
                    {/* Description détaillée */}
                    <div className="mb-8">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.title === "EcoTrack"
                          ? "Une application innovante conçue pour aider les individus et les entreprises à suivre et réduire leur empreinte carbone. Utilisant des algorithmes avancés et une interface intuitive, EcoTrack permet de visualiser l'impact environnemental quotidien et propose des solutions personnalisées pour adopter un mode de vie plus durable."
                          : "Une description détaillée du projet sera bientôt disponible."}
                      </p>
                    </div>

                    {/* Créateur */}
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 overflow-hidden rounded-xl">
                        <Avvvatars
                          value={project.creator.name}
                          style="shape"
                          size={48}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-lg text-gray-900 dark:text-white">
                              {project.creator.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              Project Lead
                            </div>
                          </div>
                          <Badge
                            variant="secondary"
                            className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                          >
                            Créateur
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stack technique */}
                <div className="bg-white dark:bg-[#111214] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                  <div className="border-b border-gray-200 dark:border-gray-700 p-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Stack technique
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      {/* Frontend */}
                      <div className="group relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-blue-600 dark:text-blue-400"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                            </svg>
                          </div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            Frontend
                          </h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {project.tech
                            .filter((t) =>
                              ["React", "Vue.js", "TypeScript"].includes(t)
                            )
                            .map((tech) => (
                              <div
                                key={tech}
                                className="flex items-center gap-3 p-3 bg-blue-50/50 dark:bg-blue-900/10 rounded-lg group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-200"
                              >
                                <div className="h-2 w-2 rounded-full bg-blue-500" />
                                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                  {tech}
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* Backend */}
                      <div className="group relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-green-600 dark:text-green-400"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
                              <path d="M12 4v16"></path>
                            </svg>
                          </div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            Backend
                          </h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {project.tech
                            .filter((t) =>
                              ["Node.js", "MongoDB", "PostgreSQL"].includes(t)
                            )
                            .map((tech) => (
                              <div
                                key={tech}
                                className="flex items-center gap-3 p-3 bg-green-50/50 dark:bg-green-900/10 rounded-lg group-hover:bg-green-50 dark:group-hover:bg-green-900/20 transition-colors duration-200"
                              >
                                <div className="h-2 w-2 rounded-full bg-green-500" />
                                <span className="text-sm font-medium text-green-700 dark:text-green-300">
                                  {tech}
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* DevOps */}
                      <div className="group relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/20">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-purple-600 dark:text-purple-400"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 3a9 9 0 0 0-9 9v9h18v-9a9 9 0 0 0-9-9z"></path>
                              <path d="M12 3v18"></path>
                            </svg>
                          </div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            DevOps
                          </h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex items-center gap-3 p-3 bg-purple-50/50 dark:bg-purple-900/10 rounded-lg group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors duration-200">
                            <div className="h-2 w-2 rounded-full bg-purple-500" />
                            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                              Docker
                            </span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-purple-50/50 dark:bg-purple-900/10 rounded-lg group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors duration-200">
                            <div className="h-2 w-2 rounded-full bg-purple-500" />
                            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                              GitHub Actions
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Activité récente */}
                <div className="bg-white dark:bg-[#111214] rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl font-semibold mb-4">
                    Activité récente
                  </h2>
                  <div className="space-y-4">
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
                      <div key={item.title} className="flex gap-3 items-start">
                        <div className="flex-shrink-0">
                          <div className="h-7 w-7 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                            {item.type === "commit" && (
                              <GitBranch className="h-3.5 w-3.5 text-green-500" />
                            )}
                            {item.type === "pr" && (
                              <GitFork className="h-3.5 w-3.5 text-purple-500" />
                            )}
                            {item.type === "issue" && (
                              <MessageSquare className="h-3.5 w-3.5 text-blue-500" />
                            )}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-0.5">
                            {item.title}
                          </div>
                          <div className="text-xs text-gray-500">
                            {item.author} · {item.date}
                          </div>
                        </div>
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

        {/* Section Commentaires */}
        <div className="border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#0c0d0f]">
          <div className="max-w-7xl mx-auto py-16 px-6">
            <div className="bg-white dark:bg-[#111214] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Commentaires
                </h2>
              </div>

              {/* Formulaire nouveau commentaire */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full overflow-hidden dark:ring-blue-500/30">
                      <Avvvatars value="current_user" style="shape" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
                      <textarea
                        className="w-full px-4 py-3 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-500/30 focus:border-blue-500/20 dark:focus:border-blue-500/30 outline-none resize-none dark:text-white transition-all duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                        placeholder="Partagez vos idées, posez des questions ou donnez votre feedback..."
                        rows={3}
                      />
                      <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200">
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          Appuyez sur Entrée pour envoyer
                        </span>
                        <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-1.5 font-mono text-[10px] font-medium text-gray-400 dark:text-gray-500">
                          <span className="text-xs">⌘</span>
                          <span className="text-xs">↵</span>
                        </kbd>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                          <MessageSquare className="h-4 w-4 mr-1.5" />
                          Commenter
                        </Button>
                        <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-700" />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-1.5"
                          >
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          Joindre un fichier
                        </Button>
                      </div>
                      <Button className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40">
                        <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-200" />
                        <div className="relative flex items-center">
                          <span className="mr-2">Publier</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                          </svg>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Liste des commentaires */}
              <div className="divide-y divide-gray-200 dark:divide-gray-800">
                {[
                  {
                    id: 1,
                    author: "Sophie Martin",
                    isOwner: true,
                    date: "il y a 2 jours",
                    content:
                      "Super projet ! J'aimerais savoir si vous prévoyez d'ajouter le support pour TypeScript dans les prochaines versions ?",
                    likes: 12,
                    replies: [
                      {
                        author: "Marc Dubois",
                        isOwner: true,
                        date: "il y a 1 jour",
                        content:
                          "Oui, c'est prévu pour la prochaine release ! On travaille actuellement sur l'intégration de TypeScript.",
                        likes: 8,
                      },
                    ],
                  },
                  {
                    id: 2,
                    author: "Thomas Bernard",
                    isOwner: false,
                    date: "il y a 3 jours",
                    content:
                      "Est-ce que vous acceptez les contributions externes ? J'aimerais participer au développement.",
                    likes: 5,
                    replies: [],
                  },
                ].map((comment) => (
                  <div key={comment.id} className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full overflow-hidden">
                          <Avvvatars value={comment.author} style="shape" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {comment.author}
                          </span>
                          {comment.isOwner && (
                            <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                              Créateur
                            </Badge>
                          )}
                          <span className="text-sm text-gray-500">·</span>
                          <span className="text-sm text-gray-500">
                            {comment.date}
                          </span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {comment.content}
                        </p>
                        <div className="mt-3 flex items-center gap-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                          >
                            <MessageSquare className="h-4 w-4 mr-1.5" />
                            Répondre
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                          >
                            <Heart className="h-4 w-4 mr-1.5" />
                            {comment.likes}
                          </Button>
                        </div>

                        {/* Réponses */}
                        {comment.replies.length > 0 && (
                          <div className="mt-4 pl-6 border-l-2 border-gray-100 dark:border-gray-800 space-y-4">
                            {comment.replies.map((reply, index) => (
                              <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0">
                                  <div className="h-8 w-8 rounded-full overflow-hidden">
                                    <Avvvatars
                                      value={reply.author}
                                      style="shape"
                                    />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="font-medium text-gray-900 dark:text-white">
                                      {reply.author}
                                    </span>
                                    {reply.isOwner && (
                                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                                        Créateur
                                      </Badge>
                                    )}
                                    <span className="text-sm text-gray-500">
                                      ·
                                    </span>
                                    <span className="text-sm text-gray-500">
                                      {reply.date}
                                    </span>
                                  </div>
                                  <p className="text-gray-700 dark:text-gray-300">
                                    {reply.content}
                                  </p>
                                  <div className="mt-2">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                                    >
                                      <Heart className="h-4 w-4 mr-1.5" />
                                      {reply.likes}
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

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
