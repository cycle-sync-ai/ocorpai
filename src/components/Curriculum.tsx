import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Users, Award, Target, BookOpen, Brain } from "lucide-react";
import { curriculum } from "@/data/curriculum";

interface CurriculumProps {
  currentLevel?: string;
  completedLessons?: string[];
}

const Curriculum = ({ currentLevel = 'beginner', completedLessons = [] }: CurriculumProps) => {
  const getLevelColor = (levelId: string) => {
    const colors = {
      beginner: 'bg-green-100 text-green-800 border-green-200',
      intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      advanced: 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[levelId as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getTotalLessons = () => {
    return curriculum.reduce((total, level) => 
      total + level.terms.reduce((termTotal, term) => termTotal + term.lessons.length, 0), 0
    );
  };

  const progress = (completedLessons.length / getTotalLessons()) * 100;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              OcorpAI <span className="text-accent">Curriculum</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Progressive learning pathway from beginner to industry-ready professional
            </p>
          </div>

          {/* Levels Accordion */}
          <Accordion type="multiple" className="space-y-4">
            {curriculum.map((level) => (
              <AccordionItem key={level.id} value={level.id} className="border rounded-lg">
                <AccordionTrigger className="px-6 py-6 hover:no-underline">
                  <div className="flex items-center justify-between w-full mr-4">
                    <div className="text-left">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{level.icon}</span>
                        <h3 className="text-2xl font-bold text-primary">{level.name}</h3>
                        <Badge className={`${getLevelColor(level.id)} font-semibold`}>
                          {level.studentStatus}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-2">{level.description}</p>
                      {level.theme && (
                        <p className="text-sm text-muted-foreground">Theme: {level.theme}</p>
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  {/* Level Overview */}
                  <div className="mb-8">
                    <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-l-4 border-primary">
                      <h4 className="text-lg font-semibold text-card-foreground mb-3">Learning Goal</h4>
                      <p className="text-muted-foreground mb-4">{level.goal}</p>
                      
                      <div className="grid md:grid-cols-3 gap-4 mt-6">
                        <div className="flex items-center gap-2">
                          <BookOpen className="text-primary" size={20} />
                          <div>
                            <p className="text-sm font-medium">{level.terms.length} Terms</p>
                            <p className="text-xs text-muted-foreground">Learning modules</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="text-accent" size={20} />
                          <div>
                            <p className="text-sm font-medium">
                              {level.terms.reduce((total, term) => total + term.lessons.length, 0)} Lessons
                            </p>
                            <p className="text-xs text-muted-foreground">Total lessons</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="text-muted-foreground" size={20} />
                          <div>
                            <p className="text-sm font-medium">
                              {level.terms.reduce((total, term) => {
                                const duration = parseInt(term.duration);
                                return total + (isNaN(duration) ? 4 : duration);
                              }, 0)} Weeks
                            </p>
                            <p className="text-xs text-muted-foreground">Estimated duration</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Terms Overview */}
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-card-foreground mb-4">Learning Terms</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {level.terms.map((term, termIndex) => (
                        <Card key={term.id} className="p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-sm font-bold text-primary">{termIndex + 1}</span>
                            </div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-card-foreground mb-1">{term.title}</h5>
                              <p className="text-sm text-muted-foreground mb-2">{term.description}</p>
                              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Clock size={12} />
                                  <span>{term.duration}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users size={12} />
                                  <span>{term.lessons.length} lessons</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mb-3">
                            <h6 className="text-sm font-medium text-card-foreground mb-2">Key Objectives:</h6>
                            <ul className="space-y-1">
                              {term.objectives.slice(0, 2).map((objective, index) => (
                                <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span className="line-clamp-2">{objective}</span>
                                </li>
                              ))}
                              {term.objectives.length > 2 && (
                                <li className="text-xs text-muted-foreground">
                                  +{term.objectives.length - 2} more objectives
                                </li>
                              )}
                            </ul>
                          </div>

                          <Button size="sm" variant="outline" className="w-full">
                            Explore Term
                          </Button>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Skills & Outcomes */}
                  <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Brain className="text-primary" size={20} />
                        <h5 className="font-semibold">Skills You'll Master</h5>
                      </div>
                      <div className="space-y-2">
                        {level.terms.slice(0, 3).map((term, index) => (
                          <div key={index} className="text-sm text-muted-foreground">
                            <span className="font-medium">{term.title}:</span> {term.objectives[0]}
                          </div>
                        ))}
                      </div>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="text-accent" size={20} />
                        <h5 className="font-semibold">Learning Outcomes</h5>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">
                          • Complete {level.terms.length} comprehensive learning terms
                        </div>
                        <div className="text-sm text-muted-foreground">
                          • Master {level.terms.reduce((total, term) => total + term.lessons.length, 0)} practical lessons
                        </div>
                        <div className="text-sm text-muted-foreground">
                          • Build industry-ready portfolio projects
                        </div>
                        <div className="text-sm text-muted-foreground">
                          • Connect with expert mentors and peers
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex gap-3">
                    <Button className="flex-1">
                      Start {level.name}
                    </Button>
                    <Button variant="outline">
                      View Details
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
