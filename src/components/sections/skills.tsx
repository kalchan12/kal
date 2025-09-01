import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// An array of skill categories, each with a title and a list of skills.
const skillCategories = [
    {
        title: "Offensive Security",
        skills: [
            { name: 'Web Application Pentesting', level: 95 },
            { name: 'Network Pentesting', level: 90 },
            { name: 'Reverse Engineering', level: 75 },
            { name: 'Social Engineering', level: 80 },
        ]
    },
    {
        title: "Defensive Security",
        skills: [
            { name: 'Incident Response', level: 85 },
            { name: 'Threat Modeling', level: 90 },
            { name: 'Secure Code Review', level: 95 },
            { name: 'SIEM & Log Analysis', level: 70 },
        ]
    },
    {
        title: "Programming",
        skills: [
            { name: 'Python', level: 95 },
            { name: 'Go', level: 85 },
            { name: 'JavaScript / TypeScript', level: 80 },
            { name: 'Rust', level: 65 },
        ]
    }
]

/**
 * The Skills section of the portfolio page.
 * It displays a list of skills categorized into different sections.
 * Each skill has a name and a proficiency level, which is displayed as a progress bar.
 */
export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-muted/20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-headline md:text-4xl text-center">Technical Skills</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map(category => (
                <Card key={category.title}>
                    <CardHeader>
                        <CardTitle className="text-primary">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {category.skills.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between items-center mb-1">
                                <p className="text-sm font-medium">{skill.name}</p>
                                <p className="text-sm text-muted-foreground">{skill.level}%</p>
                            </div>
                            {/* A progress bar to visualize the skill level. */}
                            <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
                          </div>
                        ))}
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}