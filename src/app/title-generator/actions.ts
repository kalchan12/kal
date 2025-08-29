"use server";

import { z } from "zod";
import { suggestProjectTitle } from "@/ai/flows/suggest-project-title";

const schema = z.object({
    projectDescription: z.string().min(20, "Please provide a more detailed description (at least 20 characters)."),
});

export async function handleSuggestTitle(prevState: any, formData: FormData) {
    const validatedFields = schema.safeParse({
        projectDescription: formData.get('projectDescription'),
    });

    if (!validatedFields.success) {
        return {
            message: "Validation failed",
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }
    
    try {
        const result = await suggestProjectTitle({ projectDescription: validatedFields.data.projectDescription });
        return { message: "Success", title: result.title, errors: {} };
    } catch (error) {
        return { message: "AI generation failed. Please try again.", title: null, errors: {} };
    }
}
