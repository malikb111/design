"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { mockOptionLists, mockOptions } from "../mock-data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CreateOptionModal from "./CreateOptionModal";

export default function OptionsTab() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedListId, setSelectedListId] = useState<string | null>(null);
  const [isCreatingList, setIsCreatingList] = useState(false);

  const handleOpenCreateModal = (
    listId: string | null = null,
    isList: boolean = false
  ) => {
    setSelectedListId(listId);
    setIsCreatingList(isList);
    setIsCreateModalOpen(true);
  };

  return (
    <div className="p-8">
      {/* Options Lists Navigation */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-medium text-gray-900">
              Listes & Options
            </h2>
            <p className="text-sm text-gray-500">
              {mockOptions.length} options • {mockOptionLists.length} listes
            </p>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2">
                Nouveau
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem
                className="py-2.5 cursor-pointer"
                onClick={() => handleOpenCreateModal(null)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Nouvelle option
              </DropdownMenuItem>
              <DropdownMenuItem
                className="py-2.5 cursor-pointer"
                onClick={() => handleOpenCreateModal(null, true)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Nouvelle liste
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Lists Horizontal Scroll */}
        <div className="relative">
          <div className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
            <Button
              variant="ghost"
              className="flex-none h-9 px-4 text-sm font-medium bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 rounded-lg"
            >
              Tout
            </Button>
            {mockOptionLists.map((list) => (
              <Button
                key={list.id}
                variant="ghost"
                className="flex-none h-9 px-4 text-sm font-medium text-gray-600 hover:text-[#25D366] hover:bg-[#25D366]/10 rounded-lg"
              >
                {list.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Options by List */}
      <div className="space-y-12">
        {mockOptionLists.map((list) => {
          const listOptions = mockOptions.filter(
            (option) => option.optionListId === list.id
          );

          return (
            <div key={list.id}>
              {/* List Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                    <span className="text-lg font-medium text-orange-600">
                      {list.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {list.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {listOptions.length} options
                    </p>
                  </div>
                </div>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {/* Option Cards */}
                {listOptions.map((option) => (
                  <div
                    key={option.id}
                    className="aspect-square rounded-xl border border-gray-100 bg-white overflow-hidden group cursor-pointer hover:border-[#25D366] transition-colors"
                  >
                    <div className="relative h-3/5 overflow-hidden">
                      <Image
                        src={option.image}
                        alt={option.name}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900">
                        {option.name}
                      </h3>
                      <div className="flex items-center justify-between mt-3">
                        <Badge
                          variant="outline"
                          className="bg-orange-50 text-orange-600 border-orange-200"
                        >
                          {list.name}
                        </Badge>
                        <span className="font-medium text-gray-900">
                          + {option.price.toFixed(2)} €
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add Option Card */}
                <button
                  onClick={() => handleOpenCreateModal(list.id)}
                  className="aspect-square rounded-xl border-2 border-dashed border-gray-200 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-colors flex flex-col items-center justify-center gap-3 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-[#25D366]/10 flex items-center justify-center transition-colors">
                    <Plus className="h-6 w-6 text-gray-400 group-hover:text-[#25D366]" />
                  </div>
                  <div className="text-center">
                    <span className="block text-sm font-medium text-gray-900 group-hover:text-[#25D366]">
                      Nouvelle option
                    </span>
                    <span className="text-sm text-gray-500 group-hover:text-[#25D366]/80">
                      dans {list.name}
                    </span>
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Create Option Modal */}
      <CreateOptionModal
        isOpen={isCreateModalOpen}
        onClose={() => {
          setIsCreateModalOpen(false);
          setSelectedListId(null);
          setIsCreatingList(false);
        }}
        initialListId={selectedListId}
        isCreatingList={isCreatingList}
      />
    </div>
  );
}
