"use client";
import { useState } from "react";
import {
  Upload,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Copy,
  Plus,
  MoreVertical,
  Trash2,
} from "lucide-react";
import Image from "next/image";

// Ajout des types pour les horaires
interface TimeBlock {
  start: string;
  end: string;
}

interface DaySchedule {
  isOpen: boolean;
  timeBlocks: TimeBlock[];
}

interface WeekSchedule {
  [key: string]: DaySchedule;
}

const defaultTimeBlocks: TimeBlock[] = [
  { start: "11:30", end: "14:30" },
  { start: "18:30", end: "22:30" }
];

const initialSchedule: WeekSchedule = {
  lundi: { isOpen: true, timeBlocks: [...defaultTimeBlocks] },
  mardi: { isOpen: true, timeBlocks: [...defaultTimeBlocks] },
  mercredi: { isOpen: true, timeBlocks: [...defaultTimeBlocks] },
  jeudi: { isOpen: true, timeBlocks: [...defaultTimeBlocks] },
  vendredi: { isOpen: true, timeBlocks: [...defaultTimeBlocks] },
  samedi: { isOpen: true, timeBlocks: [...defaultTimeBlocks] },
  dimanche: { isOpen: false, timeBlocks: [] },
};

export default function ChataigneCreateLocation() {
	const [currentStep, setCurrentStep] = useState(1);
	const [schedule, setSchedule] = useState<WeekSchedule>(initialSchedule);
	const totalSteps = 5;
	const [activeDay, setActiveDay] = useState('lundi');

	const nextStep = () => {
		if (currentStep < totalSteps) {
			setCurrentStep(currentStep + 1);
		}
	};

	const prevStep = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	// Illustration unique pour toutes les étapes
	const illustration = "/Châtaigne_illustration-02 1.svg";

	// Titres et descriptions pour chaque étape
	const stepContent = [
		{
			title: "Création de votre restaurant",
			description: "Vous êtes à quelques clics de votre nouveau restaurant. Commençons par lui donner un nom."
		},
		{
			title: "Votre Logo",
			description: "Il vous servira à identifier votre restaurant parmi les autres."
		},
		{
			title: "Les bases de votre restaurant",
			description: "Ces informations essentielles nous permettent de configurer correctement vos opérations."
		},
		{
			title: "Localisation de votre restaurant",
			description: "Aidez vos clients à vous trouver en indiquant précisément où vous êtes."
		},
		{
			title: "Horaires d'ouverture",
			description: "Définissez vos horaires d'ouverture pour informer vos clients de votre disponibilité."
		}
	];

	// Labels courts pour les étapes
	const stepLabels = ["Nom", "Logo", "Infos", "Adresse", "Horaires"];

	// Ajout des fonctions de gestion des horaires
	const toggleDayOpen = (day: string) => {
		setSchedule(prev => ({
			...prev,
			[day]: {
				...prev[day],
				isOpen: !prev[day].isOpen,
				timeBlocks: !prev[day].isOpen ? defaultTimeBlocks : []
			}
		}));
	};

	const addTimeBlock = (day: string) => {
		setSchedule(prev => ({
			...prev,
			[day]: {
				...prev[day],
				timeBlocks: [...prev[day].timeBlocks, { start: "09:00", end: "18:00" }]
			}
		}));
	};

	const removeTimeBlock = (day: string, index: number) => {
		setSchedule(prev => ({
			...prev,
			[day]: {
				...prev[day],
				timeBlocks: prev[day].timeBlocks.filter((_, i) => i !== index)
			}
		}));
	};

	const updateTimeBlock = (day: string, index: number, field: 'start' | 'end', value: string) => {
		setSchedule(prev => ({
			...prev,
			[day]: {
				...prev[day],
				timeBlocks: prev[day].timeBlocks.map((block, i) => 
					i === index ? { ...block, [field]: value } : block
				)
			}
		}));
	};

	const copyToAllDays = (sourceDay: string) => {
		const sourceDaySchedule = schedule[sourceDay];
		setSchedule(prev => {
			const newSchedule = { ...prev };
			Object.keys(newSchedule).forEach(day => {
				if (day !== sourceDay) {
					newSchedule[day] = {
						isOpen: sourceDaySchedule.isOpen,
						timeBlocks: [...sourceDaySchedule.timeBlocks]
					};
				}
			});
			return newSchedule;
		});
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Header with Logo */}
			<div className="py-3 border-b border-gray-100">
				<div className="container max-w-5xl mx-auto px-4">
					<div className="flex justify-center">
						<Image
							src="/chataigne.svg"
							alt="Chataigne"
							width={130}
							height={32}
							className="h-7 w-auto"
							priority
						/>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="container max-w-5xl mx-auto px-6 py-8">
				{/* Progress Bar - Ultra minimaliste avec mini-infos */}
				<div className="mb-12">
					<div className="max-w-md mx-auto">
						{/* Barre de progression simplifiée */}
						<div className="w-full h-0.5 bg-gray-100 mb-2">
							<div 
								className="h-full bg-[#25D366] transition-all duration-300"
								style={{ width: `${(currentStep / totalSteps) * 100}%` }}
							></div>
						</div>
						
						{/* Mini-infos sur les étapes */}
						<div className="flex justify-between">
							{stepLabels.map((label, idx) => (
								<div 
									key={idx} 
									className={`text-[10px] font-medium ${
										idx + 1 <= currentStep ? 'text-[#25D366]' : 'text-gray-400'
									}`}
								>
									{label}
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Content Area - Enhanced Layout */}
				<div className="flex flex-col md:flex-row items-start">
					{/* Left side - Illustration */}
					<div className="w-full md:w-2/5 mb-8 md:mb-0 md:sticky md:top-10 self-start">
						<div className="relative flex justify-center">
							{/* SVG Illustration */}
							<div 
								className="w-[400px] h-[400px] bg-contain bg-center bg-no-repeat relative"
								style={{ backgroundImage: `url('${illustration}')` }}
								aria-label="Illustration Chataigne"
							></div>
						</div>
					</div>
					
					{/* Right side - Form content */}
					<div className="w-full md:w-3/5 md:pl-16">
						{/* Step Title and Description */}
						<div className="mb-10">
							<h1 className="text-3xl font-medium text-gray-900 mb-4">
								{stepContent[currentStep - 1].title}
							</h1>
							<p className="text-lg text-gray-600">
								{stepContent[currentStep - 1].description}
							</p>
						</div>
						
						{/* Step 1: Restaurant Name */}
						{currentStep === 1 && (
							<div className="space-y-8">
								<div>
									<label htmlFor="name" className="block text-base font-medium text-gray-800 mb-3">
										Comment s'appelle votre restaurant ?
									</label>
									<input 
										type="text"
										id="name" 
										placeholder="Ex: La Bonne Fourchette" 
										className="w-full px-4 py-3 text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#25D366] focus:border-[#25D366]" 
									/>
								</div>
							</div>
						)}
						
						{/* Step 2: Logo Upload */}
						{currentStep === 2 && (
							<div className="space-y-8">
								<div>
									<div className="bg-gray-50 p-8 rounded-lg border border-dashed border-gray-200">
										<div className="flex flex-col items-center text-center">
											<div className="mb-4 text-gray-300">
												<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M4 16L8.586 11.414C8.96106 11.0391 9.46967 10.8284 10 10.8284C10.5303 10.8284 11.0389 11.0391 11.414 11.414L16 16M14 14L15.586 12.414C15.9611 12.0391 16.4697 11.8284 17 11.8284C17.5303 11.8284 18.0389 12.0391 18.414 12.414L20 14M14 8H14.01M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
											</div>
											<p className="text-base text-gray-600 mb-4">
												Glissez votre logo ici ou cliquez pour parcourir
											</p>
											<button className="px-3 py-1.5 bg-[#25D366]/90 text-white rounded inline-flex items-center text-xs font-medium hover:bg-[#25D366] transition-colors">
												<Upload className="h-3 w-3 mr-1" />
												Télécharger
											</button>
											<p className="text-sm text-gray-500 mt-4">Formats: JPG, PNG. Taille max: 5 MB</p>
										</div>
									</div>
								</div>
							</div>
						)}
						
						{/* Step 3: General Information */}
						{currentStep === 3 && (
							<div className="space-y-8">
								<div>
									<label htmlFor="currency" className="block text-base font-medium text-gray-800 mb-3">
										Quelle devise utilisez-vous ?
									</label>
									<div className="relative">
										<select 
											id="currency"
											className="w-full px-4 py-3 text-base border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-[#25D366] focus:border-[#25D366] pr-10"
										>
											<option value="" disabled selected>Sélectionner une devise</option>
											<option value="eur">Euro (€)</option>
											<option value="chf">Franc suisse (CHF)</option>
											<option value="usd">Dollar américain ($)</option>
										</select>
										<div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
											<ChevronDown className="h-4 w-4 text-gray-400" />
										</div>
									</div>
								</div>
								
								<div>
									<label htmlFor="timezone" className="block text-base font-medium text-gray-800 mb-3">
										Quel est votre fuseau horaire ?
									</label>
									<div className="relative">
										<select 
											id="timezone"
											className="w-full px-4 py-3 text-base border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-[#25D366] focus:border-[#25D366] pr-10"
										>
											<option value="" disabled selected>Sélectionner un fuseau horaire</option>
											<option value="europe-paris">Europe/Paris</option>
											<option value="europe-zurich">Europe/Zurich</option>
											<option value="europe-london">Europe/London</option>
										</select>
										<div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
											<ChevronDown className="h-4 w-4 text-gray-400" />
										</div>
									</div>
								</div>
							</div>
						)}
						
						{/* Step 4: Location */}
						{currentStep === 4 && (
							<div className="space-y-5">
								<div className="grid grid-cols-2 gap-4">
									<div>
										<label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1.5">
											Pays
										</label>
										<div className="relative">
											<select 
												id="country"
												className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-[#25D366] focus:border-[#25D366] pr-8"
											>
												<option value="" disabled selected>Sélectionner un pays</option>
												<option value="fr">France</option>
												<option value="ch">Suisse</option>
												<option value="be">Belgique</option>
											</select>
											<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
												<ChevronDown className="h-3.5 w-3.5 text-gray-400" />
											</div>
										</div>
									</div>
									<div>
										<label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1.5">
											Ville
										</label>
										<input 
											type="text" 
											id="city"
											placeholder="Ex: Paris"
											className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#25D366] focus:border-[#25D366]" 
										/>
									</div>
								</div>
								
								<div>
									<label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1.5">
										Adresse
									</label>
									<input 
										type="text" 
										id="address"
										placeholder="Rue et numéro"
										className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#25D366] focus:border-[#25D366] mb-2" 
									/>
									<div className="grid grid-cols-2 gap-4">
										<div>
											<input 
												type="text" 
												id="zip"
												placeholder="Code postal"
												className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#25D366] focus:border-[#25D366]" 
											/>
										</div>
										<div>
											<input 
												type="text" 
												id="address2"
												placeholder="Complément (optionnel)"
												className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#25D366] focus:border-[#25D366]" 
											/>
										</div>
									</div>
								</div>
							</div>
						)}
						
						{/* Step 5: Opening Hours - Version ultra simplifiée */}
						{currentStep === 5 && (
							<div className="space-y-6">
								{/* Interface compacte avec tabs */}
								<div className="bg-white rounded-lg border border-gray-200">
									{/* Tabs des jours - Version minimaliste */}
									<div className="flex border-b border-gray-100">
										{Object.entries(schedule).map(([day, daySchedule]) => (
											<button
												key={day}
												onClick={() => setActiveDay(day)}
												className={`flex-1 py-3 text-sm font-medium relative ${
													activeDay === day 
														? 'border-b-2 border-[#25D366]' 
														: ''
												} ${
													daySchedule.isOpen 
														? 'text-[#25D366]' 
														: 'text-gray-400'
												}`}
											>
												{day.slice(0, 3).toUpperCase()}
											</button>
										))}
									</div>

									{/* Contenu du jour sélectionné */}
									<div className="p-6">
										<div className="flex items-center justify-between mb-4">
											<div className="flex items-center gap-3">
												<button
													onClick={() => toggleDayOpen(activeDay)}
													className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
														${schedule[activeDay].isOpen ? 'bg-[#25D366]' : 'bg-gray-200'}`}
												>
													<span
														className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
															${schedule[activeDay].isOpen ? 'translate-x-6' : 'translate-x-1'}`}
													/>
												</button>
												<span className="font-medium capitalize">{activeDay}</span>
											</div>
											
											<button 
												onClick={() => copyToAllDays(activeDay)}
												className="text-sm text-gray-500 font-medium flex items-center gap-2"
											>
												<Copy className="w-4 h-4" />
												Appliquer à tous les jours
											</button>
										</div>

										{schedule[activeDay].isOpen && (
											<div className="space-y-3">
												{schedule[activeDay].timeBlocks.map((block, index) => (
													<div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
														<div className="flex-1 grid grid-cols-2 gap-3">
															<input
																type="time"
																value={block.start}
																onChange={(e) => updateTimeBlock(activeDay, index, 'start', e.target.value)}
																className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#25D366] focus:border-[#25D366]"
															/>
															<input
																type="time"
																value={block.end}
																onChange={(e) => updateTimeBlock(activeDay, index, 'end', e.target.value)}
																className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#25D366] focus:border-[#25D366]"
															/>
														</div>
														<button
															onClick={() => removeTimeBlock(activeDay, index)}
															className="text-gray-400 hover:text-red-500 transition-colors"
														>
															<Trash2 className="w-4 h-4" />
														</button>
													</div>
												))}

												<button
													onClick={() => addTimeBlock(activeDay)}
													className="w-full py-3 text-sm text-gray-500 font-medium flex items-center justify-center gap-2 border-2 border-dashed border-gray-200 rounded-lg  transition-colors"
												>
													<Plus className="w-4 h-4" />
													Ajouter une plage horaire
												</button>
											</div>
										)}
									</div>
								</div>
							</div>
						)}
						
						{/* Navigation Controls */}
						<div className="mt-10 flex justify-between items-center pt-3 border-t border-gray-50">
							{currentStep > 1 ? (
								<button 
									onClick={prevStep}
									className="px-3 py-1.5 text-gray-500 rounded flex items-center text-xs font-medium hover:text-gray-700 transition-colors"
								>
									<ArrowLeft className="mr-1 w-3 h-3" />
									Retour
								</button>
							) : (
								<div></div> // Empty div to maintain space
							)}
							
							{currentStep < totalSteps ? (
								<button 
									onClick={nextStep}
									className="px-3 py-1.5 bg-[#25D366]/90 text-white rounded flex items-center text-xs font-medium ml-auto hover:bg-[#25D366] transition-colors"
								>
									Continuer
									<ArrowRight className="ml-1 w-3 h-3" />
								</button>
							) : (
								<button 
									className="px-3 py-1.5 bg-[#25D366]/90 text-white rounded flex items-center text-xs font-medium ml-auto hover:bg-[#25D366] transition-colors"
								>
									<CheckCircle className="mr-1 w-3 h-3" />
									Terminer
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}