// src/components/animated-field.tsx
"use client";

import * as React from "react";
import {
	Control,
	FieldValues,
	Path, // ✅ use Path<TFormValues> for 'name'
} from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type AnimatedFieldProps<TFormValues extends FieldValues> = {
	control: Control<TFormValues>; // ✅ now constrained
	name: Path<TFormValues>; // ✅ Path instead of FieldPath
	label: string;
	placeholder?: string;

	/** Input or Textarea */
	type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
	area?: boolean;
	rows?: number;

	/** Error message text (pass from RHF errors[name]?.message) */
	errorMsg?: string;

	/** Extra classes for the control wrapper */
	className?: string;

	/** Optional: render your own control. Receives the RHF field props. */
	renderControl?: (fieldProps: any) => React.ReactNode;
};

export function AnimatedField<TFormValues extends FieldValues>({
	control,
	name,
	label,
	placeholder,
	type = "text",
	area,
	rows = 5,
	errorMsg,
	className,
	renderControl,
}: AnimatedFieldProps<TFormValues>) {
	return (
		<FormField<TFormValues, Path<TFormValues>> // ✅ make FormField generic explicit
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className={cn(className)}>
					<FormLabel>{label}</FormLabel>

					<FormControl>
						{renderControl ? (
							renderControl(field)
						) : area ? (
							<Textarea rows={rows} placeholder={placeholder} className="min-h-32" {...(field as any)} />
						) : (
							<Input type={type} placeholder={placeholder} className="h-10" {...field} />
						)}
					</FormControl>

					{/* Reserve space to prevent layout jump when errors appear/disappear */}
					<div className="min-h-[1.25rem] mb-2">
						<AnimatePresence initial={false} mode="wait">
							{errorMsg && (
								<motion.div
									key={errorMsg}
									initial={{ opacity: 0, y: -6 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 6 }}
									transition={{ duration: 0.2 }}
								>
									<p className="text-sm font-medium text-destructive">{errorMsg}</p>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</FormItem>
			)}
		/>
	);
}
