import { TitleGeneratorForm } from "./title-generator-form";

export default function TitleGeneratorPage() {
  return (
    <div className="container mx-auto py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-headline">Project Title Generator</h1>
        <p className="mt-4 text-muted-foreground">
          Stuck on naming your next project? Describe your project below and let AI suggest a creative and fitting title for your writeup.
        </p>
      </div>
      <div className="mt-12 max-w-2xl mx-auto">
        <TitleGeneratorForm />
      </div>
    </div>
  );
}
