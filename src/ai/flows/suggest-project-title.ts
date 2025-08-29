/**
 * @fileOverview Provides project title suggestions using generative AI.
 *
 * - suggestProjectTitle - A function that suggests a project title.
 * - SuggestProjectTitleInput - The input type for the suggestProjectTitle function.
 * - SuggestProjectTitleOutput - The return type for the suggestProjectTitle function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestProjectTitleInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A description of the project for which a title is needed.'),
});
export type SuggestProjectTitleInput = z.infer<typeof SuggestProjectTitleInputSchema>;

const SuggestProjectTitleOutputSchema = z.object({
  title: z.string().describe('A suggested title for the project.'),
});
export type SuggestProjectTitleOutput = z.infer<typeof SuggestProjectTitleOutputSchema>;

export async function suggestProjectTitle(input: SuggestProjectTitleInput): Promise<SuggestProjectTitleOutput> {
  return suggestProjectTitleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestProjectTitlePrompt',
  input: {schema: SuggestProjectTitleInputSchema},
  output: {schema: SuggestProjectTitleOutputSchema},
  prompt: `You are a creative project naming assistant. Given a description of a project, you will suggest a title for it.\n\nProject Description: {{{projectDescription}}}`,
});

const suggestProjectTitleFlow = ai.defineFlow(
  {
    name: 'suggestProjectTitleFlow',
    inputSchema: SuggestProjectTitleInputSchema,
    outputSchema: SuggestProjectTitleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
