"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Code,
  Search,
  Plus,
  BookMarked,
  Clock,
  Star,
  Settings,
  LogOut,
  User,
  Bell,
  Command,
  Sparkles,
  Copy,
  Edit,
  Check,
  Hash,
  Trash2,
  Home as HomeIcon,
  Compass,
  GitFork,
  Share2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Avvvatars from "avvvatars-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Highlight } from "prism-react-renderer";
import { themes } from "prism-react-renderer";

// Composant CodeBlock réutilisable
const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  return (
    <Highlight theme={themes.nightOwl} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className="text-sm text-white/70 font-mono bg-black/20 rounded-lg p-4 overflow-x-auto">
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default function CodeSnippet() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const snippets = [
    {
      id: "1",
      title: "Authentication Helper",
      code: `const auth = async (token) => {
  // Verification logic
  return isValid;
}`,
      language: "javascript",
      time: "Il y a 2 heures",
      category: "React Hooks",
      categoryColor: "blue",
      tags: ["auth", "jwt", "security"],
      likes: 12,
      forks: 3,
    },
    {
      id: "2",
      title: "API Route Handler",
      code: `export async function GET(req) {
  const data = await getData();
  return Response.json(data);
}`,
      language: "typescript",
      time: "Il y a 1 jour",
      category: "API Utils",
      categoryColor: "emerald",
      tags: ["api", "nextjs", "route"],
      likes: 8,
      forks: 2,
    },
    {
      id: "3",
      title: "Tailwind Animation",
      code: `@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}`,
      language: "css",
      time: "Il y a 3 jours",
      category: "Animations",
      categoryColor: "purple",
      tags: ["animation", "keyframes", "css"],
      likes: 15,
      forks: 5,
    },
    {
      id: "4",
      title: "Nouveau Snippet",
      code: `const auth = async (token) => {
  // Verification logic
  return isValid;
}`,
      language: "javascript",
      time: "À l'instant",
      category: "Non classé",
      categoryColor: "gray",
      tags: [],
      likes: 0,
      forks: 0,
    },
    {
      id: "5",
      title: "Nouveau Snippet",
      code: `const auth = async (token) => {
  // Verification logic
  return isValid;
}`,
      language: "javascript",
      time: "À l'instant",
      category: "Non classé",
      categoryColor: "gray",
      tags: [],
      likes: 0,
      forks: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0B] via-[#111214] to-[#0A0A0B] relative overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3B82F620,transparent)]" />

      {/* Navbar Flottante */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl h-14 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_0_32px_-8px_rgba(0,0,0,0.5)] z-50">
        <div className="h-full px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Logo avec effet de brillance */}
            <div className="flex items-center gap-3 relative group">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 p-[1px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="h-full w-full rounded-xl bg-black flex items-center justify-center relative z-10">
                  <Code className="h-5 w-5 text-white" />
                </div>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-white to-white/60 text-transparent bg-clip-text">
                SnipMaster
              </span>
            </div>

            {/* Navigation Principale */}
            <nav className="flex items-center gap-1">
              <Button
                variant="ghost"
                className="h-9 px-4 text-white/70 hover:text-white hover:bg-white/5 rounded-lg flex items-center gap-2 transition-colors relative group"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <HomeIcon className="h-4 w-4" />
                <span className="text-sm font-medium">Home</span>
              </Button>
              <Button
                variant="ghost"
                className="h-9 px-4 text-white/70 hover:text-white hover:bg-white/5 rounded-lg flex items-center gap-2 transition-colors relative group"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Compass className="h-4 w-4" />
                <span className="text-sm font-medium">Hub</span>
                <div className="absolute -top-1 -right-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                </div>
              </Button>
            </nav>
          </div>

          {/* Actions de droite */}
          <div className="flex items-center gap-3">
            {/* Barre de recherche */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative flex items-center bg-white/5 rounded-xl px-3 py-1.5 border border-white/10 min-w-[240px]">
                <Command className="h-3.5 w-3.5 text-white/40 mr-2" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full bg-transparent text-sm text-white/80 placeholder-white/40 outline-none"
                />
                <kbd className="hidden md:inline-flex items-center gap-1 text-[10px] text-white/30 bg-white/5 px-1.5 py-0.5 rounded-md ml-2">
                  <span>⌘</span>
                  <span>K</span>
                </kbd>
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="relative w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Bell className="h-4 w-4 text-white/70" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_12px_0_rgba(59,130,246,0.8)]" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="h-9 w-9 p-0 rounded-xl bg-white/5 hover:bg-white/10 transition-colors overflow-hidden">
                  <Avvvatars value="user@example.com" style="shape" size={36} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-64 mt-2 bg-[#1A1B1E] border-white/10"
              >
                <div className="p-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Avvvatars
                      value="user@example.com"
                      style="shape"
                      size={40}
                    />
                    <div>
                      <p className="text-sm font-medium text-white">Alex Doe</p>
                      <p className="text-xs text-white/40">alex@snippro.dev</p>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 text-sm text-white/70 hover:text-white focus:text-white">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 text-sm text-white/70 hover:text-white focus:text-white">
                    <Settings className="h-4 w-4" />
                    <span>Paramètres</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/5" />
                  <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:text-red-300 focus:text-red-300">
                    <LogOut className="h-4 w-4" />
                    <span>Déconnexion</span>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Layout Principal avec Sidebar Flottante */}
      <div className="pt-24 pb-6 px-6">
        <div className="max-w-[1800px] mx-auto flex gap-6">
          {/* Sidebar avec effet de verre */}
          <aside className="w-72 shrink-0">
            <div className="sticky top-24 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden">
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-white/70">
                    Collections
                  </h3>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Plus className="h-4 w-4 text-white/70" />
                  </Button>
                </div>
                <div className="space-y-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-between h-9 px-3 text-white hover:bg-white/5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-sm">React Hooks</span>
                    </div>
                    <span className="text-xs text-white/40">12</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-between h-9 px-3 text-white hover:bg-white/5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-sm">API Utils</span>
                    </div>
                    <span className="text-xs text-white/40">8</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-between h-9 px-3 text-white hover:bg-white/5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      <span className="text-sm">Animations</span>
                    </div>
                    <span className="text-xs text-white/40">5</span>
                  </Button>
                </div>
              </div>

              <div className="p-4 border-b border-white/10">
                <h3 className="text-sm font-medium text-white/70 mb-2">
                  Langages
                </h3>
                <div className="space-y-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-between h-9 px-3 text-white hover:bg-white/5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <span className="text-sm">JavaScript</span>
                    </div>
                    <span className="text-xs text-white/40">24</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-between h-9 px-3 text-white hover:bg-white/5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-sm">TypeScript</span>
                    </div>
                    <span className="text-xs text-white/40">16</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-between h-9 px-3 text-white hover:bg-white/5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-pink-500" />
                      <span className="text-sm">CSS/SCSS</span>
                    </div>
                    <span className="text-xs text-white/40">9</span>
                  </Button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-medium text-white/70 mb-2">
                  Tags populaires
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 px-2 text-xs text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg"
                  >
                    <Hash className="h-3 w-3 mr-1" />
                    authentication
                    <span className="ml-1 text-white/40">18</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 px-2 text-xs text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg"
                  >
                    <Hash className="h-3 w-3 mr-1" />
                    database
                    <span className="ml-1 text-white/40">15</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 px-2 text-xs text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg"
                  >
                    <Hash className="h-3 w-3 mr-1" />
                    animation
                    <span className="ml-1 text-white/40">12</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 px-2 text-xs text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg"
                  >
                    <Hash className="h-3 w-3 mr-1" />
                    api
                    <span className="ml-1 text-white/40">10</span>
                  </Button>
                </div>
              </div>

              <div className="p-4 border-t border-white/10">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2 h-9 text-white/70 hover:text-white hover:bg-white/5"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="text-sm">Corbeille</span>
                </Button>
              </div>
            </div>
          </aside>

          {/* Zone de contenu principale */}
          <main className="flex-1 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-blue-400" />
                Mes Snippets
              </h1>

              {/* Nouveau bouton d'ajout */}
              <Button
                className="relative group px-6 h-11"
                onClick={() => setIsEditModalOpen(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl transition-all group-hover:opacity-90" />
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shimmer" />
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)]" />
                <div className="relative flex items-center gap-2">
                  <Plus className="h-5 w-5 text-white" />
                  <span className="font-medium text-white">
                    Créer un Snippet
                  </span>
                </div>
                <div className="absolute -right-1 -top-1">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                </div>
              </Button>
            </div>

            {/* Message d'encouragement */}
            {snippets.length === 0 ? (
              <div className="relative group rounded-2xl border border-dashed border-white/10 bg-white/5 p-8 text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-4">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-2xl mx-auto flex items-center justify-center">
                    <Plus className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Commencez votre collection
                  </h3>
                  <p className="text-white/60 max-w-md mx-auto">
                    Créez votre premier snippet pour commencer à construire
                    votre bibliothèque personnelle de code réutilisable.
                  </p>
                  <Button
                    className="relative group bg-white/10 hover:bg-white/20 text-white border-0"
                    onClick={() => setIsEditModalOpen(true)}
                  >
                    Créer mon premier snippet
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {snippets.map((snippet) => (
                  <div key={snippet.id} className="group relative h-fit">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative rounded-xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition-colors">
                      {/* En-tête avec catégorie */}
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className={`w-2 h-2 rounded-full bg-${snippet.categoryColor}-500`}
                        />
                        <span className="text-xs text-white/60">
                          {snippet.category}
                        </span>
                      </div>

                      {/* Titre et actions */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-sm font-medium text-white mb-2">
                            {snippet.title}
                          </h3>
                          <div className="flex flex-wrap gap-1.5">
                            {snippet.tags?.length > 0 ? (
                              snippet.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-white/5 text-white/60 hover:bg-white/10 transition-colors cursor-pointer"
                                >
                                  <Hash className="h-3 w-3 mr-1 opacity-50" />
                                  {tag}
                                </span>
                              ))
                            ) : (
                              <span className="text-xs text-white/40 italic">
                                Aucun tag
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-white/70 hover:text-white relative group/btn"
                          >
                            <Star className="h-4 w-4" />
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-black/90 text-xs text-white opacity-0 group-hover/btn:opacity-100 transition-opacity">
                              {snippet.likes}
                            </span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-white/70 hover:text-white relative group/btn"
                          >
                            <GitFork className="h-4 w-4" />
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-black/90 text-xs text-white opacity-0 group-hover/btn:opacity-100 transition-opacity">
                              {snippet.forks}
                            </span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-white/70 hover:text-white"
                            onClick={() => handleCopy(snippet.code, snippet.id)}
                          >
                            {copiedId === snippet.id ? (
                              <Check className="h-4 w-4 text-green-400" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-white/70 hover:text-white"
                            onClick={() => setIsEditModalOpen(true)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Code avec effet de survol amélioré */}
                      <div className="relative group/code">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover/code:opacity-100 transition-opacity" />
                        <CodeBlock
                          code={snippet.code}
                          language={snippet.language}
                        />
                        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#111214] to-transparent" />
                      </div>

                      {/* Footer avec métadonnées */}
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-white/40 capitalize">
                            {snippet.language}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <span className="text-xs text-white/40">
                            {snippet.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 px-2 text-xs text-white/40 hover:text-white hover:bg-white/5"
                          >
                            <Share2 className="h-3 w-3 mr-1" />
                            Partager
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Modal de modification */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="bg-[#1A1B1E] border-white/10 text-white">
          <DialogHeader>
            <DialogTitle>Modifier le snippet</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-white/70 block mb-2">
                  Titre
                </label>
                <Input
                  placeholder="Nom du snippet"
                  className="bg-white/5 border-white/10 text-white"
                  defaultValue="Authentication Helper"
                />
              </div>
              <div>
                <label className="text-sm text-white/70 block mb-2">Code</label>
                <textarea
                  className="w-full h-48 rounded-lg bg-black/20 border border-white/10 p-4 text-sm font-mono text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={`const auth = async (token) => {
  // Verification logic
  return isValid;
}`}
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
