import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Target, 
  Award, 
  Clock, 
  Calendar,
  CheckCircle,
  Star,
  BookOpen,
  Users,
  Brain
} from "lucide-react";
import { ProgressTracking } from "@/types/ai-feedback";

interface ProgressDashboardProps {
  progress: ProgressTracking;
  recentAchievements?: string[];
  upcomingDeadlines?: Array<{
    id: string;
    title: string;
    dueDate: Date;
    type: 'lesson' | 'assignment' | 'session';
  }>;
}

const ProgressDashboard = ({ 
  progress, 
  recentAchievements = [], 
  upcomingDeadlines = [] 
}: ProgressDashboardProps) => {
  const skillCategories = [
    { name: "Sketching", skills: ["Line Quality", "Perspective", "Composition"] },
    { name: "Digital Design", skills: ["CAD Modeling", "Rendering", "Visualization"] },
    { name: "Materials", skills: ["Material Science", "Manufacturing", "Sustainability"] },
    { name: "Professional", skills: ["Presentation", "Portfolio", "Communication"] }
  ];

  const getSkillScore = (skill: string) => {
    return progress.skillScores[skill] || 0;
  };

  const getLevelProgress = () => {
    const totalLessons = 27; // Total lessons across all levels
    const completed = progress.completedLessons.length;
    return (completed / totalLessons) * 100;
  };

  const getStreakColor = (streak: number) => {
    if (streak >= 30) return "text-green-600";
    if (streak >= 7) return "text-blue-600";
    return "text-orange-600";
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Your <span className="text-accent">Learning Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Track your progress and celebrate your achievements
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Current Level */}
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Target className="text-accent" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Current Level</h3>
                      <p className="text-sm text-muted-foreground">Learning Path</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Badge className="bg-primary/10 text-primary">
                      {progress.currentLevel.charAt(0).toUpperCase() + progress.currentLevel.slice(1)}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      Term: {progress.currentTerm}
                    </p>
                  </div>
                </Card>

                {/* Learning Streak */}
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Calendar className="text-green-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Learning Streak</h3>
                      <p className="text-sm text-muted-foreground">Consecutive Days</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className={`text-2xl font-bold ${getStreakColor(progress.streak)}`}>
                      {progress.streak} days
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Last activity: {progress.lastActivity.toLocaleDateString()}
                    </p>
                  </div>
                </Card>

                {/* Achievements */}
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Award className="text-yellow-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Achievements</h3>
                      <p className="text-sm text-muted-foreground">Badges Earned</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-yellow-600">
                      {progress.achievements.length}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Keep learning to unlock more!
                    </p>
                  </div>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Achievements</h3>
                <div className="space-y-3">
                  {recentAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <CheckCircle className="text-green-600 flex-shrink-0" size={16} />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories.map((category, categoryIndex) => (
                  <Card key={categoryIndex} className="p-6">
                    <h3 className="text-lg font-semibold mb-4">{category.name}</h3>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => {
                        const score = getSkillScore(skill);
                        return (
                          <div key={skillIndex} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{skill}</span>
                              <span className="text-sm text-muted-foreground">{score}%</span>
                            </div>
                            <Progress value={score} className="h-2" />
                          </div>
                        );
                      })}
                    </div>
                  </Card>
                ))}
              </div>

              {/* Skill Development Recommendations */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">AI Recommendations</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <Brain className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <p className="text-sm font-medium">Focus on Perspective Drawing</p>
                      <p className="text-xs text-muted-foreground">
                        Your perspective skills need improvement. Practice with basic geometric shapes first.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <Star className="text-green-600 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <p className="text-sm font-medium">Excellent Line Quality</p>
                      <p className="text-xs text-muted-foreground">
                        Your line work is showing great improvement. Keep practicing!
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Achievements Tab */}
            <TabsContent value="achievements" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {progress.achievements.map((achievement, index) => (
                  <Card key={index} className="p-6 text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="text-yellow-600" size={24} />
                    </div>
                    <h3 className="font-semibold mb-2">{achievement}</h3>
                    <p className="text-sm text-muted-foreground">
                      Congratulations on this milestone!
                    </p>
                  </Card>
                ))}
              </div>

              {/* Upcoming Achievements */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Upcoming Achievements</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">5</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Complete 5 Lessons</p>
                      <p className="text-xs text-muted-foreground">2 more lessons to go</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">7</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">7-Day Learning Streak</p>
                      <p className="text-xs text-muted-foreground">3 more days to go</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Schedule Tab */}
            <TabsContent value="schedule" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Upcoming Deadlines</h3>
                  <div className="space-y-3">
                    {upcomingDeadlines.map((deadline) => (
                      <div key={deadline.id} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                        <Calendar className="text-primary flex-shrink-0" size={16} />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{deadline.title}</p>
                          <p className="text-xs text-muted-foreground">
                            Due: {deadline.dueDate.toLocaleDateString()}
                          </p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {deadline.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Learning Schedule</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Clock className="text-blue-600 flex-shrink-0" size={16} />
                      <div>
                        <p className="text-sm font-medium">Daily Practice</p>
                        <p className="text-xs text-muted-foreground">30 minutes recommended</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <BookOpen className="text-green-600 flex-shrink-0" size={16} />
                      <div>
                        <p className="text-sm font-medium">Weekly Lessons</p>
                        <p className="text-xs text-muted-foreground">2-3 lessons per week</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <Users className="text-purple-600 flex-shrink-0" size={16} />
                      <div>
                        <p className="text-sm font-medium">Mentor Sessions</p>
                        <p className="text-xs text-muted-foreground">Monthly check-ins</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProgressDashboard;
