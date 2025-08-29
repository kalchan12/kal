"use client";

import { useFormState, useFormStatus } from "react-dom";
import { handleSuggestTitle } from "./actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Wand2 } from "lucide-react";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90">
        {pending ? "Generating..." : "Generate Title"}
        <Wand2 className="ml-2 h-4 w-4" />
      </Button>
    );
}

export function TitleGeneratorForm() {
    const initialState = { message: "", errors: {}, title: null };
    const [state, dispatch] = useFormState(handleSuggestTitle, initialState);
    const { toast } = useToast();

    useEffect(() => {
        if (state.message === "AI generation failed. Please try again.") {
            toast({
                variant: "destructive",
                title: "Error",
                description: state.message,
            })
        }
    }, [state, toast])

  return (
    <Card>
      <CardContent className="pt-6">
        <form action={dispatch} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="projectDescription">Project Description</Label>
            <Textarea
              id="projectDescription"
              name="projectDescription"
              placeholder="e.g., A command and control framework written in Go for advanced penetration testing..."
              rows={5}
              required
            />
            {state?.errors?.projectDescription && (
              <p className="text-sm text-destructive">{state.errors.projectDescription[0]}</p>
            )}
          </div>
          <SubmitButton />
        </form>

        {state.title && (
            <div className="mt-8">
                <Card className="bg-muted/50 border-primary/30">
                    <CardHeader>
                        <CardTitle className="text-primary">Suggested Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-headline">{state.title}</p>
                    </CardContent>
                </Card>
            </div>
        )}

      </CardContent>
    </Card>
  );
}
