"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  Sparkles,
  Rocket,
  Zap,
  User,
  Mail,
  Phone,
  Link as LinkIcon,
  Users2 as Users,
} from "lucide-react";

export default function Form() {
  return (
    <div className="min-h-screen flex">
      {/* Left Section - Branding */}
      <div className="hidden lg:flex w-[45%] bg-[#0A0A0B] text-white flex-col justify-between p-12 relative overflow-hidden">
        {/* Creative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[150%] aspect-square -top-1/2 -left-1/4 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(255,115,0,0.05)_90deg,transparent_180deg)]"
            style={{ animation: "spin 20s linear infinite" }}
          />
          <div className="absolute w-full h-full bg-[linear-gradient(transparent,#0A0A0B_80%)]" />
          <div
            className="absolute w-[1px] h-screen -rotate-45 left-1/4 top-0 bg-gradient-to-b from-transparent via-orange-500/20 to-transparent"
            style={{ animation: "translateY 8s ease-in-out infinite" }}
          />
          <div
            className="absolute w-[1px] h-screen -rotate-45 left-2/4 top-0 bg-gradient-to-b from-transparent via-orange-500/20 to-transparent"
            style={{ animation: "translateY 8s ease-in-out infinite 1s" }}
          />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/10 to-transparent" />
        </div>

        <div className="relative">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-orange-500/20 rounded-xl blur-xl transition-all group-hover:bg-orange-500/30" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-black border border-orange-500/20">
                <Rocket className="h-6 w-6 text-orange-400 transition-transform group-hover:scale-110 group-hover:-rotate-12" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="h-px w-20 bg-gradient-to-r from-orange-500/50 to-transparent" />
              <span className="text-xs font-medium tracking-[0.2em] text-orange-400/80 uppercase inline-block">
                Welcome to
              </span>
            </div>
          </div>

          <div className="relative">
            <h1 className="text-7xl font-light tracking-tight mb-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Apollo
              </span>{" "}
              <span className="relative inline-block font-normal">
                Link
                <Sparkles className="absolute -top-8 -right-8 h-6 w-6 text-orange-400" />
              </span>
            </h1>
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 flex flex-col gap-2">
              <div className="w-1 h-1 rounded-full bg-orange-500/30" />
              <div className="w-1 h-1 rounded-full bg-orange-500/20" />
              <div className="w-1 h-1 rounded-full bg-orange-500/10" />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col gap-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
              <div className="relative flex items-start gap-4 rounded-2xl p-4 border border-orange-500/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/5 group-hover:bg-orange-500/10 transition-colors">
                  <Zap className="h-5 w-5 text-orange-400" />
                </div>
                <p className="text-2xl font-light leading-relaxed text-white/90">
                  Generate your Apollo links in seconds, simply.
                </p>
              </div>
            </div>

            <style jsx global>{`
              @keyframes spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
              @keyframes translateY {
                0%,
                100% {
                  transform: translateY(0) rotate(-45deg);
                }
                50% {
                  transform: translateY(-50%) rotate(-45deg);
                }
              }
            `}</style>

            <div className="relative pl-14">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-gradient-to-r from-orange-500/30 to-transparent" />
              <p className="text-sm text-white/60 leading-relaxed">
                A simple and efficient solution to optimize your Apollo link
                generation process
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,125,0,0.03)_0%,transparent_60%)]" />

        <div className="w-full max-w-xl space-y-10 relative">
          {/* Personal Information Section */}
          <div className="space-y-6">
            <div className="relative">
              <div className="flex items-center gap-2 mb-1">
                <div className="h-4 w-1 rounded-full bg-orange-500/50" />
                <h2 className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                  Personal Information
                </h2>
              </div>
              <p className="text-sm text-gray-500 ml-6">
                Start by filling in your basic information
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="group space-y-2">
                <Label className="text-sm font-medium text-gray-700 pl-1 flex items-center gap-2">
                  <User className="h-3.5 w-3.5 text-gray-500" />
                  First Name
                </Label>
                <div className="relative">
                  <Input
                    placeholder="John"
                    className="h-12 pl-4 pr-10 bg-white/75 border-0 ring-1 ring-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 placeholder:text-gray-300 text-gray-900 group-hover:ring-gray-300"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 group-focus-within:text-orange-500/50 transition-colors" />
                </div>
              </div>
              <div className="group space-y-2">
                <Label className="text-sm font-medium text-gray-700 pl-1 flex items-center gap-2">
                  <User className="h-3.5 w-3.5 text-gray-500" />
                  Last Name
                </Label>
                <div className="relative">
                  <Input
                    placeholder="Doe"
                    className="h-12 pl-4 pr-10 bg-white/75 border-0 ring-1 ring-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 placeholder:text-gray-300 text-gray-900 group-hover:ring-gray-300"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 group-focus-within:text-orange-500/50 transition-colors" />
                </div>
              </div>
              <div className="group space-y-2">
                <Label className="text-sm font-medium text-gray-700 pl-1 flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-gray-500" />
                  Email
                </Label>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="email@example.com"
                    className="h-12 pl-4 pr-10 bg-white/75 border-0 ring-1 ring-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 placeholder:text-gray-300 text-gray-900 group-hover:ring-gray-300"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 group-focus-within:text-orange-500/50 transition-colors" />
                </div>
              </div>
              <div className="group space-y-2">
                <Label className="text-sm font-medium text-gray-700 pl-1 flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-gray-500" />
                  Phone
                </Label>
                <div className="relative">
                  <Input
                    placeholder="+1234567890"
                    className="h-12 pl-4 pr-10 bg-white/75 border-0 ring-1 ring-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 placeholder:text-gray-300 text-gray-900 group-hover:ring-gray-300"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 group-focus-within:text-orange-500/50 transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* Apollo Configuration Section */}
          <div className="space-y-6">
            <div className="relative">
              <div className="flex items-center gap-2 mb-1">
                <div className="h-4 w-1 rounded-full bg-orange-500/50" />
                <h2 className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                  Apollo Configuration
                </h2>
              </div>
              <p className="text-sm text-gray-500 ml-6">
                Configure your link according to your needs
              </p>
            </div>

            <div className="space-y-6">
              <RadioGroup defaultValue="no" className="grid gap-3">
                <div className="relative flex items-center">
                  <RadioGroupItem
                    value="yes"
                    id="yes"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="yes"
                    className="flex flex-1 items-center p-4 bg-white/75 ring-1 ring-gray-200 rounded-xl cursor-pointer transition-all hover:ring-orange-500/10 peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-orange-400/30 peer-data-[state=checked]:bg-orange-50/30"
                  >
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              I have an Apollo link
                            </p>
                            <p className="text-sm text-gray-500">
                              Use an existing link
                            </p>
                          </div>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-orange-400 opacity-0 peer-data-[state=checked]:opacity-100" />
                      </div>
                    </div>
                  </Label>
                </div>

                <div className="relative flex items-center">
                  <RadioGroupItem value="no" id="no" className="peer sr-only" />
                  <Label
                    htmlFor="no"
                    className="flex flex-1 items-center p-4 bg-white/75 ring-1 ring-gray-200 rounded-xl cursor-pointer transition-all hover:ring-orange-500/10 peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-orange-400/30 peer-data-[state=checked]:bg-orange-50/30"
                  >
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              I don't have a link
                            </p>
                            <p className="text-sm text-gray-500">
                              Generate a new link
                            </p>
                          </div>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-orange-400 opacity-0 peer-data-[state=checked]:opacity-100" />
                      </div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="group space-y-2">
                  <Label className="text-sm font-medium text-gray-700 pl-1 flex items-center gap-2">
                    <LinkIcon className="h-3.5 w-3.5 text-gray-500" />
                    Apollo Link
                  </Label>
                  <div className="relative">
                    <Input
                      placeholder="https://app.apollo.io/#/..."
                      className="h-12 pl-4 pr-10 font-mono text-sm bg-white/75 border-0 ring-1 ring-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 placeholder:text-gray-300 text-gray-900 group-hover:ring-gray-300"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 group-focus-within:text-orange-500/50 transition-colors" />
                  </div>
                </div>
                <div className="group space-y-2">
                  <Label className="text-sm font-medium text-gray-700 pl-1 flex items-center gap-2">
                    <Users className="h-3.5 w-3.5 text-gray-500" />
                    Number of leads
                  </Label>
                  <Select>
                    <SelectTrigger className="h-12 pl-4 pr-10 bg-white/75 border-0 ring-1 ring-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 text-gray-900 group-hover:ring-gray-300">
                      <SelectValue placeholder="Select a number" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[280px]">
                      <SelectItem value="1000">1,000 leads</SelectItem>
                      <SelectItem value="2500">2,500 leads</SelectItem>
                      <SelectItem value="5000">5,000 leads</SelectItem>
                      <SelectItem value="7500">7,500 leads</SelectItem>
                      <SelectItem value="10000">10,000 leads</SelectItem>
                      <SelectItem value="15000">15,000 leads</SelectItem>
                      <SelectItem value="20000">20,000 leads</SelectItem>
                      <SelectItem value="25000">25,000 leads</SelectItem>
                      <SelectItem value="30000">30,000 leads</SelectItem>
                      <SelectItem value="35000">35,000 leads</SelectItem>
                      <SelectItem value="40000">40,000 leads</SelectItem>
                      <SelectItem value="45000">45,000 leads</SelectItem>
                      <SelectItem value="50000">50,000 leads</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              variant="outline"
              className="flex-1 h-12 bg-transparent ring-1 ring-gray-200 hover:ring-gray-300 hover:bg-gray-50/50 text-gray-600 hover:text-gray-900 rounded-xl transition-all duration-300"
            >
              Generate Link Only
            </Button>
            <Button className="flex-1 h-12 gap-2 bg-gradient-to-br from-black to-gray-800 hover:from-gray-900 hover:to-black text-white rounded-xl shadow-lg shadow-gray-900/10 hover:shadow-gray-900/20 transition-all duration-300">
              Generate
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
